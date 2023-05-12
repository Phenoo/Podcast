'use client'

import { IconType } from "react-icons/lib";

interface HeadingProps{
    title: string;
    color: string;
    center?: boolean;
    icon?: IconType
}

const Heading: React.FC<HeadingProps> = ({title, color, center, icon: Icon}) => {
  return (
    <div>
        <h1 className={`text-2xl  sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize ${color} ${center && 'text-center justify-center flex items-center gap-4'}`}>
            {title}
            {
          Icon && <Icon size={40}/>
        }
        </h1>
       
    </div>
  )
}

export default Heading