import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  
const [about, setAbout] = useState("")
// const [navStyle, setnavStyle] = useState({
//   color: 'blue',
//   backgroundColor: 'black'
// })

  return (
    <>
    <nav style={props.navStyle}>
       {/* <li>Home (First try) </li> */}
       <li  style={props.liStyle}>{props.title} </li>
       <li style={props.liStyle}>Services</li>
       <li style={props.liStyle}>{props.about}</li>
    </nav>

   </>


  )
}
