import React, { Component, Fragment } from 'react';
import '../../Components/FooterInner/FooterInner.css';
import { Col, Container, Row } from 'react-bootstrap';

class FooterInner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='FooterInner'>
                    <Container>
                    <Row >
                        <Col className='col-md-3'>
                            <div className='FooterInner'>
                                <ul>
                                    <li> About </li>
                                    <li> Features </li>
                                    <li> Works </li>
                                    <li> Career</li>
                                </ul>
                            </div>
                        </Col>
                        <Col className='col-md-3'>
                            <div className='FooterInner'>
                                <ul >
                                    <li >Customer Support</li>
                                    <li >Delivery Details </li>
                                    <li >Terms & Conditions </li>
                                    <li >Privacy Policy </li>
                                </ul>
                            </div>
                        </Col>
                        <Col className='col-md-3'>
                            <div className='FooterInner'>
                                <ul>
                                    <li>About </li>
                                    <li>Features </li>
                                    <li>Works </li>
                                    <li>Career</li>
                                </ul>
                            </div>
                        </Col>
                        <Col className='col-md-3'>
                            <div className='FooterInner'>
                                <ul>
                                    <li> Customer Support</li>
                                    <li> Delivery Details </li>
                                    <li> Terms & Conditions </li>
                                    <li> Privacy Policy </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default FooterInner;