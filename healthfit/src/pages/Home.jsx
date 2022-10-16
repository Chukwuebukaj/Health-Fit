import React from 'react'
import NavBar from '../components/Nav'
import Header from '../components/Header'
import Service from '../components/Service'
import Footer from '../components/Footer'
import AboutFea from '../components/AboutFea'
import EmailSubscription from '../components/emailSubscription'
import Tracker from "../components/Tracker"
function Home() {
    return (
        <div>
            <NavBar />
            <Header />
            <AboutFea />
            <Service />
            <Tracker />
            <EmailSubscription />
            <Footer />
        </div>
    )
}

export default Home
