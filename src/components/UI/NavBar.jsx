import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex gap-1.5"
            >
              <li>
                <button className="btn btn-outline btn-primary">
                  <FontAwesomeIcon icon={faCircleQuestion} />
                  FAQ
                </button>
              </li>
              <li>
                <button className="btn btn-outline btn-primary">
                  <FontAwesomeIcon icon={faBookOpen} />
                  Learn
                </button>
              </li>
              <li>
                <button className="btn btn-outline btn-primary">
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  Logout
                </button>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl hover:bg-white  border-0">
            English <img src={logo} alt="" /> জানালা
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-2">
            <li>
              <button className="btn btn-outline btn-primary">
                <FontAwesomeIcon icon={faCircleQuestion} />
                FAQ
              </button>
            </li>
            <li>
              <button className="btn btn-outline btn-primary">
                <FontAwesomeIcon icon={faBookOpen} />
                Learn
              </button>
            </li>
            <li>
              <button className="btn btn-outline btn-primary">
                <FontAwesomeIcon icon={faRightFromBracket} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { NavBar };
