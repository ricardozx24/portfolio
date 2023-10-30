import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc' >I am a skilled and passionate web designer with experience in creating visully appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and illustrator.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src='./images/uiux.jpg' alt='ui ux image' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>User interface (UI) design is the process of making interfaces in software or computerized devices with a focus on looks or style. Designers aim to create designs users will find easy to use and pleasurable. UI design typically refers to graphical user interfaces but also includes others, such as voice-controlled ones.</p>
                    <p>User experience (UX) is the process of defining the experience a user would go through when interacting with a company, its services, and its products. Design decisions in UX design are often driven by research, data analysis, and test results rather than aesthetic preferences and opinions.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src='./images/webdesign.png' alt='web design image' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src='./images/appdesign.png' alt='app design image' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>App design is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch. Mobile applications often stand in contrast to desktop applications which are designed to run on desktop computers, and web applications which run in mobile web browsers rather than directly on the mobile device.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills