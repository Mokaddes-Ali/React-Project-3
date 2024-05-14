import React, { Component, Fragment } from 'react';
import  '../../Components/Serviceprice/Serviceprice.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class Serviceprice extends Component {
    render() {
        return (
            <Fragment>
                <Container className='ServicePrice'>
                    <Row>
                        <div className='ServicePriceHeading'>
                            <h1>Affordable plans for our customers</h1>
                            <p>Try free for 30 Days</p>
                        </div>
                    <Col className="col-md-4">
                  <Card className="PriceCard">
                    <Card.Body>
                        <h2 className='CardHed'>1 Weak</h2>
                        <p className='CardPrice'>
                        <CountUp start={0} end={4} prefix = '$' delay={0}>

                  
{({ countUpRef, start }) => (


      <VisibilitySensor onChange={start}>
      <span ref={countUpRef} />
      </VisibilitySensor>
      
)}
</CountUp>
                        </p>
                      <Card.Title className="CardTitl">Less than $2 a week</Card.Title>
                      <Card.Text className="CardTitleTex">Billed every week Cancel anytime
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="col-md-4">
                  <Card className="PriceCard">
                    <Card.Body>
                        <h2 className='CardHed'>1 month</h2>
                        <p className='CardPrice'>
                        <CountUp start={0} end={19} prefix = '$' delay={0}>

                  
{({ countUpRef, start }) => (


      <VisibilitySensor onChange={start}>
      <span ref={countUpRef} />
      </VisibilitySensor>
      
)}
</CountUp>
                        </p>
                      <Card.Title className="CardTitl">Less than $2 a week</Card.Title>
                      <Card.Text className="CardTitleTex">Billed every week Cancel anytime
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="col-md-4">
                  <Card className="PriceCard">
                    <Card.Body>
                        <h2 className='CardHed'>1 year</h2>
                        <p className='CardPrice'>
                        <CountUp start={0} end={99} prefix = '$' delay={0}>

                  
                                    {({ countUpRef, start }) => (


                                          <VisibilitySensor onChange={start}>
                                          <span ref={countUpRef} />
                                          </VisibilitySensor>
                                          
                                    )}
                                    </CountUp>
                        </p>
                      <Card.Title className="CardTitl">Less than $2 a week</Card.Title>
                      <Card.Text className="CardTitleTex">Billed every week Cancel anytime
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <div>
                <button className="GetStartedButton">
                  Get Started Now
                </button>
                </div>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Serviceprice;