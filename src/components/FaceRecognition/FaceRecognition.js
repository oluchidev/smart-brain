import React from 'react'

const FaceRecognition = ({imageUrl}) => {
return(
    <div className='center'>
     <img alt='p' src= {imageUrl} width='500px' height='auto'/>
    </div>
)
}

export default FaceRecognition;

// https://samples.clarifai.com/face-det.jpg  