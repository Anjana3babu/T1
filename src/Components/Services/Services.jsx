import React from 'react'
import './Services.css'
import Servicepic1 from '../../assets/16.png'
import Servicepic2 from '../../assets/17.png'
import Servicepic3 from '../../assets/18.png'


function Services() {
  return (
    <div id='services' className='services'>
      <div className='servicestitle'>
        <h1>The Best Destination</h1>
        <p style={{ fontSize: "12px" }}> interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form</p>
      </div>
      <div className='servicesimg'>
        <div className='card'>
          <img className='card1' src={Servicepic3} alt="" />
        </div>
        <div className='card'>
          <img className='card1' src={Servicepic2} alt="" />
        </div>
        <div className='card'>
          <img className='card1' src={Servicepic1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Services
