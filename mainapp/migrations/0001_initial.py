# Generated by Django 3.2.7 on 2021-12-15 13:34

import datetime
from django.conf import settings
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('user_mobile', models.IntegerField(null=True)),
                ('user_address', models.TextField(blank=True, null=True, verbose_name='Address')),
                ('user_image', models.ImageField(blank=True, null=True, upload_to='profileimages/')),
                ('is_hospital_staff', models.BooleanField(default=False, verbose_name='Hospital Staff')),
                ('is_patient', models.BooleanField(default=False, verbose_name='Patient')),
                ('is_doctor', models.BooleanField(default=False, verbose_name='Doctor')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name_plural': '1. Users',
            },
        ),
        migrations.CreateModel(
            name='Blogs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('blog_title', models.CharField(max_length=255, verbose_name='Title')),
                ('blog_slug', models.SlugField(max_length=255, verbose_name='Slug')),
                ('blog_desc', models.TextField(max_length=20000, verbose_name='Description')),
                ('blog_pubdate', models.DateTimeField(blank=True, default=datetime.datetime.now, null=True, verbose_name='Published Date & Time')),
                ('blog_publish', models.BooleanField(verbose_name='Publish Status')),
                ('blog_img', models.ImageField(blank=True, null=True, upload_to='blogimages/', verbose_name='Image')),
            ],
            options={
                'verbose_name': 'Articles',
                'verbose_name_plural': 'Articles',
            },
        ),
        migrations.CreateModel(
            name='DtoPNotification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('appointment_id', models.IntegerField(verbose_name='Appointment id')),
                ('doctor', models.CharField(max_length=255)),
                ('patient', models.CharField(max_length=255)),
                ('meeting_id', models.CharField(max_length=255)),
            ],
            options={
                'verbose_name_plural': 'Doctor to Patient Notification',
            },
        ),
        migrations.CreateModel(
            name='Medtime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timing', models.CharField(blank=True, max_length=20, null=True, verbose_name='Medicine Timing')),
            ],
        ),
        migrations.CreateModel(
            name='Prescription',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('med_type', models.CharField(blank=True, choices=[('1', 'Tablet'), ('2', 'Capsule'), ('3', 'Syrup'), ('4', 'Powder')], default='1', max_length=20, null=True, verbose_name='Medicine Type')),
                ('med_name', models.CharField(blank=True, max_length=255, null=True, verbose_name='Medicine Name')),
                ('med_bool', models.BooleanField(blank=True, choices=[(True, 'Before'), (False, 'After')], null=True, verbose_name='Food Before After')),
                ('med_timing', models.ManyToManyField(to='mainapp.Medtime', verbose_name='Medicine Times')),
            ],
        ),
        migrations.CreateModel(
            name='PtoSNotification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('appointment_id', models.IntegerField(verbose_name='Appointment id')),
                ('patient', models.CharField(max_length=255)),
            ],
            options={
                'verbose_name_plural': 'Patient to Staff Notification',
            },
        ),
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('checkup_report', models.TextField(blank=True, null=True, verbose_name='Report')),
                ('report_required', models.BooleanField(blank=True, null=True, verbose_name='Report Required')),
                ('patient_report_file', models.FileField(blank=True, null=True, upload_to='checkupreport/', verbose_name='Report File')),
                ('d_suggestion', models.TextField(blank=True, null=True, verbose_name='Doctor Suggestion')),
                ('report_date', models.DateField(auto_now_add=True, verbose_name='Report Date')),
                ('d_prescription', models.ManyToManyField(to='mainapp.Prescription', verbose_name='Doctor Prescription')),
                ('doctor', models.ForeignKey(blank=True, limit_choices_to={'is_doctor': True}, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='doctor2', to=settings.AUTH_USER_MODEL, verbose_name='Doctor')),
                ('patient', models.ForeignKey(blank=True, limit_choices_to={'is_patient': True}, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='patient2', to=settings.AUTH_USER_MODEL, verbose_name='Patient')),
            ],
        ),
        migrations.CreateModel(
            name='StoDNotification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('appointment_id', models.IntegerField(verbose_name='Appointment id')),
                ('doctor', models.CharField(max_length=255)),
            ],
            options={
                'verbose_name_plural': 'Staff to Doctor Notification',
            },
        ),
        migrations.CreateModel(
            name='StoPNotification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('appointment_id', models.IntegerField(verbose_name='Appointment id')),
                ('patient', models.CharField(max_length=255)),
                ('status', models.CharField(max_length=255)),
            ],
            options={
                'verbose_name_plural': 'Staff to Patient Notification',
            },
        ),
        migrations.CreateModel(
            name='Xrayimage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('xray_img', models.ImageField(upload_to='xrayimages/', verbose_name='Xray Image')),
                ('xray_result', models.BooleanField(blank=True, null=True, verbose_name='Xray Result')),
                ('report', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='mainapp.report', verbose_name='Report')),
            ],
        ),
        migrations.CreateModel(
            name='Appointments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('p_h_problem', models.TextField(blank=True, null=True, verbose_name='Health Problem')),
                ('a_status', models.CharField(blank=True, choices=[('1', 'Pending'), ('2', 'Canceled'), ('3', 'Confirm'), ('4', 'Complete')], default='1', max_length=20, null=True, verbose_name='Appointment Status')),
                ('a_date_time', models.DateTimeField(blank=True, null=True, verbose_name='Date And Time')),
                ('a_meeting_id', models.CharField(blank=True, max_length=255, null=True, verbose_name='Appointment Meeting ID')),
                ('doctor', models.ForeignKey(blank=True, limit_choices_to={'is_doctor': True}, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='doctor', to=settings.AUTH_USER_MODEL, verbose_name='Doctor')),
                ('patient', models.ForeignKey(blank=True, limit_choices_to={'is_patient': True}, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='patient', to=settings.AUTH_USER_MODEL, verbose_name='Patient')),
            ],
        ),
    ]
