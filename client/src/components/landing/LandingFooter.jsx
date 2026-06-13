import React from 'react'
import logo from "../../assets/logo.png";

function LandingFooter() {
  return (
    <footer className='bg-[#111827] text-white md:py-10 py-4 px-4'>
      <div className='max-w-6xl mx-auto grid gap-8 md:grid-cols-3'>
        <div>
          <div className='flex items-center gap-2 mb-2'>
            <img src={logo} alt="LOGO" className='md:h-15 h-10' />
            <h2 className='text-lg font-semibold md:mb-2 mb-1'>FinAI</h2>
          </div>
          <p className='text-sm text-gray-400'>
            Take control of your finances with smart insights and easy tracking.
          </p>
        </div>
        <div>
          <h3 className='text-md font-semibold md:mb-2 mb-1'>Quick Links</h3>
          <ul className='space-y-1 text-sm text-gray-300'>
            <li><a href="#features" className='hover:underline'>Features</a></li>
            <li><a href="#about" className='hover:underline'>About</a></li>
            <li><a href="#faqs" className='hover:underline'>FAQs</a></li>
            <li><a href="/register" className='hover:underline'>Get Started</a></li>
            <li><a href="#" className='hover:underline'>Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className='text-md font-semibold md:mb-2 mb-1'>Stay Connected</h3>
          <p className='text-sm text-gray-400'>contact@finai.com</p>
          <p className='text-sm text-gray-400'>Developer: Movendu Singh</p>
        </div>
      </div>

      <div className='md:mt-8 mt-6 text-center text-gray-500 text-sm'>
        © {new Date().getFullYear()} FinAI. All rights reserved.
      </div>
    </footer>
  )
}

export default LandingFooter
