import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import Brain from './brain.jpg';

const Logo = () => {
return(
   <div className='ma4 mt0'>
<Tilt className=' Tilt br2 shadow-2'>
      <div style={{ height: '100px', width: '100px' }}>
       <img alt='brain' src={Brain}/>
      </div>
    </Tilt>
   </div>
)
}

export default Logo;