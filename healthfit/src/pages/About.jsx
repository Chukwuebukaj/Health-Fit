import React from 'react'
import mobileImg from '../healthfit images/fit-gitl.jpg'
import about from '../healthfit images/about-2.jpg'
import about1 from '../healthfit images/about-1.jpg'

import '../Styles/fitness.css'
import NavBar from '../components/Nav'
import Footer from '../components/Footer'

function About() {

    return (
        <div>
            <NavBar />
            <div className='colored' style={{
                "--img": `url(${mobileImg}), 
                    
                    linear-gradient(#fff, #fff)`}}>

                <div className='header' data-aos-anchor-easing='ease-in-out'>

                    <h1 data-aos="fade-up" data-aos-duration='1500' >Helping you live stronger, healthier and happier.</h1>
                </div>
            </div>

            <div className="why" data-aos-anchor-easing='ease-in-out'>
                <h6>About Us</h6>
                <div className='image'>
                    <img src={about1} alt="exercise" data-aos="fade-up" data-aos-duration='1500' />
                    <div className="image-text" data-aos="fade-up" data-aos-duration='1600'>

                        <h2>Our mission is to help you prioritize your mental health and find balance.</h2>
                        <p>Welcome to HealthFit, a resource for reliable, compassionate, and up-to-date information on the mental health topics that matter most to you.</p>
                        <p>We are dedicated to empowering you with the trustworthy evidence-based information you need for your mental and emotional well-being.</p>
                        <p>Our mission is to help you prioritize your mental health and find balance amid the chaos of daily life.</p>

                    </div>
                </div>
            </div>


            <div className="why" data-aos-anchor-easing='ease-in-out'>
                <div className='image'>

                    <img src={about} alt="exercise" data-aos="fade-up" data-aos-duration='1500' />
                    <div className="image-text" data-aos="fade-up" data-aos-duration='1600'>
                        <h2>A little bit about who we are and how it all started</h2>
                        <p>HealthFit is a health, nutrition and wellness business founded in 2018 with a focus on helping Africans get the best out of African foods while ensuring wellness and fitness. Some of the services provided include;
                            <br />
                            <br />
                            <li>* Health and nutrition consultation services.</li>
                            <li>* Personalised diet calendar based on African foods.</li>
                            <li>* Personal fitness training sessions.</li>
                            <li>* Group fitness sessions.</li>
                        </p>
                        
                        <br />
                        <h2>Our goal is to make health and fitness attainable, affordable and approachable.</h2>
                        <p>We believe fitness should be accessible to everyone, everywhere, regardless of income level or access to a gym. That's why we offer the most affordable and effective workout programs on the web, and helpful health, nutrition and fitness information.</p>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default About
