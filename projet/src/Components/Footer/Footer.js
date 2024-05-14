import React, { Component, Fragment } from "react";
import "../../Components/Footer/Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../Assets/Images/Logo.png";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

class Footer extends Component {
  render() {
    return (
        <Fragment>
            <Container fluid className="footer">
                <Container>
                <Row>
                    <Col className="col-md-4">
                        <div>
                        <img src={ logo } alt="" ></img>
                        </div>
                    </Col>
            <Col className="col-md-4">
            <p className='menu'>&copy;Copyright 2021, All Rights Reserved</p>
            </Col>
        <Col className="col-md-4">
        <div className=" FooterLogo Side-icon d-flex">
          <p className="padding-icon">
            <a href="">
              <FaTwitter />
            </a>
          </p>

          <p className="padding-icon">
            <a href="">
              <FaFacebookF />
            </a>
          </p>

          <p className="padding-icon">
            <a href="">
              <FaInstagram />
            </a>
          </p>

          <p className="padding-icon">
            <a href="">
              <FaGithub />
            </a>
          </p>
        </div>
        </Col>
      </Row>
      </Container>
      </Container>
      </Fragment>
    );
  }
}

export default Footer;
