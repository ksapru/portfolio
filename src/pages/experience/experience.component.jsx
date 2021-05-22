import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_SPARK from "../../assets/img/experience/saprk.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_SPARK} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Software Engineering Intern</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Front End Developer</strong>
                    <br />
                    <strong>Technology:</strong> Vue JS, Vuetify, Firebase, Material UI, React
                    <br />
                    <strong>Duration:</strong> February 2021 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> the user authentication portal through the Vuetify library</li>
                      <li><strong>Assisted</strong> in the developement of the login flow and firebase authentication
                      </li>
                      <li><strong>Created</strong> pull requests, sovled merge conflicts and attended weekly meetings 
                      </li>
                      <li><strong>Collaborated</strong> with UX designers and back-end web developers.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
