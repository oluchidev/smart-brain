import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange,   onButtonSubmit}) => {
return(
   <div className='form-cont' >
<p className='f3'>
{'This is magic Brain will detect face in your pictures , you should try it out'}
</p>
<div  className='pa4 br3 shadow-5 form-wrap'>
    <input className='f4 pa2 w-70 center form' type='text' onChange={onInputChange}/>
    <button className='w-30 grow f4 link ph3npv2 dib white bg-light-purple btn' onClick={onButtonSubmit}>Detect</button>
</div>
   </div>
)
}

export default ImageLinkForm;