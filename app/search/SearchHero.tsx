'use client'
import React from 'react'

interface SearchHeroProps {
  encodedSearchQuery: string | null;
}

const SearchHero: React.FC<SearchHeroProps> = ({ encodedSearchQuery }) => {
  return (
    <div className=" bg-[url('https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-center bg-no-repeat bg-cover w-full h-[45vh]">
        <div className='px-8 bg-black/60 text-white w-full h-full flex items-center justify-center'>
            <h1 className='text-xl md:text-3xl capitalize text-center'>
                Showing results for: {`"${encodedSearchQuery}"`}
                {/* <span className="font-semibold capitalize">{encodedSearchQuery}</span> */}
            </h1>
        </div>
    </div>
  )
}

export default SearchHero