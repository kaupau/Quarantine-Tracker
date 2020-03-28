import face_recognition

def match(originalImagePath, unknownImagePath):
    originalImage = face_recognition.load_image_file(originalImagePath)
    unknownImage = face_recognition.load_image_file(unknownImagePath)

    original_encoding = face_recognition.face_encodings(originalImage)[0]
    unknown_encoding = face_recognition.face_encodings(unknownImage)[0]

    results = face_recognition.compare_faces( [ original_encoding ], unknown_encoding)[0]
    return results

if __name__ == "__main__":
    im1 = 'im1.jpeg'
    im2 = 'im2.jpg'
    print(match(im1,im2))