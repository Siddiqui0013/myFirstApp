import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';

function App() {

  const [text, setText] = useState("Initial Text")
  const uppercase=() =>{
    setText(text.toUpperCase())
  }

  const [btnText, setbtnText] = useState("Switch Light mode")

  const [myStyle, setMystyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  })

  const [navStyle, setnavStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  })

  const [liStyle, setliStyle] = useState({
    color: 'white',
    backgroundColor: 'blue',
  })

  const [taStyle, setTastyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  })


  const toggleSwitch=()=>{

    if (myStyle.color=="white") {
      setMystyle({
        color: 'black',
        backgroundColor: 'white',
      })
      setnavStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setliStyle({
        color: 'white',
        backgroundColor: 'blue'
      })
      setTastyle({
        color: 'black',
        backgroundColor: 'white'           
      })
      setbtnText("Switch Dark mode")

    } else {
      setMystyle({
        color: 'white',
        backgroundColor: 'black'    
      })
      setnavStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setliStyle({
        color: 'white',
        backgroundColor: 'blue'
      })
      setTastyle({
        color: 'white',
        backgroundColor: 'black'           
      })
      setbtnText("Switch Light mode")
    }

  }

  return (
    <>
    <Navbar title="Home (1st Try)" about="About us" nav navStyle={navStyle} liStyle={liStyle}  /> 
    <div className='box' style={myStyle}>
    <textarea className="textarea" style={taStyle} onChange={(e)=>{
      setText(e.target.value)
    }}></textarea>
   <p>
   {text}
   </p>

   <button onClick={uppercase}>Capitalize</button>
<br></br>
<br></br>
   <button onClick={toggleSwitch}>{btnText}</button>





    </div>
    </>
    
  );
}

export default App;
