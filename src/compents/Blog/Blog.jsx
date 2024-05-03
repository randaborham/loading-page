import React from "react";
import img1 from "../../assest/9cce3974e0d4f493ecb7bc38e89e0164.png";
import img2 from "../../assest/289194b4381f8db620190cc096804f00.png";
import img3 from "../../assest/d8824fc27f52483640a68170730ffd8dg.png";
import img4 from "../../assest/google-play-badge-logo-png-transparent.png";
import img5 from "../../assest/5a902db97f96951c82922874.png";
import img6 from "../../assest/d9a3d969caf7bf7b11ba6abaaa987ec5.png";
import img7 from "../../assest/b93fe1a5fb63940964f23cfcc5ac519a.png";
import "./Blog.css";
export default function Blog() {
  return (
    <div className="mb-2">
      <div className="title1  mb-5 mt-5">
        <h2>الاماكن السياحية المتوفرة في مصر</h2>
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
            <div className="card" style={{ width: "18rem" }}>
              <img src={img1} alt="img" className="w-100 h-100"></img>
              <div className="card-body">
                <div className="card-text">
                  <p className="ms-4">معبد الكرنك, الاقصر</p>
                  <p>1,500 LE</p>
                </div>
                <p className="card-textt ">
                  <i class="fa-brands fa-telegram"></i>
                  رحلة 10 أيام
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={img2} alt="img" className="w-100 h-100"></img>
              <div className="card-body">
                <div className="card-text">
                  <p className="ms-5">مسجد محمد علي </p>
                  <p>800 LE</p>
                </div>
                <p className="card-textt ">
                  <i class="fa-brands fa-telegram"></i>
                  رحلة 3 أيام
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={img3} alt="img" className="w-100" height={415}></img>
              <div className="card-body">
                <div className="card-text">
                  <p className="ms-5">الاهرامات , الجيزة</p>
                  <p>1,200 LE</p>
                </div>
                <p className="card-textt ">
                  <i class="fa-brands fa-telegram"></i>
                  رحلة 5 أيام
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <i className="fa-solid fa-chevron-left left"></i>
      <i className="fa-solid fa-chevron-right right"></i>
      <div className="footer text-center">
        <img
          src={img6}
          width={41}
          height={40}
          alt="img"
          className="mb-3  start1"
        ></img>
        <img
          src={img7}
          width={30}
          height={30}
          alt="img"
          className="mb-3 end1"
        ></img>
        <p>حمل الان التطبيق واستمتع بتكلفة رحلات ارخص واوفر لك ولعائلتك</p>
        <div className="ai">
          <img
            src={img4}
            width={180}
            height={40}
            alt="img"
            className="mb-3"
          ></img>
          <img
            src={img5}
            width={180}
            height={40}
            alt="img"
            className="mb-3"
          ></img>
          <img
            src={img6}
            width={41}
            height={40}
            alt="img"
            className="mb-3 start2"
          ></img>
          <img
            src={img7}
            width={30}
            height={30}
            alt="img"
            className="mb-3 end2"
          ></img>
        </div>
      </div>
    </div>
  );
}
