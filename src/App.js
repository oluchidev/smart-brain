import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
 apiKey: '037f3e3c22b7460a83eac514ce891d12'
});


class App extends React.Component{

  constructor() {
    super();
    this.state = {
      input:'',
      imageUrl: ''
    }

  }

  onInputChange = (event) => {
         this.setState({input: event.target.value})
        } 

        onButtonSubmit = () => {
          this.setState({imageUrl: this.state.input})
          app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input
        )
      .then(response => {
        console.log('hi', response)
          })
          
          // app.models
          // .predict(Clarifai.COLOR_MODEL ,
          //    'https://samples.clarifai.com/metro-north.jpg')
          //    .then(
          //   function(response) {
          //   console.log(response)
          //   },

          //   function(err) {
              
          //   }
          // )

        }

  render() {
    return (
      <div className="App">  
      {/*<div>...</div>*/}
          <ParticlesBg className="particles" type="cobweb" bg={true}/>
     <Navigation/>
     <Logo/>  
     <Rank/>
     <ImageLinkForm onInputChange= {this.onInputChange}   onButtonSubmit={ this.onButtonSubmit}/> 
     <FaceRecognition imageUrl={this.state.imageUrl}/>   
     
      </div>
    );
  }
}


export default App;


/*{07abebc454a94fe7bd56f9b1e7b4cf31}*/