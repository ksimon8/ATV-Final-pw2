const { initializeApp } = require('firebase/app');
const { getStorage, ref, deleteObject } = require('firebase/storage');

/* DADOS DE ACESSO AO FIREBASE */
const firebaseConfig = {
    apiKey: "AIzaSyDb9rtAVGlY-1UK_a4tDDFeZZn2TiiKpnc",
    authDomain: "upload-nodejs-8e780.firebaseapp.com",
    projectId: "upload-nodejs-8e780",
    storageBucket: "upload-nodejs-8e780.appspot.com",
    messagingSenderId: "1063940151000",
    appId: "1:1063940151000:web:e6be5353b07f5b995569ad",
    measurementId: "G-TV5CXZ5594"
};

/* INICIALIZAÇÃO DO FIREBASE */
const firebaseApp = initializeApp(firebaseConfig);

/* INICIALIZAÇÃO DO STORAGE DO FIREBASE */
const storage = getStorage(firebaseApp);

const deleteImage = (imagem) => {

    const deleteRef = ref(storage, imagem);

    deleteObject(deleteRef)
        .then(() => {
            console.log('IMAGEM EXCLUÍDA COM SUCESSO!');
        })
        .catch((error) => {
            console.log('ERRO AO EXCLUIR IMAGEM!');
        });

}

module.exports = deleteImage;