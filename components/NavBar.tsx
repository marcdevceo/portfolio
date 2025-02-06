import Image from "next/image";
import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-5">
      <div className="selection:sm:items-stretch sm:justify-start">
        {/* <div className="flex shrink-0 items-center">
          <Image 
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" 
            alt="Your Company" 
            width={40}
            height={40}
          />
        </div> */}
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a href="/" className="rounded-md bg-gray-900 px-3 py-2 text-lg font-medium text-white" aria-current="page">Home</a>
            <a href="/projects" className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
            <a href="/blog" className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Blog</a>
            <a href="/resume" className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Resume</a>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden">
        <div className="flex justify-center p-5">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</a>
          <a href="/projects" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
          <a href="/blog" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Blog</a>
          <a href="/resume" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Resume</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar