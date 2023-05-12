'use client'

import { motion } from 'framer-motion'
import { Ball } from '../hero/Hero'

const Loader = () => {
  return (
    <>
    <motion.div 
       className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary-1'
       initial={{ x: "100%", width: "100%"}}
       animate={{x: "0%", width: "0%"}}
       exit={{ x: ["0%", "100%"], width: ["0%", "100%"]}}
       transition={{duration: 0.8, ease: "easeInOut"}}
    >
    </motion.div>
    <motion.div 
       className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-primary'
       initial={{ x: "100%", width: "100%"}}
       animate={{x: "0%", width: "0%"}}
       transition={{delay: 0.3, duration: 0.8, ease: "easeInOut"}}
    />
    <motion.div 
       className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-black'
       initial={{ x: "100%", width: "100%"}}
       animate={{x: "0%", width: "0%"}}
       transition={{delay: 0.6, duration: 0.8, ease: "easeInOut"}}
    />
    </>

  )
}

export default Loader