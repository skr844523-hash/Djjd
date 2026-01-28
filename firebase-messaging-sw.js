

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBAI2JtYFEjD73qh46XRBK6eFsLzgXB9rA",
    authDomain: "sjsj-c0dfa.firebaseapp.com",
    projectId: "sjsj-c0dfa",
    storageBucket: "sjsj-c0dfa.firebasestorage.app",
    messagingSenderId: "126155421282",
    appId: "1:126155421282:web:0654138ff119c012b5433b"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
