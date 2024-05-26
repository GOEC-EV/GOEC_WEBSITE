import { getStorage, ref, getDownloadURL, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { app } from "./firebase";
const storage = getStorage(app)


const uploadFile = async (file) => {
    const storageRef = ref(storage, `files/${crypto.randomUUID()}`)

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // Handle unsuccessful uploads
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
            });
        }
    );

}




export default uploadFile