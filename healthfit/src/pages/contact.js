import React, { useState } from "react";
import axios from "axios"
import Input from "../components/input";
import TextArea from "../components/textarea";
import Button from "../components/button";
import '../Styles/contact.css'
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import { FaEnvelope } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';


const ContactUs = () => {

  const [states, setStates] = useState({
    name: "",
    email: "",
    message: "",
    messageList: []
  })



  const handleNameChange = (e) => {
    setStates({ ...states, name: e.target.value })
  }

  const handleEmailChange = (e) => {
    setStates({ ...states, email: e.target.value })
  }

  const handleMessageChange = (e) => {
    setStates({ ...states, message: e.target.value })
  }

  const handleBtnClick = (e) => {

    e.preventDefault()

    const message = {
      name: states.name,
      email: states.email,
      message: states.message,
      date: new Date()
    }

    axios
      .post('/api/messages', message)
      .then(response => {
        setStates({ ...states, messageList: states.messageList.concat(response.data) })
      })

    setStates({ ...states, name: "", email: "", message: "" })
  }

  return (
    <div className="contact">
      <NavBar />
      <h1>Have a question about a product, feedback, or business inquiry for HealthFit?</h1>
      <h1 className="heading">Contact Us</h1>
    

      <div className="contact-form">

        <div className="contact-form-left">

          <div className="icon-div">
            <FaEnvelope className="icons" />

            <div className="icon-text">
              <h2>Email</h2>
              <p>healthfit@medical.com</p>
            </div>
          </div>

          <div className="icon-div">
            <BsFillTelephoneFill className="icons" />

            <div className="icon-text">
              <h2>Phone</h2>
              <p>+1 1234 55488 55</p>
            </div>
          
          </div>

        </div>

        <div className="contact-form-right">
          <Input
            name="FullName"
            title="Full Name"
            inputType="text"
            value={states.name}
            inputChange={handleNameChange}
            placeholder="Enter Your Full Name"
            class="contact-input"
            labelClass="contact-input-label"
          />

          <Input
            name="email"
            title="Email"
            inputType="email"
            value={states.email}
            inputChange={handleEmailChange}
            placeholder="Enter Your Email"
            class="contact-input"
            labelClass="contact-input-label"
          />

          <TextArea
            name="message"
            title="Message"
            placeholder="Enter your message here"
            value={states.message}
            inputChange={handleMessageChange}
            class="contact-input"
            labelClass="contact-input-label"
          />

        <div className = 'btn-center'>
        <Button className="contact-btn" title="Send" btnClick={handleBtnClick}
          />
        </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default ContactUs;