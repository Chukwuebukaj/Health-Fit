import React, { } from 'react'

import heroImg from '../healthfit images/hero-bg.jpg'
function Header() {

  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  function mobileView() {
    return (
      <div>

        <div className='big-container' style={{
          "--img": `url(${heroImg}), 
                    
                    linear-gradient(#fff, #fff)`}}>
          <div data-aos-anchor-easing='ease-in-out' className="header-text">
            <h1 data-aos="fade-up" data-aos-duration='1500'>We care about impoving <br /> your health and <br /> wellbeing.</h1>
            <p data-aos="fade-up" data-aos-duration='1800'>Take control of your goals. Track calories,<br /> break down ingredients, and log <br /> activities with HealthFit.</p>
            <button data-aos="fade-up" data-aos-duration='2000'>Start for free</button>
          </div>
        </div>

      </div>
    )


  }
  function desktopView() {
    return (
      <div>

        <div className='big-container' style={{
          "--img": `url(${heroImg}), 
                    
                    linear-gradient(#fff, #fff)`}}>
          <div data-aos-anchor-easing='ease-in-out' className="header-text">
            <h1 data-aos="fade-up" data-aos-duration='1500'>We care about impoving <br /> your health and <br /> wellbeing.</h1>
            <p data-aos="fade-up" data-aos-duration='1800'>Take control of your goals. Track calories, <br /> break down ingredients, and log <br /> activities with HealthFit.</p>
            <button data-aos="fade-up" data-aos-duration='2000'>Start for free</button>
          </div>
        </div>
      </div>
    )
  }
  return (



    <div style={{}}>

      {windowSize.width < 576 ? mobileView() : desktopView()}

    </div>
  )
}

export default Header
