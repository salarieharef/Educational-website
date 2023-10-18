import React from 'react'

const SerachCourses = ({placeholder}) => {
  return (
    <div className='border mx-auto w-8/12 md:w-5/12 flex rounded-lg h-14 overflow-hidden'>
    <input className='block w-full pr-4' placeholder={placeholder}/>    
    <button className='block bg-zgh bg-magnifier bg-50 bg-no-repeat bg-center bg-cover w-14  magnifier  text-white p-2.5 px-4'></button>
  </div>
  )
}

export default SerachCourses