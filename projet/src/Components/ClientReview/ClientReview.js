import React, { Component, Fragment } from "react";
import "../../Components/ClientReview/ClientReview.css";
import { Col, Container, Row } from "react-bootstrap";
import iconStar from "../../Assets/Images/Star 4.png";
import iconStar1 from "../../Assets/Images/Star 5.png";
import Icon4 from "../../Assets/Images/slack-2 1.png";
import Icon5 from "../../Assets/Images/trivago 1.png";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
class ClientReview extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="review">
            <Container>
          <Row>
            <h1 className="reviewHeading">Trusted by  
            <CountUp start={0} end={1200} suffix = '+' delay={0}>

                  
{({ countUpRef, start }) => (


      <VisibilitySensor onChange={start}>
      <span ref={countUpRef} />
      </VisibilitySensor>
      
)}
</CountUp> world class businesses</h1>
            <Col className="reviewLeft col-md-6">
              <div>
                <img className="reviewStars" src={iconStar} />
                <h2 className="reviewTitle">
                  “I just wanted to share a quick note and let you know that you
                  guys do a really good job. I'm glad I decided to work with
                  you. It's really great how easy your websites are to update
                  and manage."
                </h2>
                <img className = "reviewIcon" src={Icon4} />
              </div>
            </Col>
            <Col className="col-md-6">
              <div >
                <img className="reviewStars_2" src={iconStar1} />
                <h2  className="reviewTitle ms-5">
                  “I just wanted to share a quick note and let you know that you
                  guys do a really good job. I'm glad I decided to work with
                  you. It's really great how easy your websites are to update
                  and manage."
                </h2>
                <img className = "reviewIcon_2" src={Icon5} />
              </div>
            </Col>
          </Row>
          </Container>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 200"><path fill="#292931" fill-opacity="1" 
        d="M0,96L120,106.7C240,117,480,139,720,128C960,117,1200,75,1320,53.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      </Fragment>
    );
  }
}

export default ClientReview;
