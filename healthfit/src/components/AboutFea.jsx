import React from 'react'
import about1 from '../healthfit images/about-1.jpg'
import '../Styles/fitness.css'
import {Link} from "react-router-dom"

function AboutFea() {

    return (
        <div>
    

            <div className="why" data-aos-anchor-easing='ease-in-out'>
                <h6>Who We Are</h6>
                <div className='image'>
                    <img src={about1} alt="exercise" data-aos="fade-up" data-aos-duration='1500' />
                    <div className="image-text" data-aos="fade-up" data-aos-duration='1600'>

                        <h2>Our mission is to help you prioritize your mental health and find balance.</h2>
                        <p>Welcome to HealthFit, a resource for reliable, compassionate, and up-to-date information on the mental health topics that matter most to you.</p>
                        <p>We are dedicated to empowering you with the trustworthy evidence-based information you need for your mental and emotional well-being.</p>
                        <p>Our mission is to help you prioritize your mental health and find balance amid the chaos of daily life.</p>
                      <Link to="/about"><button data-aos="fade-up" data-aos-duration='2000'>Read More</button></Link>  
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutFea
