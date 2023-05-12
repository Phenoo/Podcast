import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Menu  from "./Menu";
import MenuButton from "./MenuButton";





const NavMenu  = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div>
        <AnimatePresence>
          {
            isOpen && (
            <Menu toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            )
          }
        </AnimatePresence>
          <MenuButton toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
    </div>  
)}

export default NavMenu

