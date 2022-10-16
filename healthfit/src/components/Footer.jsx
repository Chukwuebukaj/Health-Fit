import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Styles/footer.css"
import {BsTwitter} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {GrMail} from "react-icons/gr"

function Footer() {
  return (
    <div className='footer'>

      <Container className='footer-container'>
        <Row data-aos-anchor-easing='ease-in-out' >

          <Col sm className=" footer-contact hover" data-aos="fade-up" data-aos-duration='1500'>
            <h4>HealthFit</h4>
            <p>
              108 Adam Street <br />
              Lekki, Lagos<br />
              Nigeria <br /><br />
              <strong>Phone:</strong> +1 1234 55488 55<br />
              <strong>Email:</strong> healthfit@medical.com<br />
            </p>
          </Col>

          <Col sm className="footer-links hover" data-aos="fade-up" data-aos-duration='1700'>
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right hover"></i> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </Col>

          <Col sm className="footer-links hover" data-aos="fade-up" data-aos-duration='1800'>
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Diet Consultation</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Fitness Tracker</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Fitness Updates</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Therapy Sessions</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Mental Health</a></li>
            </ul>
          </Col>

         

        </Row>

      </Container>


      <Container >

        <Row className="" data-aos-anchor-easing='ease-in-out' >
          
          <Col sm className="social-links hover">
            <a href="#" className="twitter"><i ><BsTwitter /></i></a>
            <a href="#" className="facebook"><i ><BsFacebook/></i></a>
            <a href="#" className="instagram"><i ><BsInstagram/></i></a>
            <a href="#" className="google-plus"><i ><GrMail /></i></a>
            <a href="#" className="linkedin"><i ></i></a>
          </Col>

          <Col sm className="copyright hover">
            &copy; Copyright <strong><span>HealthFit</span></strong>. All Rights Reserved
          </Col>

        </Row>

      </Container>

    </div>

  )
}

export default Footer
