'use client'

import Link from "next/link"
import {navLinks} from '../data/data'
import { useState } from "react"
import { motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"

const MenuItem = () => {
    const path = usePathname();


  return (
        <div className="hidden md:flex flex-row items-center gap-6">
            <Link href='/' className="relative hover:opacity-75 px-3 py-1.5 text-xl uppercase font-medium outline-sky-400 transition focus-visible:outline-2"
                style={{
                    WebkitTapHighlightColor: "transparent",
                }}
            >
                home
            </Link>
            {
                navLinks.map((link) => {
                    const isActive = path.startsWith(link.url)
                    return (
                        <Link key={link.name} href={link.url}
                        className={`cursor-pointer ${
                            isActive ? "bg-primary-1 font-bold shadow-2xl" : "hover:opacity-75"
                          } relative rounded-full px-3 py-1.5 text-xl uppercase font-medium outline-sky-400 transition focus-visible:outline-2`}
                          style={{
                            WebkitTapHighlightColor: "transparent",
                          }}
                   >
                        {isActive && (
                        <motion.span
                            layoutId="bubble"
                            className="absolute inset-0 -z-10 bg-primary-1j "
                            style={{ borderRadius: 9999 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {link.name}
                    </Link>
                    )
                })
            }
        </div>
  )
}

export default MenuItem