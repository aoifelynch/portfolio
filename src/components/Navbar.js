import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="mockup-browser bg-base-300 border">
        <div className="mockup-browser-toolbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                  <Link to={"/about"}> About</Link>{" "}
                  
                </li>
                <li>
                  <Link to={"/contact"}> Contact</Link> 
                </li>
                <li>
                  <Link to={"/projects"}> Projects</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-center input">https://aoifelynch.com</div>
        </div>
        <div className="bg-base-200 flex justify-center px-4 py-16"></div>
      </div>
    </div>
  );
};

export default Navbar;
