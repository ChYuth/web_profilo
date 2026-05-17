import React from 'react'
import picture from "../assets/img/ChorkRayuth.jpg"
import "../components/title.css"

const Picture = () => {
  return (
    <>
    <div className='w-full h-auto mx-auto py-4 grid place-items-center animate-float'>
                  <img src={picture} alt="Chork Rayuth" className="w-110 h-78 sm:w-78 lg:w-100 lg:h-108 rounded-full p-2 backdrop-blur-2xl shadow-lg object-cover " />

    </div>
    </>
  )
}

export default Picture