'use client'

import { AiOutlineSearch} from 'react-icons/ai'
import NavMenu from './Navigation';
import useSearchModal from '@/app/hooks/useSearchModal';

const UserNav = () => {
    const searchModal = useSearchModal()

    const handleClick = () => {
      searchModal.onOpen();
  }
  return (
    <div className='flex flex-row items-center gap-2 md:gap-4 relative'>
        <div>
            <button onClick={handleClick} className='text-xl md:text-2xl flex items-center'>
                <AiOutlineSearch />
            </button>
        </div>
        <div>
            <button className='hidden md:flex items-center justify-center gap-2 md:gap-4 text-center border border-white text-white bg-primary font-bold text-sm sm:text-lg capitalize rounded-full hover:opacity-80 transition w-fit py-4 px-4 md:px-8 '>
                subscribe
            </button>
        </div>
        <div className="md:hidden ">
              <NavMenu />
        </div>
    </div>
  )
}

export default UserNav