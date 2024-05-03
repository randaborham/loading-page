import React from "react";
import "./Poeple.css";
import img1 from "../../assest/1.png";
import img2 from "../../assest/2.png";
import img3 from "../../assest/3.png";
import qut from "../../assest/q.png";
export default function People() {
  return (
    <div className="m-4">
      <div className="title1">
        <h2>ما يقوله المستخدمين</h2>
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
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-4">
            <div className="iage d-flex " style={{ backgroundColor: "#ffff" }}>
              <img src={img1} alt="img" className="png1"></img>
            </div>
            <div style={{ backgroundColor: "#3E59FE" }} className="div1">
              <div style={{ backgroundColor: "#ffff" }} className="div2">
                <h2>يوسف إبراهيم</h2>
                <p>
                  <span>❞ </span>
                  لا يمكنني التحدث عن كتشف بكلمات كافية! كانت تجربتي معه ممتازة
                  من البداية حتى النهاية. واجهة سهلة الاستخدام ومحتوى غني
                  وممتعًا. لقد قمت بحجز الفنادق وحجز التذاكر من خلال التطبيق دون
                  أي مشاكل،. أنا حقًا ممتن لهذا التطبيق!"
                  <span>❝</span>
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="iage d-flex " style={{ backgroundColor: "#ffff" }}>
              <img src={img2} alt="img" className="png1"></img>
            </div>
            <div style={{ backgroundColor: "#3E59FE" }} className="div1">
              <div style={{ backgroundColor: "#ffff" }} className="div2">
                <h2>أيمن علي</h2>
                <p>
                  <span>❞ </span>
                  تجربة رائعة! لقد ساعدني كتشف في اكتشاف أماكن جديدة وفريدة خلال
                  رحلتي الأخيرة إلى إيطاليا. كانت المعلومات المقدمة
                  شاملةومفيدة،أعجبتني أيضًا ميزةالتذكيرات التي ساعدتني على عدم
                  تفويت أي مناسبات أو جولات محجوزة مسبقًا.شكرًا لكتشف على جعل
                  تجربةالسفر"
                  <span>❝</span>
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="iage d-flex " style={{ backgroundColor: "#ffff" }}>
              <img src={img3} alt="img" className="png1"></img>
            </div>
            <div style={{ backgroundColor: "#3E59FE" }} className="div1">
              <div style={{ backgroundColor: "#ffff" }} className="div2">
                <h2>علياء حسن</h2>
                <p>
                  <span>❞ </span>
                  تطبيق رائع! لقد استخدمته في رحلتي الأخيرة إلى باريس وكانت
                  التجربة مذهلة. تمكنت من العثور على أماكن سياحية رائعة وعروض
                  مذهلة بسهولة. أحببت خاصية التصفية التي سمحت لي بالبحث حسب
                  تفضيلاتي والعثور على الأنشطة التي تناسبني. بالتأكيد سأوصي بهذا
                  التطبيق لأصدقائي!"
                  <span>❝</span>
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="arrow d-flex aline-items-center mt-5">
            <i className="fa-solid fa-chevron-left "></i>
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#3E59FE",
              }}
            ></div>
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#3E59FE",
              }}
            ></div>
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#3E59FE",
              }}
            ></div>
            <i className="fa-solid fa-chevron-right "></i>
          </div>
        </div>
      </div>
    </div>
  );
}
