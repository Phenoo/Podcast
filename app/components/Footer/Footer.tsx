'use client'

import Container from "../Container"
import Followus from "../Followus"
import { footerLinks } from "../data/data"
import Logo from "../navbar/Logo"
import Link from "next/link"


const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <Container>
        <div className="py-12 flex justify-between gap-4 gap-y-12 flex-wrap">
          <div className=" w-full sm:w-full md:w-[340px]">
            <Logo />
            <p className="">
            Welcome to Unami Podcast, where we explore the fascinating realms of lifestyle, art, music, travel, culture, fashion, and food. Join us on a sensory journey as we delve into diverse topics that ignite your passion and expand your horizons.
            </p>
          </div>
            {
              footerLinks.map((item) => (
                <div className="w-full sm:w-[350px] md:w-[340px]" key={item.title}>
                  <h4 className="font-bold text-xl">{item.title}</h4>
                  <ul>
                    {
                      item.links.map((link) => (
                        <li key={link.label} className="mt-2 hover:text-primary-1 transition">
                          <Link href='/'>
                            {link.label}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }

        </div>
        <hr className="bg-primary-1" />
        <br />
        <div className="flex justify-between items-center gap-4 flex-col md:flex-row py">
          <p>
            © 2023 unami podcast blog All rights reserved
          </p>
          <Followus />
        </div>
      </Container>
    </div>
  )
}

export default Footer