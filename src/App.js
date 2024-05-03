import React, { useEffect, useState } from "react";
import Footer from "./compents/Footer/Footer";
import Header from "./compents/Header/Header";
import Feature from "./compents/Feature/Feature";
import Services from "./compents/Servies/Services";
import Blog from "./compents/Blog/Blog";
import People from "./compents/People/People";
import Loader from "./compents/Loader/Loader";

export default function App() {
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    const fake = () => {
      setInterval(() => {
        setIsloading(false);
      }, 4000);
    };
    fake();
  }, []);
  return isloading ? (
    <Loader />
  ) : (
    <div>
      <Header />
      <Feature />
      <Services />
      <Blog />
      <People />
      <Footer />
    </div>
  );
}
