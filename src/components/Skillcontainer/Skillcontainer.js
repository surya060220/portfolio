import React from 'react'
import { Element } from 'react-scroll'
import "./Skillcontainer.css"
import LinearProgress from '@mui/material/LinearProgress';



const Skillcontainer = () => {
  return (
    <div className='container'>
        <Element className='skillcontainer' id='skills'></Element>    
        <div className='skillcontainer_text'>
          <h2>SKILL SET</h2>
          <div className='skillcontainer_name'>
            <h5>HTML</h5>
            <div className='skillcontainer_slider'>
              <LinearProgress variant ="determinate" value={90}/>
            </div>
          </div>
          <div className='skillcontainer_name'>
            <h5>CSS</h5>
            <div className='skillcontainer_slider'>
              <LinearProgress variant ="determinate" value={80}/>
            </div>
          </div>
          <div className='skillcontainer_name'>
            <h5>Javascript</h5>
            <div className='skillcontainer_slider'>
              <LinearProgress variant ="determinate" value={80}/>
            </div>
          </div>
          <div className='skillcontainer_name'>
            <h5>React JS</h5>
            <div className='skillcontainer_slider'>
              <LinearProgress variant ="determinate" value={70}/>
            </div>
          </div>
          <div className='skillcontainer_name'>
            <h5>Figma</h5>
            <div className='skillcontainer_slider'>
              <LinearProgress variant ="determinate" value={95}/>
            </div>
          </div>


       </div>
  
      </div> 
    
        
  
  )
}

export default Skillcontainer