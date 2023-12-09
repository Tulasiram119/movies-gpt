import React from 'react'

const VedioTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] md:px-24 px-6 absolute text-white bg-gradient-to-tr from-black'>
        <h1 className='md:text-6xl 
        text-2xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4 hidden md:inline-block'>{overview}</p>
        <div>
            <button className='bg-white text-black md:py-4 md:px-12 py-1 px-3 text-lg rounded-lg hover:bg-opacity-80 mt-4'>▶️Play</button>
            <button className='bg-gray-500 text-white py-4 px-12 text-lg bg-opacity-40 rounded-lg mx-2 hidden md:inline-block'>ℹ️More Info</button>
        </div>
    </div>
  )
}

export default VedioTitle