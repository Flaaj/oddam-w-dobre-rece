// dependencies:
import React from "react";
// child components:
import Header from "./header/Header";
import ThreeColumns from "./threeColumns/ThreeColumns";
import EasySteps from "./easySteps/EasySteps";
import AboutUs from "./aboutUs/AboutUs";
import Footer from "./footer/Footer";
// component:
const Home = () => (
    <main className="home">
        <Header />
        <ThreeColumns />
        <EasySteps />
        <AboutUs />
        <Footer />
    </main>
);
export default Home;
