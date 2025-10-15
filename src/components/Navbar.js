const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-gray-700">
                <svg className="w-5 h-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Web Projects</a></li>
                <li><a href="/graphics">Design Work</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <a href="/" className="btn btn-ghost text-xl text-gray-700 font-bold tracking-wide">
              Aoife Lynch
            </a>
          </div>
          
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-1">
              <li>
                <a href="/" className="text-gray-700 hover:bg-white hover:bg-opacity-60 rounded-lg transition-all duration-300 font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-700 hover:bg-white hover:bg-opacity-60 rounded-lg transition-all duration-300 font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-700 hover:bg-white hover:bg-opacity-60 rounded-lg transition-all duration-300 font-medium">
                  Web Projects
                </a>
              </li>
              <li>
                <a href="/graphics" className="text-gray-700 hover:bg-white hover:bg-opacity-60 rounded-lg transition-all duration-300 font-medium">
                  Design Work
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-700 hover:bg-white hover:bg-opacity-60 rounded-lg transition-all duration-300 font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="navbar-end">
            <a href="/contact" className="btn btn-outline border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300 font-medium">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
