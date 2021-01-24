import './App.css';
import MyNavbar from "./components/my-navbar/my-navbar.component";
import React from "react";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import  MyTitleMessage  from "./components/title-message/title-message.component";
import About from "../src/pages/about/about.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../src/pages/contact-form/contact-form.component";
import Experience from "../src/pages/experience/experience.component";
import Projects from "../src/components/projects-timeline/projects-timeline.component";
 

const App = () => {
  return (
    <div>
      <MyCarousal/>
      <MyNavbar/>
      <MyTitleMessage />
      <About/>
      <Projects/>
      <Experience/>
      <ContactForm/>
   

   
    </div>
  );
}

export default App;

