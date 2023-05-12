'use client'

import Link from "next/link";
import { useRouter } from "next/navigation"


const Logo = () => {
    const router = useRouter();
  return (
    <Link href='/' className={`text-xl sm:text-2xl logo uppercase`}>
      blabla
    </Link>
  )
}

export default Logo