import React, { Component, Fragment } from "react";
import "../../Components/FreeServiceTrail/FreeServiceTrail.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import netIcon from "../../Assets/Images/Vector.png";
import netIcon1 from "../../Assets/Images/network.png";

class FreeServiceTrail extends Component {
  render() {
    return (
      <Fragment>
        <Container className="FreeService">
          <Row>
            <Col className="col-md-6">
              <div className="trailLeft">
                <h1>Ready to get started?</h1>
                <p>Create custom landing pages with Rareblocks that converts
                     more visitors than any website. With lots of 
                     unique blocks, you can easily build a page.</p>
                <Button className="trailLeftBotton">Try 14 Days Free</Button>
              </div>
            </Col>

            <Col className="col-md-6">
              <Row className="TrailCard">
                <Col className="col-md-6">
                  <Card className="CardT">
                    <Card.Img className="CardImage" variant="top" src={netIcon} />
                    <Card.Body>
                      <Card.Title className="CardTitle">Store data on cloud</Card.Title>
                      <Card.Text className="CardTitleText">
                        Create beautiful landing pages with Rareblocks that
                        converts..
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="col-md-6">
                  <Card  className="CardT">
                    <Card.Img className="CardImage" variant="top" src={netIcon1} />
                    <Card.Body>
                      <Card.Title className="CardTitle">Connect dots smartly</Card.Title>
                      <Card.Text className="CardTitleText">
                        Create beautiful landing pages with Rareblocks that
                        converts.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FreeServiceTrail;
