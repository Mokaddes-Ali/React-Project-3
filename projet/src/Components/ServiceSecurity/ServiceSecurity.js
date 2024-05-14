import React, { Component, Fragment } from "react";
import "../../Components/ServiceSecurity/ServiceSecurity.css";
import { Col, Container, Row } from "react-bootstrap";
import Lottie from "react-lottie";
import * as animationData from "../dataSecurity.json";

class ServiceSecurity extends Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }
  render() {
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
        <Container>
          <Row>
            <Col className="md-6">
              <div className="SecurityLeft">
                <h1>We take care of your website</h1>
                <p>
                  We secure websites by automatically finding and fixing
                  threats. Website security software protects your data website
                  from malicious cyber threats.{" "}
                </p>
              </div>
            </Col>
            <Col className="md-6">
              <div>
                <Lottie
                  options={defaultOptions}
                  height={400}
                  width={400}
                  isStopped={this.state.isStopped}
                  isPaused={this.state.isPaused}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ServiceSecurity;
