
import { SiBitcoinsv } from "react-icons/si";
import PropTypes from 'prop-types';
const Nav = ({coin}) => {
    
    const navlinks = <>
        <li><a>Home</a></li>
        <li><a>Fixture</a></li>
        <li><a>Teams</a></li>
        <li><a>Schedules</a></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navlinks}
                        </ul>
                    </div>
                    <img src="/logo.png" alt="" />
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-5 text-gray-500 text-lg">
                        {navlinks}
                    </ul>
                    <div className='border-2 px-3 py-1 rounded-xl flex items-center gap-2 '>
                        <button className="font-semibold"> <span>{coin}</span> Coin  </button>
                        <SiBitcoinsv className="text-orange-600 text-xl"/>
                    </div>
                </div>

            </div>
        </div>
    );
};
Nav.propTypes = {
    coin: PropTypes.number
    
}
export default Nav;