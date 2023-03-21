import React from 'react'
import IMAGES from '../images'

function Shop() {
  
  return (
    <div>
      <center> <h1> Shop </h1> </center>
      <center>
      <div class="row"style={{display: 'center' }}>
        <div class="column" style={{align:'center'}}>
          
          <img  src={IMAGES.img1} alt="Display" style={{margin:'2%' }}/>
          
          <img src={IMAGES.img1} alt="Display"style={{margin:'2%'}} />
          <img  src={IMAGES.img1} alt="Display" style={{margin:'2%'}}/>
          <img  src={IMAGES.img1} alt="Display"style={{margin:'2%'}} />
         
        </div>
        <div class="column" style={{}}>
          <img  src={IMAGES.img1} alt="Display" style={{margin:'2%' }}/>
          <img src={IMAGES.img1} alt="Display"style={{margin:'2%' }} />
          <img  src={IMAGES.img1} alt="Display" style={{margin:'2%' }}/>
          <img  src={IMAGES.img1} alt="Display"style={{margin:'2%' }} />
          
        </div>

        <div class="column" style={{}}>
          <img  src={IMAGES.img1} alt="Display" style={{margin:'2%', }}/>
          <img src={IMAGES.img1} alt="Display"style={{margin:'2%', }} />
          <img  src={IMAGES.img1} alt="Display" style={{margin:'2%', }}/>
          <img  src={IMAGES.img1} alt="Display"style={{margin:'2%', }} />
          
        </div>
        
        <div class="column" style={{}}>
          <img  src={IMAGES.img1} alt="Display" style={{margin:'2%', }}/>
          <img src={IMAGES.img1} alt="Display"style={{margin:'2%', }} />
          <img  src={IMAGES.img1} alt="Display" style={{margin:'2%', }}/>
          <img  src={IMAGES.img1} alt="Display"style={{margin:'2%', }} />
          
        </div>
      </div>
      </center>
      </div>
  )
}
export default Shop