'use client'

import {  BsArrowUpRightCircleFill } from 'react-icons/bs';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import { motion } from 'framer-motion';
import useSearchModal from '../hooks/useSearchModal';


  const SearchModal = () => {
    const search = useSearchParams();
    const router = useRouter();
    const searchModal = useSearchModal();
    const [searchInput, setSearchInput] = useState<string>(search.get("q") || "")



    const onSearch = (e : React.FormEvent) => {
        e.preventDefault();
        const encodedSearchQuery = encodeURI(searchInput)
        router.push(`/search?q=${encodedSearchQuery}`);
        searchModal.onClose()
    }

    const handleClick = () => {
        searchModal.onClose()
    }


  return (
    <>
        { searchModal.isOpen &&
                    <motion.div className='          
                    justify-center 
                    items-center 
                    flex 
                    overflow-x-hidden 
                    overflow-y-auto 
                    fixed 
                    inset-0 
                    z-50 
                    outline-none 
                    focus:outline-none
                    bg-white
                    text-primary'
                    initial={{y: "100%",}}
                    animate={{y: "0%", }}
                    exit={{y: "100%"}}
                    transition={{duration: '0.4', ease: "easeInOut"}}
                >
        
                    
                
                    <div className="
                    relative 
                    w-full
                    h-full
                    px-4
                    flex justify-center items-center flex-col gap-16"
                    >
                        <div onClick={handleClick} className='flex justify-start cursor-pointer rounded-full p-2 border-primary border-2' role='button'>
                            <FaTimes size={24} />
                        </div>
        
        
                            <form onSubmit={onSearch} className='w-full md:max-w-5xl mx-auto'>
                                <div className='flex items-center justify-center flex-col md:flex-row gap-4 w-full'>
                                    <input
                                        type="text"
                                        placeholder='Search '
                                        value={searchInput || ""}
                                        onChange={(e) => setSearchInput(e.target.value)}
                                        required
                                        className='w-full md:w-[300px] font-bold p-4 outline-none border border-primary focus:border-primary focus:outline-2 focus:outline-primary placeholder:text-black'
                                        />
                                    <button name="submit" type="submit"
                                        className='flex items-center justify-center gap-2 md:gap-4 text-center text-white bg-primary font-bold text-sm sm:text-lg capitalize rounded-full hover:opacity-80 transition w-fit py-4 px-4 md:px-8'>
                                        submit <BsArrowUpRightCircleFill />
                                    </button>
                                </div>
        
                            </form>
        
        
        
                            
        
                    </div>
        
                </motion.div>

        }  
    </>

  )
}

export default SearchModal