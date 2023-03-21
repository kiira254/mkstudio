import React, { useState } from "react";
import { Container } from "react-bootstrap";
import IMAGES from '../images'

function Contact() {
  
  return (
    <div >
                    <img src={IMAGES.imgThree} alt='manbottom' style={{position:'',paddingBottom:'8%', float:'right'}} />
      <center><h1 width='285px'> Contact us</h1></center>
      <Container>
      <div class="row" style={{padding:'4%'}} >
        <div class="column" style={{width:'50%' }}>
          <p> Contact us</p>
          <h1>Chat to our friendly team</h1>
          <p>We'd love to hear from you. Please fill out this form or shoot us an email</p>
          <div class="row" style={{width:'63%' ,padding:'2%' }}>
            <div class="column"style={{float:'Left' ,width:'50%'}}>
              <img src={IMAGES.imgFour}alt='email' />  
              <h1>Email</h1>
              <p> Our friendly team is here to help.</p>
              <p> hi@untitledui.com </p>
              <img src={IMAGES.imgSix} alt='manbottom' style={{position:'fixed',paddingTop:'8%'}} />
              </div>
            <div class="column"style={{float:'Right' ,width:'50%', padding:'%'}}>
              <img src={IMAGES.imgFive}alt='phone' /> 
              <h1>Phone</h1>
              <p> Mon-Fri from 8am to 5pm. </p>
              <p> hi@untitledui.com </p>
            </div>
          </div>
        </div>
        <div class="column" style={{float:'Right' ,width:'50%', backgroundColor: 'white'}}>
        
        </div>
      </div>  
      </Container>
      </div>
  )
}
export default Contact
document.body.style= 'background:#FFF8DC;';
