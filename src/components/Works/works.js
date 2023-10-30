import React from 'react'
import './works.css'


const Works = () => {
  return (
    <section id='works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='worksDesc'> I take pride in paying attention to the smaillest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong oline presence. </span>
        <div className='worksImgs'>
            <img src='./images/cat-apple-laptop.webp' alt='cat-apple-laptop.webp'  className='worksImg' />
            <img src='./images/cat-computer-bed.jpg' alt='cat-computer-bed.jpg'  className='worksImg' />
            <img src='./images/cat-laptop.jpg' alt='cat-laptop.jpg'  className='worksImg' />
            <img src='./images/cat-laptop2.jpg' alt='cat-laptop2.jpg'  className='worksImg' />
            <img src='./images/cats-playing-computer.jpg' alt='cats-playing-computer.jpg'  className='worksImg' />
            <img src='./images/black-cat-laptop.jpg' alt='back-cat-laptop.jpg'  className='worksImg' />
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works