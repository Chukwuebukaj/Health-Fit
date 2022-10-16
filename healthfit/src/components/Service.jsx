import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../healthfit images/cardio-class.jpg'
import img2 from '../healthfit images/crossfit-class.jpg'
import img3 from '../healthfit images/yoga-class.jpg'
import {Link} from "react-router-dom"


function Service() {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <Row>
        <Col sm>
          <Card data-aos-anchor-easing='ease-in-out'>
            <Card.Img variant="top" src={img1} data-aos="fade-up" data-aos-duration='1600' />
            <Card.Body className='body' data-aos="fade-up" data-aos-duration='1700'>
              <Card.Title className='title'>Mental health and Physical Fitness updates</Card.Title>
              <Card.Text className='text'>
                With supporting text below as a natural lead-in to additional content.
               </Card.Text>
               <Link to = '/services'><button className='service-btn'>Read More</button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>
          <Card data-aos-anchor-easing='ease-in-out'>
            <Card.Img variant="top" src={img3} data-aos="fade-up" data-aos-duration='1600'/>
            <Card.Body className='body' data-aos="fade-up" data-aos-duration='1700'>
              <Card.Title className='title'>Online/offline fitness and therapy sessions</Card.Title>
              <Card.Text className='text'>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Link to = '/services'><button className='service-btn'>Read More</button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>
          <Card data-aos-anchor-easing='ease-in-out'>
            <Card.Img variant="top" src={img2} data-aos="fade-up" data-aos-duration='1600'/>
            <Card.Body className='body' data-aos="fade-up" data-aos-duration='1700'>
              <Card.Title className='title'>Personalise and track your fitness routine</Card.Title>
              <Card.Text className='text'>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Link to = '/services'><button className='service-btn'>Read More</button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>


    </div>
  );
}

export default Service