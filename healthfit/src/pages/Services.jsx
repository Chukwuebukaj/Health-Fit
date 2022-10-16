import React from "react";
import NavBar from "../components/Nav";
import chairs from '../healthfit images/yoga-class.jpg';
import work3 from "../healthfit images/work3.jpg";
import work2 from "../healthfit images/work2.jpg";
import '../Styles/services.css'
import Footer from "../components/Footer";


function Services() {
  return (
    <div className="services">
      <NavBar />
    <h2>Our Services</h2>

<div className="wrap">


<div data-aos-anchor-easing='ease-in-out' className = 'box-one'>
<img data-aos="fade-up" data-aos-duration='1600' src={work2} alt="" />
  <div className="text-container" data-aos="fade-up" data-aos-duration='1700'>
<p><span className="tex">Mental health and Physical Fitness updates</span><br /> Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
  </div>
</div>

<div data-aos-anchor-easing='ease-in-out' className = 'box-two'>
<img data-aos="fade-up" data-aos-duration='1600' src={chairs} alt="" />
  <div className="text-container" data-aos="fade-up" data-aos-duration='1700'>
<p><span className="tex">Online/offline fitness and therapy sessions</span><br /> Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
  </div>
</div>

<div data-aos-anchor-easing='ease-in-out' className = 'box-one'>
<img data-aos="fade-up" data-aos-duration='1600'  src={work3} alt="" />
  <div className="text-container" data-aos="fade-up" data-aos-duration='1700'>
<p><span className="tex">Personalise and track your fitness routine</span><br />Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
  </div>


</div>

</div>


<Footer />

  </div>
  );
}

export default Services;
