import React, { useEffect, useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'
import NavBar from '../components/Nav'
import Footer from '../components/Footer'
import '../Styles/booking.css'
import doc from '../healthfit images/fit.webp'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FiMapPin } from 'react-icons/fi'
import { BsCalendarEvent } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'


function Bookings() {

    const [date, setDate] = useState(new Date())
    const [appointment, setAppointment] = useState([])

    const [therapist, setTherapist] = useState(false)
    const [instructor, setInstructor] = useState(false)
    useEffect(() => {
        console.log("Use Effect", appointment)

    })

    const handleAppointment = (value, event) => {


        const newAppointment = value.toDateString()

        const check = appointment.find(day => day === newAppointment)

        if (check) {
            alert(`${newAppointment} is booked`)
        }
        else {
            setAppointment(appointment.concat(newAppointment))
        }


        console.log(appointment)
    }

    const handleTherapist = () => {
        setTherapist(true)
    }
    const handleInstructor = () => {
        setInstructor(true)
    }

    return (
        <div>
            <NavBar />
            <h1 className='booking-header'>Book a Consultation</h1>
            <br />

            <div className='bookings'>

                <div className="appoint" style={{
                    "--img": `url(${doc}), 
                    
                    linear-gradient(#fff, #fff)`}}>
                    <h2>Make an appointment</h2>
                    <p>Select preferred service and time slot to book an appointment or Consultation</p>
                </div>

                <div>
                    <Calendar className='calendar'
                        onChange={setDate}
                        // value={date} 
                        calendarType="US"
                        minDate={new Date()}
                        maxDate={new Date(2022, 11, 23)}
                        tileDisabled={({ activeStartDate, date, view }) => date.getDay() === 0 | date.getDay() === 6}

                        onClickDay={handleAppointment}

                    />

                </div>

            </div>

            <Tabs className='tabs mb-3 bg-dark'
                defaultActiveKey="health"
                transition={true}
                justify

            >
                <Tab className='tab' eventKey="health" title="Fitness Therapist">

                    <div className="inp-con" data-aos-anchor-easing='ease-in-out'>
                        <div className="one" data-aos="fade-up" data-aos-duration='1600'>
                            <h3><FiMapPin /><span className="cal">Location</span></h3>
                            <h4>108 Adam Street
                                Lekki, Lagos</h4>
                        </div>
                        <div className="one" data-aos="fade-up" data-aos-duration='1800'>
                            <h3><BiUserCircle /><span className='cal'>Fitness Therapist</span></h3>
                            <h4>Dr Olamide Babatunde</h4>
                        </div>
                        <div className="one" data-aos="fade-up" data-aos-duration='2000'>
                            <h3><BsCalendarEvent /><span className='cal'>Appointment date</span></h3>
                            <h4>Selected date: {date.toDateString()}</h4>
                        </div>
                    </div>
                    <div className="btn">

                        <button onClick={handleTherapist} className='book-btn'>Book Appointment</button>

                    </div>
                    {therapist && <h3 className='book'>Thank you, Your appointment with our fitness therapist has been booked.</h3>}
                </Tab>

                <Tab className='tab' eventKey="instructor" title="Fitness Instructor">

                    <div className="inp-con" data-aos-anchor-easing='ease-in-out'>
                        <div className="one" data-aos="fade-up" data-aos-duration='1600'>
                            <h3><FiMapPin /><span className="cal">Location</span></h3>
                            <h4>108 Adam Street
                                Lekki, Lagos</h4>
                        </div>
                        <div className="one" data-aos="fade-up" data-aos-duration='1800'>
                            <h3><BiUserCircle /><span className='cal'>Fitness Instructor</span></h3>
                            <h4>Elizabeth White</h4>
                        </div>
                        <div className="one" data-aos="fade-up" data-aos-duration='2000'>
                            <h3><BsCalendarEvent /><span className='cal'>Appointment date</span></h3>
                            <h4>Selected date: {date.toDateString()}</h4>
                        </div>
                    </div>
                    <div className="btn">

                        <button onClick={handleInstructor} className='book-btn'>Book Appointment</button>

                    </div>
                    {instructor && <h3 className='book'>Thank you, Your appointment with our fitness instructor has been booked.</h3>}
                </Tab>


            </Tabs>


            <Footer />
        </div>
    )
}

export default Bookings
