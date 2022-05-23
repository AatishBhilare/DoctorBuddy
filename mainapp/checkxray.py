import os

from keras.models import load_model
from keras.preprocessing import image
from keras.applications.vgg16 import preprocess_input
import numpy as np

from DoctorBuddy.settings import BASE_DIR


def detect_pneumonia(ximg):
    path = BASE_DIR/'media'/ximg
    path = str(path)
    h5 = os.path.join(BASE_DIR, 'mainapp', 'chest_xray.h5')
    model = load_model(h5)
    img_file = image.load_img(path, target_size=(224, 224))
    x = image.img_to_array(img_file)
    x = np.expand_dims(x, axis=0)
    img_data = preprocess_input(x)
    classes = model.predict(img_data)
    result = classes
    if result[0][0] < 0.5:
        print("Affected By PNEUMONIA")
        return True
    else:
        print("NORMAL")
        return False


