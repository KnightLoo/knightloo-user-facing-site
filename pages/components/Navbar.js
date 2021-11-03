import React, { ReactElement, useState} from 'react'

export default function Navbar(props){
    const [dropdown, setDropdown] = useState(false);
    const toggleMenu = () => {
      setDropdown(!dropdown);
    }
  
    return (
      <nav className="flex items-center bg-white p-3 flex-wrap"> 
        <a href="#" className="p-2 mr-4 inline-flex items-center">
          <span className="heading-text text-xl text-black font-bold uppercase tracking-wide"
            >KnightLoo
          </span>
        </a>
        <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 lg:hidden ml-auto"
         onClick={toggleMenu}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg> 
        </button>
        <div
          className={`${
            dropdown ? '' : 'hidden'} top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          id="navigation"
        >
          <div
            className="p-text lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
          >
            <a
              href="#features"
              className="p-text lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Features</span>
            </a>
            <a
              href="#gallery"
              className="p-text lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Gallery</span>
            </a>
            <a
              href="#contact"
              className="p-text lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </nav>
    );
 
}