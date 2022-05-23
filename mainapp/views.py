import os
import pickle
from datetime import datetime

from django.contrib import messages
from django.contrib.auth import logout, login, authenticate
from django.contrib.auth.decorators import login_required
from django.forms import formset_factory
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, redirect
from django.views.generic import ListView
from keras.models import load_model


# Create your views here.
from DoctorBuddy.settings import BASE_DIR
from mainapp.checkxray import detect_pneumonia
from mainapp.decorators import editdetails_authentication, allowed_doctor_only
from mainapp.forms import EditUserDetailsForm, UserChangePasswordCustom, EditArticleForm, AddUserForm, \
    AddAppointment, EditAppointment, UploadXrayForm, ReportAddForm, PrescriptionAddForm, ReportEditForm, AddArticleForm
from mainapp.models import User, Blogs, Appointments, PtoSNotification, StoPNotification, StoDNotification, \
    DtoPNotification, Prescription, Report, Xrayimage


def allnotification(request):
    ptosns = None
    stopns = None
    stodns = None
    dtopns = None
    ncount = None

    if request.user.is_staff or request.user.is_hospital_staff:
        ptosns = PtoSNotification.objects.all()
        if ptosns:
            ncount = ptosns.count()

    if request.user.is_patient:
        stopns = StoPNotification.objects.filter(patient=request.user.username)
        dtopns = DtoPNotification.objects.filter(patient=request.user.username)
        if stopns and dtopns:
            ncount = int(stopns.count()) + int(dtopns.count())
        elif stopns and not dtopns:
            ncount = stopns.count()
        elif dtopns and not stopns:
            ncount = dtopns.count()
    if request.user.is_doctor:
        stodns = StoDNotification.objects.filter(doctor=request.user.username)
        if stodns:
            ncount = stodns.count()

    return {'ptosns': ptosns,
            'stopns': stopns,
            'stodns': stodns,
            'dtopns': dtopns,
            'ncount': ncount}


@login_required(login_url='login')
def home(request):
    blogs = Blogs.objects.filter(blog_publish=True).order_by('-blog_pubdate')[:5]
    objnotify = allnotification(request)

    hstaffcnt = User.objects.filter(is_hospital_staff=True).count()
    patientcnt = User.objects.filter(is_patient=True).count()
    doctorcnt = User.objects.filter(is_doctor=True).count()
    appointmentcnt = Appointments.objects.all().count()

    context = {
        'blogs': blogs,
        'objnotify': objnotify,
        'hstaffcnt': hstaffcnt,
        'patientcnt': patientcnt,
        'doctorcnt': doctorcnt,
        'appointmentcnt': appointmentcnt,
    }

    return render(request, 'index.html', context)


def loginuser(request):
    if request.user.is_authenticated:
        return redirect('index')
    else:
        if request.method == 'POST':
            loginUsername = request.POST.get('loginUsername')
            loginPassword = request.POST.get('loginPassword')

            user = authenticate(request, username=loginUsername, password=loginPassword)

            if user is not None:
                login(request, user)
                return redirect('index')
            else:
                messages.info(request, 'username or password is incorrect')

        return render(request, 'login.html')


def logoutuser(request):
    logout(request)
    return redirect('login')


# USERS ################################################################################################################
@login_required(login_url='login')
def user_profile(request, pid1):
    objnotify = allnotification(request)
    user = User.objects.get(id=pid1)
    context = {'user': user, 'objnotify': objnotify}
    return render(request, 'user_profile.html', context)


@editdetails_authentication
def user_edit_details(request, pid1):
    objnotify = allnotification(request)
    user = User.objects.get(id=pid1)
    form = EditUserDetailsForm(instance=user)

    if request.method == 'POST':
        form = EditUserDetailsForm(request.POST, request.FILES)
        if form.is_valid():
            user_new_info = form.save(commit=False)

            user.first_name = user_new_info.first_name
            user.last_name = user_new_info.last_name
            user.email = user_new_info.email
            user.user_mobile = user_new_info.user_mobile
            user.user_address = user_new_info.user_address
            if not user_new_info.user_image == '':
                user.user_image = user_new_info.user_image

            user.save()
            return redirect('user_profile', pid1)
    context = {'form': form, 'user': user, 'objnotify': objnotify}
    return render(request, 'user_edit_details.html', context)


# CHANGE PASSWORD ######################################################################################################
@editdetails_authentication
def user_change_password(request, pid1):
    pid1 = pid1
    user = User.objects.get(id=pid1)
    objnotify = allnotification(request)

    form = UserChangePasswordCustom(user)
    if request.method == 'POST':
        form = UserChangePasswordCustom(user, request.POST)
        if form.is_valid():
            form.save()
            return redirect('user_profile', pid1)
    context = {'form': form, 'user': user, 'objnotify': objnotify}
    return render(request, 'user_change_password.html', context)


# ARTICLES #############################################################################################################
def article(request):
    objnotify = allnotification(request)
    blogs = Blogs.objects.filter(blog_publish=True).order_by('-blog_pubdate')
    context = {'blogs': blogs, 'objnotify': objnotify}
    return render(request, 'article/articles.html', context)


def single_article(request, slug):
    objnotify = allnotification(request)

    blog = Blogs.objects.get(blog_slug=slug)
    context = {'blog': blog, 'objnotify': objnotify}
    return render(request, 'article/single_article.html', context)


def add_article(request):
    objnotify = allnotification(request)

    form = AddArticleForm()

    if request.method == 'POST':
        form = AddArticleForm(request.POST, request.FILES)
        if form.is_valid():
            newform = form.save(commit=False)
            newform.blog_pubdate = datetime.now()
            newform.save()
            return redirect('articles')
    context = {'form': form, 'objnotify': objnotify}
    return render(request, 'article/add_article.html', context)


def edit_article(request, earid):
    objnotify = allnotification(request)

    blog = Blogs.objects.get(id=earid)
    form = EditArticleForm(instance=blog)

    if request.method == 'POST':
        form = EditArticleForm(request.POST, request.FILES)
        if form.is_valid():
            newform = form.save(commit=False)
            blog.blog_title = newform.blog_title
            blog.blog_slug = newform.blog_slug
            blog.blog_desc = newform.blog_desc
            if not newform.blog_img == 'emptyfile':
                blog.blog_img = newform.blog_img
            blog.blog_publish = newform.blog_publish
            blog.save()
            return redirect('articles')
    context = {'form': form, 'blogobj': blog, 'objnotify': objnotify}
    return render(request, 'article/edit_article.html', context)


# HOSPITAL STAFF #######################################################################################################
def hospital_staff(request):
    objnotify = allnotification(request)

    users_staff = User.objects.filter(is_hospital_staff=True)

    context = {'users_staff': users_staff, 'objnotify': objnotify}
    return render(request, 'hstaff/hospital_staff.html', context)


def add_hospital_staff(request):
    objnotify = allnotification(request)

    form = AddUserForm()

    if request.method == 'POST':
        form = AddUserForm(request.POST, request.FILES)
        if form.is_valid():
            newform = form.save(commit=False)
            newform.is_hospital_staff = True
            newform.save()
            return redirect('hospital-staff')
    context = {'form': form, 'objnotify': objnotify}
    return render(request, 'hstaff/add_hospital_staff.html', context)


# HOSPITAL DOCTOR ######################################################################################################
def hospital_doctors(request):
    objnotify = allnotification(request)

    users_doctor = User.objects.filter(is_doctor=True)

    context = {'users_doctor': users_doctor, 'objnotify': objnotify}
    return render(request, 'doctor/hospital_doctors.html', context)


def add_hospital_doctor(request):
    objnotify = allnotification(request)

    form = AddUserForm()

    if request.method == 'POST':
        form = AddUserForm(request.POST, request.FILES)
        if form.is_valid():
            newform = form.save(commit=False)
            newform.is_doctor = True
            newform.save()
            return redirect('hospital-doctors')
    context = {'form': form, 'objnotify': objnotify}
    return render(request, 'doctor/add_hospital_doctor.html', context)


# HOSPITAL PATIENTS ####################################################################################################
def hospital_patients(request):
    objnotify = allnotification(request)

    users_patient = User.objects.filter(is_patient=True)
    context = {'users_patient': users_patient, 'objnotify': objnotify}
    return render(request, 'patient/hospital_patients.html', context)


def add_hospital_patient(request):
    objnotify = allnotification(request)

    form = AddUserForm()

    if request.method == 'POST':
        form = AddUserForm(request.POST, request.FILES)
        if form.is_valid():
            newform = form.save(commit=False)
            newform.is_patient = True
            newform.save()
            return redirect('hospital-patients')
    context = {'form': form, 'objnotify': objnotify}
    return render(request, 'patient/add_hospital_patient.html', context)


# APPOINTMENTS #########################################################################################################
def appointments(request):
    objnotify = allnotification(request)

    objapnmts = None
    if request.user.is_staff or request.user.is_hospital_staff:
        objapnmts = Appointments.objects.all()
    elif request.user.is_patient:
        objapnmts = Appointments.objects.filter(patient__username=request.user.username)
    elif request.user.is_doctor:
        objapnmts = Appointments.objects.filter(doctor__username=request.user.username)

    context = {'objapnmts': objapnmts, 'objnotify': objnotify}
    return render(request, 'appointment/appointments.html', context)


def add_appointment(request):
    objnotify = allnotification(request)

    form = AddAppointment()
    if request.method == 'POST':
        form = AddAppointment(request.POST, request.FILES)
        if form.is_valid():
            newform = form.save(commit=False)
            newform.patient = request.user
            newform.save()
            ptosnobj = PtoSNotification.objects.create(appointment_id=newform.id, patient=newform.patient.username)
            ptosnobj.save()
            return redirect('appointments')
    context = {'form': form, 'objnotify': objnotify}
    return render(request, 'appointment/add_appointment.html', context)


def edit_appointment(request, eaid):
    objnotify = allnotification(request)

    objapnmt = Appointments.objects.get(id=eaid)
    form = EditAppointment(instance=objapnmt)
    if request.method == 'POST':
        form = EditAppointment(request.POST, request.FILES)
        if form.is_valid():
            newform = form.save(commit=False)
            if request.user.username == objapnmt.patient.username:
                print('patient')
                objapnmt.p_h_problem = newform.p_h_problem
            elif request.user.is_hospital_staff:
                print('hospital staff')
                if objapnmt.a_status == '1':
                    if newform.a_status == '2' or newform.a_status == '3':
                        objapnmt.a_status = newform.a_status
                        stopnobj = StoPNotification.objects.create(appointment_id=objapnmt.id,
                                                                   patient=objapnmt.patient.username,
                                                                   status=newform.get_a_status_display())
                        stopnobj.save()
                    if newform.a_status == '3':
                        print('ok')
                        stodnobj = StoDNotification.objects.create(appointment_id=objapnmt.id,
                                                                   doctor=objapnmt.doctor.username)
                        stodnobj.save()

                objapnmt.a_date_time = newform.a_date_time

            elif request.user.username == objapnmt.doctor.username:
                print('doctor')
                if not objapnmt.a_status == '4':
                    if newform.a_status == '4':
                        objapnmt.a_status = newform.a_status
                objapnmt.a_date_time = newform.a_date_time
                objapnmt.a_meeting_id = newform.a_meeting_id
            elif request.user.is_staff:
                print('admin')
                if objapnmt.a_status == '1':
                    if newform.a_status == '2' or newform.a_status == '3':
                        objapnmt.a_status = newform.a_status

                        stopnobj = StoPNotification.objects.create(appointment_id=objapnmt.id,
                                                                   patient=objapnmt.patient.username,
                                                                   status=newform.get_a_status_display())
                        stopnobj.save()
                    if newform.a_status == '3':
                        stodnobj = StoDNotification.objects.create(appointment_id=objapnmt.id,
                                                                   doctor=objapnmt.doctor.username)
                        stodnobj.save()
                objapnmt.p_h_problem = newform.p_h_problem
                objapnmt.a_date_time = newform.a_date_time
                objapnmt.a_meeting_id = newform.a_meeting_id

            objapnmt.save()
            return redirect('appointments')
    context = {'form': form, 'objapnmt': objapnmt, 'objnotify': objnotify}
    return render(request, 'appointment/edit_appointment.html', context)


'''def view_appointment(request, eaid):
    objnotify = allnotification(request)
    objapnmt = Appointments.objects.get(id=eaid)

    context = {'objapnmt': objapnmt, 'objnotify': objnotify}
    return render(request, 'appointment/view_appointment.html', context)'''


# NOTIFICATIONS ########################################################################################################
def deleteptosnotify(request, ptosid):
    objptosn = PtoSNotification.objects.get(id=ptosid)
    objptosn.delete()
    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


def deletestopnotify(request, stopid):
    objstopn = StoPNotification.objects.get(id=stopid)
    objstopn.delete()
    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


def deletestodnotify(request, stodid):
    objstodn = StoDNotification.objects.get(id=stodid)
    objstodn.delete()
    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


def meeting(request, aidm):
    objnotify = allnotification(request)

    objapnmt = Appointments.objects.get(id=aidm)
    context = {'objapnmt': objapnmt, 'objnotify': objnotify}
    return render(request, 'meeting/meetingpage.html', context)


def invite_patient(request):
    if request.method == 'POST':
        apnmt_id = request.POST.get('apid')
        apnmt_m_id = request.POST.get('apmid')
        objapnmt = Appointments.objects.get(id=int(apnmt_id))

        dtopobj = DtoPNotification.objects.create(appointment_id=objapnmt.id, doctor=objapnmt.doctor.username,
                                                  patient=objapnmt.patient.username, meeting_id=apnmt_m_id)
        dtopobj.save()
        return HttpResponse('Invitation Sent')
    else:
        return HttpResponse('wrong')


def deletedtopnotify(request, dtopid):
    objdtopn = DtoPNotification.objects.get(id=dtopid)
    objdtopn.delete()
    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


# REGISTER PATIENT #####################################################################################################
def registerpatient(request):
    form = AddUserForm()

    if request.method == 'POST':
        form = AddUserForm(request.POST, request.FILES)
        if form.is_valid():
            newform = form.save(commit=False)
            newform.is_patient = True
            newform.save()
            return redirect('login')
    context = {'form': form, }
    return render(request, 'register/register.html', context)


# REPORT ###############################################################################################################
def report(request):
    if request.user.is_staff or request.user.is_hospital_staff:
        reportObj = Report.objects.all()
    elif request.user.is_patient:
        reportObj = Report.objects.filter(patient__username=request.user.username)
    elif request.user.is_doctor:
        reportObj = Report.objects.filter(doctor__username=request.user.username)

    context = {'reportObj': reportObj}
    return render(request, 'report/report.html', context)


def addreport(request):
    form = ReportAddForm()
    AddPrescriptionFormSet = formset_factory(PrescriptionAddForm)
    formset = AddPrescriptionFormSet()

    if request.method == 'POST':
        form = ReportAddForm(request.POST, request.FILES)
        formset = AddPrescriptionFormSet(request.POST, request.FILES)

        if form.is_valid() and formset.is_valid():
            newform = form.save(commit=False)

            newform.doctor = request.user
            newform.save()
            reportObj = Report.objects.get(id=newform.id)

            for i in range(0, formset.total_form_count()):
                pform = formset.forms[i]
                med_type = pform.cleaned_data['med_type']
                med_name = pform.cleaned_data['med_name']
                med_timing = pform.cleaned_data['med_timing']
                med_bool = pform.cleaned_data['med_bool']

                presObj = Prescription.objects.create(med_type=med_type, med_name=med_name,
                                                      med_bool=med_bool)
                for m in med_timing:
                    presObj.med_timing.add(m)

                presObj.save()
                reportObj.d_prescription.add(presObj)
                reportObj.save()

            return redirect('report')

    context = {'form': form, 'formset': formset}
    return render(request, 'report/add_report.html', context)


def editreport(request, rid):
    reportObj = Report.objects.get(id=rid)
    form = ReportEditForm(instance=reportObj)

    if request.method == 'POST':
        form = ReportEditForm(request.POST, request.FILES)
        if form.is_valid():

            if request.user.username == reportObj.doctor.username:
                newform = form.save(commit=False)
                reportObj.checkup_report = newform.checkup_report
                reportObj.report_required = newform.report_required
                reportObj.d_suggestion = newform.d_suggestion
                reportObj.save()

            elif request.user.username == reportObj.patient.username:
                newform = form.save(commit=False)
                if not newform.patient_report_file == '':
                    reportObj.patient_report_file = newform.patient_report_file
                reportObj.save()

            return redirect('report')

    context = {'reportObj': reportObj, 'form': form}
    return render(request, 'report/edit_report.html', context)


def viewreport(request, rid):
    reportObj = Report.objects.get(id=rid)

    context = {'reportObj': reportObj}

    return render(request, 'report/view_report.html', context)


# class ReportListView(ListView):
#     model = Report
#     template_name = "view_report.html"
#
#
# def report_pdf(request, *args, **kwargs):
#     pass
#
#
# def render_pdf_view(request):
#     template_path = 'pdf.html'
#     context = {'myvar': 'this is your template context'}
#
#     response = HttpResponse(content_type='application/pdf')
#     response['Content-Disposition'] = 'filename="Report.pdf"'
#
#     template = get_template(template_path)
#     html = template.render(context)
#
#     pisa_status = pisa.CreatePDF(
#         html, dest=response)
#     if pisa_status.err:
#         return HttpResponse('We had some errors <pre>' + html + '</pre>')
#     return response


# XRAY or PNEUMONIA DETECTION ##########################################################################################
@allowed_doctor_only
def xray(request):
    return render(request, 'xray/xray.html')


@allowed_doctor_only
def xrayupload(request, rid):
    reportObj = Report.objects.get(id=rid)
    form = UploadXrayForm(initial={'report': reportObj})

    if request.method == 'POST':
        form = UploadXrayForm(request.POST, request.FILES)
        if form.is_valid():
            newform = form.save()
            newform.report = reportObj
            img = newform.xray_img
            img = str(img)
            val = detect_pneumonia(img)

            newform.xray_result = val
            newform.save()

            return redirect('singleresult', newform.id)

    context = {'form': form, 'reportObj': reportObj}

    return render(request, 'xray/xray_upload.html', context)


def xrayresult(request):
    xObj_all = Xrayimage.objects.all()

    context = {'xObj_all': xObj_all}
    return render(request, 'xray/xray_result.html', context)


def singleresult(request, xid):
    xObj = Xrayimage.objects.get(id=xid)

    context = {'xObj': xObj}
    return render(request, 'xray/'
                           'single_result.html', context)


# CONTACT US ###########################################################################################################
def contact(request):
    return render(request, 'contact/contact.html')
