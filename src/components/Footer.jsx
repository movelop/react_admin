import React from 'react'

const Footer = () => {
  return (
    <div className='mt-24'>
      <p className="dark:text-gray-200 text-gray-700 text-center m-20">
        © {new Date().getFullYear()} All rights reserved by moshop.com
      </p>
    </div>
  )
}

export default Footer;