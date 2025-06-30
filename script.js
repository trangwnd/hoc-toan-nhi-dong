// ✅ Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// ✅ Dán đoạn cấu hình Firebase vào đây
const firebaseConfig = {
  apiKey: "AIzaSyC2CGJe7ACv_JD-FmysC01BAVhmVYrKmFY",
  authDomain: "hoc-toan-nhi-dong.firebaseapp.com",
  projectId: "hoc-toan-nhi-dong",
  storageBucket: "hoc-toan-nhi-dong.appspot.com",
  messagingSenderId: "60592717835",
  appId: "1:60592717835:web:6a36908f2c53c2bd05070e"
};

// ✅ Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Hàm xử lý đăng nhập
window.login = function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Đăng nhập thành công!");
      console.log("Login success:", userCredential.user);
    })
    .catch((error) => {
      alert("❌ Đăng nhập thất bại: " + error.message);
      console.error("Login error:", error);
    });
};