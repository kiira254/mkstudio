import React from 'react'
import IMAGES from '../images'

function Shop() {
  
  return (
    <div>
      <center> <h1> Shop </h1> </center>
      <div class="row"style={{display: 'flex',flexWrap: 'wrap', padding: '0 4px' }}>
        <div class="column" style={{flex:'50%', padding:'0 4px'}}>
          <img  src={IMAGES.img1} alt="Display" />
          <img src={IMAGES.img1} alt="Display" />
          <img  src={IMAGES.img1} alt="Display" />
          <img  src={IMAGES.img1} alt="Display" />
          
        </div>
        <div class="column">
          <img  src={IMAGES.img1} alt="Display" />
          <img  src={IMAGES.img1} alt="Display" />
          <img  src={IMAGES.img1} alt="Display" />
          <img  src={IMAGES.img1} alt="Display" />
          
        </div>
        <div class="column">
          <img  src={IMAGES.img1} alt="Display" />
          <img  src={IMAGES.img1} alt="Display" />
          <img  src={IMAGES.img1} alt="Display" />
          <img cliassName="w-full" src={IMAGES.img1} alt="Display" />
         
        </div>
        <div class="column">
          <img  src={IMAGES.img1} alt="Display" />
          <img  src={IMAGES.img1} alt="Display" />
          <img  src={IMAGES.img1} alt="Display" />
          <img  src={IMAGES.img1} alt="Display" />
          
        </div>
      </div>
      </div>
  )
}
export default Shop