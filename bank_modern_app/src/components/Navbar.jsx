import React, {useState} from 'react'
import {close, logo, menu} from '../assets';
import {navLinks} from "../constants";//get navLinks

const Navbar = () => {

  const [active, setActive] = useState("Home");//default "Home" is active
  const [toggle, setToggle] = useState(false);//for toggling

  return (
    <div>Navbar</div>
  )
}

export default Navbar