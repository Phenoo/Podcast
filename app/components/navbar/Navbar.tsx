'use client'

import {useState, useEffect} from 'react'
import Container from "../Container"
import Logo from "./Logo"
import MenuItem from "./MenuItem"
import UserNav from "./UserNav"


const Navbar = () => {
  const [ scrolled, setScrolled] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 100){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    changeBackground()
  });

  return (
    <nav className={`${scrolled ? 'bg-white text-black shadow-lg hover:text-black' : 'text-white'}  fixed z-10 w-full` }> 
        <Container>
            <div className="flex flex-row items-center justify-between gap-4 md:gap-8 py-4">
                <Logo />
                <MenuItem  />
                <UserNav />
            </div>
        </Container>

    </nav>
  )
}

export default Navbar
