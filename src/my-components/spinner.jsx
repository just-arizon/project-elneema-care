import React from 'react'
import Logo from '../assets/elneema logo.svg'

export function Spinner() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <img src={Logo} alt=""  className='animate-pulse w-16 h-16'/>
    </div>
  )
}

