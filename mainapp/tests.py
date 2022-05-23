from keras.models import load_model
from keras.preprocessing import image
from keras.applications.vgg16 import preprocess_input
import numpy as np


def detect_pneumonia(ximg):
    #path = "D:\Django Projects\DoctorBuddy\mainapp\person3_bacteria_10.jpeg"
    path = ximg
    path = str(path)
    model = load_model('chest_xray.h5')
    img_file = image.load_img(path, target_size=(224, 224))
    x = image.img_to_array(img_file)
    x = np.expand_dims(x, axis=0)
    img_data = preprocess_input(x)
    classes = model.predict(img_data)
    # list1 = classes.tolist()
    # print(list1)
    # result = list1[0][0]
    print(classes)
    result = classes
    print(result[0][0])
    if result[0][0] < 0.5:
        print("Affected By PNEUMONIA")
    else:
        print("NORMAL")

detect_pneumonia("D:\Django Projects\DoctorBuddy\mainapp\IM-0176-0001.jpeg")

detect_pneumonia("D:\Django Projects\DoctorBuddy\mainapp\person26_bacteria_129.jpeg")
