import React, {useState} from 'react'
import {close, logo, menu} from '../assets';
import {navLinks} from "../constants";//get navLinks

const Navbar = () => {

  const [active, setActive] = useState("Home");//default "Home" is active
  const [toggle, setToggle] = useState(false);//for toggling

  return (
    /*
    list-none => remove the default styling of list elements.
    */
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"/>

        <ul className="list-none sm:flex hidden justify-end itmes-center flex-1">
          {
            navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))
          }
        </ul>
    </nav>
  )
}

export default Navbar