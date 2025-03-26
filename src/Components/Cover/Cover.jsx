import React from 'react'
import './Cover.css'
import Coverpic from '../../assets/22.png'


function Cover() {
  return (
    <div id='home' className='cover'>
      <img className='coverpic' src={Coverpic} alt="" />
    </div>
  )
}

export default Cover
