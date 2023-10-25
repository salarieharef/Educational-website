import React from 'react'

const SearchCourses = ({backgroundColor='bg-zgh' , placeholder='جستجوی خبر و مقاله ...' , width='w-full md:w-8/12' , height='h-10 md:h-12'}) => {
  return (
  <div className={`border mx-auto  flex rounded-lg  overflow-hidden ${height} ${width}`}>
    <input className='block w-full pr-4' placeholder={placeholder}/>    
    <button className={` block  bg-magnifier bg-40 bg-no-repeat bg-center  rounded-none w-10 md:w-12  text-white p-2.5 px-4  ${backgroundColor}`}></button>
  </div>
  )
}

export default SearchCourses