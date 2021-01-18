import './App.css';
import MyNavbar from "./components/my-navbar/my-navbar.component";
import React from "react";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import  MyTitleMessage  from "./components/title-message/title-message.component";
import About from "../src/pages/about/about.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Parallax } from "react-parallax";
import Logo from "/assets/icons/logo.webp";



const App = () => {
  return (
    <div>
      <MyCarousal/>
      <MyNavbar/>
      <MyTitleMessage />
      <About/>
      <div>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/icons/logo.webp")}
          bgImageAlt=""
          strength={-200}
        />
          </div>
          </div>
       
      </div>
   );
}

export default App;
