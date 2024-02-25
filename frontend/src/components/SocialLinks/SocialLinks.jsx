import React from 'react'
import { Link } from 'react-router-dom'

const SocialLinks = () => {
  return (
    <>
      <Link className='hover:text-green-600 font-semibold' to="https://github.com/jysh-bgde/" target='_blank' rel="noopener noreferrer">Github</Link>
      <Link className='hover:text-green-600 font-semibold' to="https://twitter.com/bgde2001" target='_blank' rel="noopener noreferrer">Twitter</Link>
      <Link className='hover:text-green-600 font-semibold' to="https://www.instagram.com/jayeshbagde/" target='_blank' rel="noopener noreferrer">Instagram</Link>
    </>
  )
}

export default SocialLinks