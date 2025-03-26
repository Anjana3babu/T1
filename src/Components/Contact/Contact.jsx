import React from 'react'
import './Contact.css'
import Telegram from '../../assets/25.png'


function Contact() {
    return (
        <div id='contact' className='contact flex-col '>

            <div className="servicestitle">
                <h1>Pricing Plan</h1>
                <p style={{ fontSize: "12px" }} > Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form</p>
            </div>
            <div className="contactcards flex-row">
                <div className="card contactcard flex-col ">
                    <div className="telegram1">
                        <img className='telegram' src={Telegram} alt="" />
                    </div>
                    <div className="telegram2 flex-col">
                        <h1>Basic Plan</h1>
                        <p>combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum</p>
                    </div>
                    <div className="telegram3 flex-row">
                        <div className="money1">
                            <h1>$100</h1>
                        </div>
                        <div className="money2 ">
                            <button className='learn1'>Booking</button>
                        </div>
                    </div>

                </div>
                <div className="card contactcard flex-col scaled">
                    <div className="telegram1">
                        <img className='telegram' src={Telegram} alt="" />
                    </div>
                    <div className="telegram2 flex-col">
                        <h1>Basic Value</h1>
                        <p>combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum</p>

                    </div>
                    <div className="telegram3 flex-row">
                        <div className="money1">
                            <h1>$150</h1>
                        </div>
                        <div className="money2 ">
                            <button className='learn1'>Booking</button>
                        </div>
                    </div>

                </div>
                <div className="card contactcard flex-col">
                    <div className="telegram1">
                        <img className='telegram' src={Telegram} alt="" />
                    </div>
                    <div className="telegram2 flex-col">
                        <h1>Exclusive</h1>
                        <p>combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum</p>
                    </div>
                    <div className="telegram3 flex-row">
                        <div className="money1">
                            <h1>$250</h1>
                        </div>
                        <div className="money2 ">
                            <button className='learn1'>Booking</button>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Contact
