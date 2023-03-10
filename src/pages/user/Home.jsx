import React, { useEffect } from "react";
import Navbar from "../../components/user/Navbar";
import Hero from "../../components/user/Hero";
import Footer from "../../components/user/Footer";
import MapComponent from "../../components/user/MapComponent";
import ThirdComponent from "../../components/user/ThirdComponent";
import "./home.module.css";
import { useAuthStore } from "../../store/index";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  const { username } = useAuthStore((state) => state.auth);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="home w-full">
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="">
        <Hero />
      </div>
      <MapComponent />
      <ThirdComponent />
      <Footer />
    </div>
  );
};

export default Home;
