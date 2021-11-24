import React, { ReactElement, useState} from 'react'

export default function Navbar(props){
    const [dropdown, setDropdown] = useState(false);
    const toggleMenu = () => {
      setDropdown(!dropdown);
    }
  // lg:-mb-32
    return (
      <nav className="flex items-center p-2 flex-wrap lg:-mb-20 lg:flex-nowrap">
        
        {/* <img className="logo-container" src="/logo.png"/> */}
        <div className="text-center md:text-center lg:text-left md:w-1/3">
          <img className="logo-container" src="/logo.png"/>
        </div>

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
            className="p-text lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center flex flex-col lg:h-auto"
          >
            <a
              href="#features"
              className="center-text p-text lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Features</span>
            </a>
            <a
              href="#gallery"
              className="center-text p-text lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Gallery</span>
            </a>
            <a
              href="#contact"
              className="center-text p-text lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </nav>
    );
 
}