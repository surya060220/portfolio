import React from 'react'
import { Link } from 'react-scroll'
import "./Topcontent.css"

const Topcontent = () => {
  return (
    <div className='topcontent'>
      <div classname='topcontent_container'>
            <h1>Mr. Surya Prakash S S</h1>
            <p>Associate Software Engineer</p>
            <a href='www.google.com'>
                <button className='cvbutton'>Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className='myworkbutton'>My Work</button>
            </Link>         
        </div>          
    </div>
  )
}

export default Topcontent