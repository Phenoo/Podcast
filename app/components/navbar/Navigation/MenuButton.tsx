import React, { useState } from "react";


export interface MenuButtonProps {
    toggle: () => void;
    isOpen: boolean
  }

const MenuButton: React.FC<MenuButtonProps> = ({toggle, isOpen}) => {
  const [isX, setIsX] = useState(false);

  const handleClick = () => {
    setIsX(!isX);
    toggle()
  };

  return (
    <button
      className="relative rounded-full bg-black p-4 md:p-8 focus:outline-none flex items-center  justify-center "
      onClick={handleClick}
      aria-label='Menu toggle' aria-controls="mobile-menu" aria-expanded="false"
    >
      <span
        className={`block absolute  left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-4 md:w-10 h-0.5 bg-white transition-all duration-200 ${
         isOpen ? "rotate-45 top-1/2" : "top-2/3"
        }`}
      />
      <span
        className={`block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 md:w-10 h-0.5 bg-white transition-all duration-200 ${
           isOpen? "opacity-0" : "opacity-"
        }`}
      />
      <span
        className={`block absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 md:w-10 h-0.5 bg-white transition-all duration-200 ${
         isOpen ? "-rotate-45 top-1/2" : "top-1/3"
        }`}
      />
    </button>
  );
};

export default MenuButton;
