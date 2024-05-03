import React from "react";
import img2 from "../../assest/32524bfb06b7803ca714c520d66d2a94.png";
import plan from "../../assest/334dc9f2a7b263e6edf44211e9e2fce9.png";
import "./Header.css";
export default function Header() {
  return (
    <div className="mb-4">
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light shadow">
        <div class="container">
          <ul className="list">
            <li class="nav-item dropdown d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-earth-asia"></i>
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ar
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item text-primary">
                <a
                  class="nav-link active text-primary"
                  aria-current="page"
                  href="#"
                >
                  الرئيسية
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  الحجوزات
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  الرحلات الجوية
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  الفنادق
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  المطاعم
                </a>
              </li>
            </ul>
            <div class="d-flex ms-auto" role="search">
              <img src={plan} alt="plan" className="plan3"></img>
              <span className="text-primary fw-bolder">اكتشف</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="header mt-5">
        <div className="container overflow-hidden">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6">
              <div className="image5">
                <img src={plan} alt="img" className="plan1"></img>
                <img src={plan} alt="img" className="plan"></img>
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="image1">
                  <div className="image2">
                    <div className="image">
                      <img src={img2} alt="img" className=" img"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <span style={{ color: " #1E1E1E99" }}>الرحلات معنا</span>
                <h1 className="text-primary"> اكتشف</h1>
                <p className="para">
                  سهولة حجز رحلاتك من أي مكان وفي أي وقت و بأقل التكاليف.
                </p>
                <span style={{ color: " #1E1E1E99" }}>
                  احجز الأن واستمتع بعروض الصيف انت و عائلتك بأقل الاسعار{" "}
                </span>

                <button className="btn btn-dark mt-3 w-50" type="button">
                  احجز الان
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
