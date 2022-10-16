import React from 'react'
import NavBar from '../components/Nav'
import Footer from '../components/Footer'
import '../Styles/fitness.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import img1 from '../healthfit images/cardio-class.jpg'
import img2 from '../healthfit images/crossfit-class.jpg'
import img3 from '../healthfit images/yoga-class.jpg'
import img4 from '../healthfit images/fit.webp'
import fit from '../healthfit images/fit-small.jpg'
import team from '../healthfit images/work3.jpg'
import mental from '../healthfit images/mental-health.jpg'



function Fitness() {
    return (
        <div className='wrapper'>
            <NavBar />


            <div className='colored' style={{
                "--img": `url(${img4}), 
                    
                   linear-gradient(#fff, #fff)`}}>

                    <h1>Fitness and mental health</h1>
      
            </div>


            <Tabs className='tabs mb-3 bg-dark'
                defaultActiveKey="fitness"
                transition={true}
                justify

            >
                <Tab className='tab' eventKey="fitness" title="Fitness">

                    <div className='how' data-aos-anchor-easing='ease-in-out'>

                        <div className='image'>
                            <img src={img1} alt="exercise" data-aos="fade-up" data-aos-duration='1600' />
                            <div className="image-text" data-aos="fade-up" data-aos-duration='1600'>
                            <h2>Exercise and Fitness</h2>
                                <h2>The best workout routines, training tips, and fitness culture coverage you can find anywhere. We’re here to help you build into the best version of yourself.</h2>
                                <p>Fitness is the quality or state of being fit and healthy. Regarding specific function, fitness is attributed to persons who possess significant aerobic or anaerobic ability (i.e., endurance or strength).</p>
                                <p>A well-rounded fitness program improves a person in all aspects of fitness compared to practicing only one, such as only cardio/respiratory or only weight training. A comprehensive fitness program tailored to an individual typically focuses on one or more specific skills, and on age or health-related needs such as bone health.</p>
                                <p>Physical fitness has been shown to have benefits in preventing ill health and assisting recovery from injury or illness. Along with the physical health benefits of fitness, it has also been shown to have a positive impact on mental health as well by assisting in treating anxiety and depression. </p>
                            </div>
                        </div>
                    </div>

                    <div className='how' data-aos-anchor-easing='ease-in-out'>
                   


                        <div className='image'>
                            <img data-aos="fade-up" data-aos-duration='1600' src={team} alt="exercise" />
                            <div data-aos="fade-up" data-aos-duration='1700' className="image-text">
                            <h2> Physical fitness can also prevent or treat many other chronic health conditions brought on by unhealthy lifestyle or aging as well.</h2>
                    <p>Working out can also help some people sleep better by building up sleeping pressure and possibly alleviate some mood disorders in certain individuals.</p>
                    
                        <em>The 2018 Physical Activity Guidelines for Americans were released by the U.S. Department of Health and Human Services to provide science-based guidance for people ages 3 years and older to improve their health by participating in regular physical activity. Physical activities include: <br /> <br />

                        </em>
                                <ul><span className="aerobic">Aerobic exercise:</span> Aerobic exercise, which improves cardiorespiratory fitness and increase stamina, involves movement that increases the heart rate to improve the body's oxygen consumption. This form of exercise is an important part of all training regiments, whether for professional athletes or for the everyday person. Prominent examples of aerobic exercises include:</ul>
                                <li><em>Jogging</em> – Running at a steady and gentle pace. This form of exercise is great for maintaining weight and building a cardiovascular base to later perform more intense exercises.</li>
                                <li><em>Working on elliptical trainer</em> – This is a stationary exercise machine used to perform walking, or running without causing excessive stress on the joints. This form of exercise is perfect for people with achy </li>
                                <li><em>Walking</em> – Moving at a fairly regular pace for a short, medium or long distance.</li>
                                <li><em>Treadmill training</em> – Many treadmills have programs set up that offer numerous different workout plans. One effective cardiovascular activity would be to switch between running and walking. Typically warm up first by walking and then switch off between walking for three minutes and running for three minutes.</li>
                                <li><em>Swimming</em> – Using the arms and legs to keep oneself afloat in water and moving either forwards or backward. This is a good full-body exercise for those who are looking to strengthen their core while improving cardiovascular endurance.</li>
                            </div>
                        </div>

                    </div>

                    <div className='how'data-aos-anchor-easing='ease-in-out'>
                    
  
                        <div className='image'>
                            <img data-aos="fade-up" data-aos-duration='1600' src={fit} alt="exercise" />
                            <div data-aos="fade-up" data-aos-duration='1600' className="image-text">
                            <ul><span className="aerobic">Anaerobic exercise:</span> Anaerobic exercise features high-intensity movements performed in a short period of time.
                    </ul>
                                <p> It is a fast, high-intensity exercise that does not require the body to utilize oxygen to produce energy.</p>
                                <p>It helps to promote strength, endurance, speed, and power; and is used by bodybuilders to build workout intensity.</p>
                                <p>Anaerobic exercises are thought to increase the metabolic rate, thereby allowing one to burn additional calories as the body recovers from exercise due to an increase in body temperature and excess post-exercise oxygen consumption (EPOC) after the exercise ended. </p>
                                <p>Prominent examples of anaerobic exercises include:</p> <br />
                                <li><em>Weight training</em> - A common type of strength training for developing the strength and size of skeletal muscles.</li>
                                <li><em>Isometric exercise</em> - Helps to maintain strength. A muscle action in which no visible movement occurs and the resistance matches the muscular tension</li>
                                <li><em>Sprinting</em> - Running short distances as fast as possible, training for muscle explosiveness.</li>
                                <li><em>Interval training</em> - Alternating short bursts (lasting around 30 seconds) of intense activity with longer intervals (three to four minutes) of less intense activity.
                                </li>

                            </div>
                        </div>

                    </div>
                </Tab>
                
                <Tab className='tab' eventKey="mental" title="Mental Health">

                    <div className="why" data-aos-anchor-easing='ease-in-out'>
                        <h1>Mental Health</h1>
                        <div className='image'>
                            <img src={mental} alt="exercise" data-aos="fade-up" data-aos-duration='1600'/>
                            <div className="image-text" data-aos="fade-up" data-aos-duration='1600'>
                                <li>People who exercise regularly have better mental health and emotional wellbeing, and lower rates of mental illness.</li>
                                <li>Exercise is important for people with mental illness – it not only boosts our mood, concentration and alertness, but improves our cardiovascular and overall physical health.</li>
                                <li>Exercise doesn’t have to be strenuous, structured or take a long time to have benefits.</li>
                                <li>Any exercise is better than none, but experts recommend adults should be active most days, aiming for a total of 2.5-5 hours of moderate physical activity, or 1.25-2.5 hours of vigorous physical activity per week.</li>

                            </div>
                        </div>
                    </div>


                    <div className="why"data-aos-anchor-easing='ease-in-out'>
                        <h1>Why does exercise make us feel better, mentally?</h1>

                        <div className='image'>
                            <img src={img3} alt="exercise" data-aos="fade-up" data-aos-duration='1600'/>
                            <div className="image-text" data-aos="fade-up" data-aos-duration='1600'>
                                <p>The link between exercise and mental health is complicated. Inactivity can be both a cause and a consequence of mental illness, for example. But there are lots of ways that exercise can benefit your mental health, such as:</p>
                                <li>The levels of chemicals in the brain, such as serotonin, stress hormones and endorphins, change when you exercise.</li>
                                <li>Regular exercise can help you sleep better. And good sleep helps you manage your mood.</li>
                                <li>Exercise can improve your sense of control, coping ability and self-esteem. People who exercise regularly often report how good achieving a goal makes them feel.</li>
                            </div>

                        </div>

                    </div>

                    <div className="why"data-aos-anchor-easing='ease-in-out'>
                        <h1>Exercising for your mental health</h1>

                        <div className='image'>
                            <img src={img1} alt="exercise" data-aos="fade-up" data-aos-duration='1600'/>
                            <div className="image-text" data-aos="fade-up" data-aos-duration='1600'>


                                <p>If regular exercise is not already a part of your routine, you might be wondering how much you need to do to give your mental health a boost.</p>
                                <p>The really good news is exercise doesn’t have to be strenuous or take a long time. Studies show low or moderate intensity exercise is enough to make a difference in terms of your mood and thinking patterns.</p>
                                <p>However, any exercise is better than none. Going for a leisurely walk, or activities like stretching and yoga, can also have huge benefits on your mind and body. Even doing housework like sweeping, mopping, or vacuuming can give you a mild work out.</p>
                            </div>
                        </div>
                    </div>


                    <div className="why"data-aos-anchor-easing='ease-in-out'>
                        <h1>How to get started with exercise</h1>

                        <div className='image'>
                            <img src={img2} alt="exercise" data-aos="fade-up" data-aos-duration='1600'/>
                            <div className="image-text" data-aos="fade-up" data-aos-duration='1600'>
                                <p>It can be intimidating to start exercising if you haven’t done it in a while, but a plan can help you start and stick with it.</p>
                                <p>Your new exercise plan has a better chance of success if you:</p>
                                <li>see your GP or an accredited exercise physiologist before you start, and regularly as you continue your exercise plan</li>
                                <li>choose an activity you like, or have enjoyed in the past, that suits your fitness levels and abilities.</li>
                                <li>start small – build up your activity gradually. Ideally, vary your activities so you don’t get bored.</li>
                                <li>write your plan in your diary or on your calendar, so it’s part of your schedule.</li>
                                <li>regularly revisit your exercise plans, and try something different if it’s not working out for you.</li>
                            </div>
                        </div>
                    </div>

                </Tab>

            </Tabs>

            <Footer />
        </div>
    );
}

export default Fitness;