import React from 'react'
import '../Styles/tracker.css'
import {BiDumbbell} from 'react-icons/bi'
import {AiFillCalendar} from 'react-icons/ai'

import work from "../healthfit images/workout-app.png"
function Tracker() {
    return (
        <div className='tracker'>
<div className="head" data-aos-anchor-easing='ease-in-out' >
    <h1 data-aos="fade-up" data-aos-duration='1500'>Meet trainings. Set goals</h1>
    <h3 data-aos="fade-up" data-aos-duration='1600'>Create a personalised fitness routine</h3>
    <h3 data-aos="fade-up" data-aos-duration='1700'>Track your fitness goals</h3>
    <p data-aos="fade-up" data-aos-duration='1800'>We offer fresh fitness tutorials, workouts, and exercises that will help <br /> you on your road to healthy living, weight loss, and stress relief</p>
   <div>
   <button data-aos="fade-up" data-aos-duration='1900'>Download app</button>
   <button data-aos="fade-up" data-aos-duration='1900'>Demo Training</button>
   </div>
</div>

<div className="group" data-aos-anchor-easing='ease-in-out' >
    <div data-aos="fade-up" data-aos-duration='1500'>
        <h3><AiFillCalendar /><span>Training Programs</span></h3>
        <p>A large number of training programs to help you reach your goal</p>
    </div>
    <div data-aos="fade-up" data-aos-duration='2000'><img src={work} alt="" /></div>
    <div data-aos="fade-up" data-aos-duration='2000'>
        <h3><BiDumbbell /><span>32+ trainers</span></h3>
        <p>They will help monitor and motivate you to achieve results.</p>
        
    </div>
</div>
        </div>
    )
}

export default Tracker
