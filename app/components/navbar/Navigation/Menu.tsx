'use client'

import React from "react";
import Link from 'next/link';
import { navLinks } from "../../data/data";

import {  motion } from "framer-motion";
import Followus from "../../Followus";
import Image from "next/image";

export interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean
}

const Menu: React.FC<MenuToggleProps> = ({toggle}) => {
  return(

        <motion.div
          initial={{transform: "translateX(100%)"}}
          animate={{transform: "translateX(0%)"}}
          exit={{transform: "translateX(100%)"}}
          transition={{duration: 0.6,  ease: [0.08, 0.65, 0.53, 0.96]}}
          className='lg:hidden h-screen bg-primary text-white  w-screen fixed inset-0 z-20'>
            <nav className="menu" aria-label="menu">
              <button className="fixed top-8 right-8 text-white font-bold text-xl capitalize" onClick={toggle}>
                close
              </button>
              <ul onClick={toggle}>
                <li className="text-2xl uppercase font-bold">
                <Link href='/'>
                    home
                </Link>
                </li>
                {
                  navLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.url} aria-label={`${link.name} Link`}>
                          {link.name}
                      </Link>
                    </li>
                  ))
                  }
                </ul>
                

                <div className="absolute bottom-12 flex justify-center items-center flex-col gap-4 w-full">
                  <span className="text-2xl uppercase font-bold">
                    follow us  here:
                  </span>
                  <Followus />
                </div>
          </nav>
        </motion.div>

  )
}

export default Menu

