import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./button";
import Input from "./input";
import team from "../healthfit images/team-image.jpg"



const EmailSubscription = () => {
  const [subscribe, setSubscribe] = useState(false)
  const [check, setCheck] = useState(false)
  const [states, setStates] = useState({
    name: "",
    email: "",
    subscriptionList: []
  })

  useEffect(() => {

    axios
      .get('/api/subscribers')
      .then(response => {
        setStates({ ...states, subscriptionList: response.data })
      })


  }, [])


  const handleNameChange = (e) => {
    setStates({ ...states, name: e.target.value })
  }

  const handleEmailChange = (e) => {
    setStates({ ...states, email: e.target.value })
  }

  const handleBtnClick = (e) => {
    if (states.name !== '' && states.email !== '') {
      setSubscribe(true)
      setCheck(false)
    } else {
      setCheck(true)
    }
    e.preventDefault()

    const subscriber = {
      name: states.name,
      email: states.email,
      date: new Date()
    }

    axios
      .post('/api/subscribers', subscriber)
      .then(response => {
        setStates({ ...states, subscriptionList: states.subscriptionList.concat(response.data) })
      })

    setStates({ ...states, name: "", email: "" })

  }

  return (
    <div className='subscription' data-aos-anchor-easing='ease-in-out' style={{
      "--img": `url(${team}), 
                    
                    linear-gradient(#fff, #fff)`}}>
      <h2 data-aos="fade-up" data-aos-duration='1500'>Signup for our newsletter</h2>

      <Input className='input'
        data-aos="fade-up" data-aos-duration='1600'
        name="name"
        title="Your Name"
        inputType="text"
        value={states.name}
        placeholder="Enter Your Name"
        inputChange={handleNameChange}
        class="input"
        labelClass="input-label"
        required
      />

      <br />

      <Input className='input'
        data-aos="fade-up" data-aos-duration='1700'
        name="email"
        title="Your Email"
        inputType="email"
        value={states.email}
        placeholder="Enter Your email"
        inputChange={handleEmailChange}
        class="input"
        labelClass="input-label"
        required
      />
      <br />

      <Button
        data-aos="fade-up" data-aos-duration='1800'
        className='sub-btn' title="Subscribe" btnClick={handleBtnClick} />

      {subscribe && <h3 className='book'>You have successfully subscribed.</h3>}
      {check && <h3 className='book'>Please fill form appropirately.</h3>}
    </div>
  )

}

export default EmailSubscription;