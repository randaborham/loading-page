import React from "react";
import "./Footer.css";
import img1 from "../../assest/google-play-badge-logo-png-transparent.png";
import img2 from "../../assest/5a902db97f96951c82922874.png";
import plan from "../../assest/334dc9f2a7b263e6edf44211e9e2fce9.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row g-lg-5 g-md-3">
          <div className="col-md-3 b1">
            <div className="content">
              <h5 className="mb-4">استكشف التطبيق</h5>
              <img
                src={img2}
                width={180}
                height={40}
                alt="img"
                className="mb-3"
              ></img>
              <img
                src={img1}
                width={180}
                height={40}
                alt="img"
                className="mb-3"
              ></img>
              <div className="social d-flex mt-3">
                <i class="fa-brands fa-facebook ms-4"></i>
                <i class="fa-brands fa-instagram ms-4"></i>
                <i class="fa-brands fa-x-twitter ms-4"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3 b1">
            <div className="content">
              <h5 className="mb-4">للتواصل </h5>
              <p>مساعدة التعليمات</p>
              <p>الاحكام</p>
              <p>الشركات التبعه</p>
            </div>
          </div>
          <div className="col-md-3 pe-lg-5 b1">
            <div className="content">
              <h5 className="mb-4">خريطة الموقع</h5>
              <p>الرئسية</p>
              <p>الموقع</p>
              <p>المطاعم</p>
            </div>
          </div>
          <div className="col-md-3 b2 ps-lg-5  ">
            <div className="content3">
              <img src={plan} alt="plan" className="plan4"></img>
              <h5 className="text-primary">اكتشف</h5>
              <p className="text">
                اكتشف" هو تطبيق سياحي متكامل يهدف إلى تسهيل تجربة السفر
                للمسافرين عبر توفير معلومات شاملة ومميزات فريدة. يقدم التطبيق
                قائمة بالأماكن السياحية والعروض في العديد من الوجهات السياحية في
                جميع أنحاء العالم، مما يسمح للمستخدمين بتخطيط رحلاتهم بسهولة
                وثقة.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <p className="text-center"> كل الحقوق محفوظه لشركه إكتشف لسنه 2024 @</p>
    </div>
  );
}
