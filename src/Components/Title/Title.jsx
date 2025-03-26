import React from 'react'
import './Title.css'
import Pic1 from '../../assets/19.png'
import Pic2 from '../../assets/20.png'
import Pic3 from '../../assets/21.png'




function Title() {
  return (
    <div className='title flex-row'>
      <div className="ltitle">
        <h1>Let's Explore the World with Us</h1>
        <p style={{ color: "grey" }}>Lorem of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
        <button className='learn'>Learn more</button>
      </div>
      <div className="rtitle flex-row">
        <div className='picdiv flex-row'>
          <img className='pic1' src={Pic1} alt="" />
        </div>
        <div className='picdiv flex-row'>
          <img className='pic1' src={Pic2} alt="" />
        </div>
        <div className='picdiv flex-row'>
          <img className='pic1' src={Pic3} alt="" />
        </div>


      </div>
    </div>

  )
}

export default Title
