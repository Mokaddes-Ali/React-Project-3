import React, { Component, Fragment } from "react";
import "../../Components/HeroSection/HeroSection.css";
import { Col, Container, Row } from "react-bootstrap";
import Lottie from "react-lottie";
import * as animationData from "../Animation - 1715645564678.json";

class HeroSection extends Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const buttonStyle = {
      width: "70px",
      height: "40px",
      backgroundColor: "#EF4444",
      borderRadius: "50%",
      border: "1px solid black",
      padding: "5px",
      cursor: "pointer",
      color: "white",
      fontSize: "20px",
      fontWeight: "bold",
      color: "black",
      position: "center",
    };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <Fragment>
        <Container className="HeroSection">
          <Row>
            <Col className="md-6">
              <div>
                <Lottie
                  options={defaultOptions}
                  height={400}
                  width={400}
                  isStopped={this.state.isStopped}
                  isPaused={this.state.isPaused}
                />
                <button
                  className="HeroBtn"
                  style={buttonStyle}
                  onClick={() => this.setState({ isStopped: false })}
                >
                  play
                </button>
                <button
                  style={buttonStyle}
                  onClick={() => this.setState({ isStopped: true })}
                >
                  stop
                </button>
              </div>
            </Col>
            <Col className="md-6">
              <div className="HeroRight">
                <h1>Ensuring maximum security</h1>
                <h2>Protect all your data with strong security access</h2>
                <p>
                  This is software that protects all your data, including strong
                  security access. Use data as needed and provide security.{" "}
                </p>
                <button className="HeroButton">
                  Scan Your Website - Free!
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default HeroSection;
