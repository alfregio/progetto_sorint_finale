import React from 'react'
import "./Header.css"
import { SlArrowDown } from "react-icons/sl";

const Header = () => {
  return (
    <header className='header.class'>
        <div className='wrapper'>
            <nav>
                <ul className='menu'>
                    <li>
                        <a href=''>Home</a>
                    </li>
                    <SlArrowDown className='upArrow'/>
                    <li>
                        <a href=''>Shop</a>
                    </li>
                    <SlArrowDown className='upArrow'/>
                    <li>
                        <a href=''>About us</a>
                    </li>
                    <SlArrowDown className='upArrow'/>
                    <li>
                        <a href=''>Contact</a>
                    </li>
                    <SlArrowDown className='upArrow'/>
                </ul>

            </nav>
        </div>

    </header>
  )
}

export default Header