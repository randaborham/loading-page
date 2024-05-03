import React from "react";
import "./Servies.css";
import Slider from "react-slick";
import img1 from "../../assest/1dfec9fd335bbe56199668894e499d48.png";
import img2 from "../../assest/89a0e0b18989932ebbceca5a7aecc22b.png";
import img3 from "../../assest/6b1ca80d4c8b796e43d7687fb082e6d5.png";
import img4 from "../../assest/a65675935d4134a07b0c7eeba832ab29.png";
import plan from "../../assest/334dc9f2a7b263e6edf44211e9e2fce9.png";
import air from "../../assest/b3c82b5e789bb638b8b144508588599d.png";

export default function Services() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="mb-2">
      <div className="title1">
        <h2>خدمات إكتشف</h2>
        <div className="title3">
          <div
            className="me-1 ms-1"
            style={{
              width: "10px",
              height: "3px",
              backgroundColor: "#3E59FE",
              marginTop: "10px",
            }}
          ></div>
          <div
            className="me-1 ms-1"
            style={{
              width: "10px",
              height: "3px",
              backgroundColor: "#3E59FE",
              marginTop: "10px",
            }}
          ></div>
          <div
            className="me-1 ms-1"
            style={{
              width: "10px",
              height: "3px",
              backgroundColor: "#3E59FE",
              marginTop: "10px",
            }}
          ></div>
          <div
            className=""
            style={{
              width: "10px",
              height: "3px",
              backgroundColor: "#3E59FE",
              marginTop: "10px",
            }}
          ></div>
          <div
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "#3E59FE",
              marginTop: "10px",
            }}
          ></div>
        </div>
      </div>
      <div className="container p-3">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-2" style={{ height: " 380px" }}>
              <div className="imgg">
                <img src={img2} alt="img" width={105} height={105}></img>
              </div>
              <div className="par">
                <h6>ميزة التوجيه الصوتي</h6>
                <p>
                  يتيح التطبيق التوجيه الصوتي للمستخدمين أثناء السفر وجعل الرحله
                  أكثر متعة وسهولة وفرادة.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-2" style={{ height: " 380px" }}>
              <div className="imgg">
                <img src={img1} alt="img" width={105} height={105}></img>
              </div>
              <div className="par">
                <h6>مرشدين سياحيين افتراضيين</h6>
                <p>
                  يمكن للمستخدمين التواصل مع مرشدين سياحيين افتراضيين للحصول على
                  استشارات ونصائح مباشرة.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-2" style={{ height: " 380px" }}>
              <div className="imgg">
                <img src={img3} alt="img" width={105} height={105}></img>
              </div>
              <div className="par">
                <h6>تنبيهات الأمان والسفر</h6>
                <p>
                  يقدم التطبيق تنبيهات فورية حول أي مشاكل أمنية أو تغييرات في
                  الجدول الزمني للرحلات.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <i className="fa-solid fa-chevron-left left"></i>
      <i className="fa-solid fa-chevron-right right"></i>
      <div style={{ backgroundColor: "#e4f0f1 " }}>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-6">
              <div className="image7">
                <div
                  className="image6 "
                  style={{ backgroundColor: "#e4f0f1 " }}
                >
                  <div className="mge">
                    <img src={img4} alt="imf"></img>
                  </div>
                </div>
              </div>
              <div className="planing">
                <img src={plan} alt="" width={60} height={60}></img>
              </div>
              <div className="planing1">
                <img src={air} alt="" width={40} height={40}></img>
              </div>
            </div>
            <div className="col-md-6 crd">
              <div className="title d-flex ">
                <div
                  style={{
                    width: "50px",
                    height: "3px",
                    backgroundColor: "#3E59FE",
                    marginTop: "10px",
                  }}
                ></div>
                <div
                  className="me-1 ms-1"
                  style={{
                    width: "10px",
                    height: "3px",
                    backgroundColor: "#3E59FE",
                    marginTop: "10px",
                  }}
                ></div>
                <div
                  className=""
                  style={{
                    width: "10px",
                    height: "3px",
                    backgroundColor: "#3E59FE",
                    marginTop: "10px",
                  }}
                ></div>
                <div style={{ color: "#3E59FE" }}> نبذة عنا</div>
              </div>
              <h2>هل لديك الفضول بمعرفتنا؟</h2>
              <p className="mt-4" style={{ color: "#1e1e2e99" }}>
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
    </div>
  );
}
