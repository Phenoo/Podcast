'use client'

import { IconType } from "react-icons/lib";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    outline?: boolean;
    small?: boolean;
    bgcolor: string;
    color: string;
    icon?: IconType
}

const Button: React.FC<ButtonProps> = ({label, onClick, bgcolor, color, icon: Icon}) => {
  return (
    <button onClick={onClick} className={`${Icon && 'flex items-center justify-center gap-2 md:gap-4'} text-center text-${color} ${bgcolor} font-bold text-sm sm:text-lg capitalize rounded-lg hover:opacity-80 transition w-full md:w-fit py-4 px-4 md:px-8`}>
        {label}
        {
          Icon &&  <Icon />
        }
    </button>
  )
}

export default Button