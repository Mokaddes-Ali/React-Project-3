import React, { Component, Fragment } from "react";
import "../../Components/OurService/OurService.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import icon1 from "../../Assets/Images/icon1.png";
import icon2 from "../../Assets/Images/icon2.png";
import icon3 from "../../Assets/Images/icon3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class OurService extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <Fragment>
        <Container>
          <Row className="cardSection">
            <Slider {...settings}>
              <Col className="md-4">
                <Card className="Card">
                  <Card.Img
                    className="ServiceCardImage"
                    variant="top"
                    src={icon1}
                  />
                  <Card.Body>
                    <Card.Title className="CardTitle">
                      Solve Problems Real Time
                    </Card.Title>
                    <Card.Text className="CardText">
                      Real-time problem solving is not just about time, it's
                      about time. This allows you to solve problems within a
                      specified time problem has a solution.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="md-4">
                <Card className="Card">
                  <Card.Img
                    className="ServiceCardImage"
                    variant="top"
                    src={icon2}
                  />
                  <Card.Body>
                    <Card.Title className="CardTitle">
                      Secured & Safe Payments
                    </Card.Title>
                    <Card.Text className="CardText">
                      By and large, credit cards are easily the most secure and
                      safe payment method to use when you shop online. credit
                      cards most secure.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="md-4">
                <Card className="Card">
                  <Card.Img
                    className="ServiceCardImage"
                    variant="top"
                    src={icon3}
                  />
                  <Card.Body>
                    <Card.Title className="CardTitle">
                      24//7 Customer Support
                    </Card.Title>
                    <Card.Text className="CardText">
                      The biggest benefit of offering 24/7 support is that you
                      provide a more convenient service for your customers
                      providing clock support.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Slider>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default OurService;
