import React from "react";
import { NavLink } from "react-router-dom";
import { history } from './../../../../App'


export default function Header(props) {
  return (
    <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-black bg-opacity-75 text-white fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          to='/'
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >

          <img
            src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
            className="w-40"
            alt="cybersoft"
          />

        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/home"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-600 border-violet-600 text-white hover:text-red-500"
              activeClassName="border-b-2 "
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/contact"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white hover:text-red-500"
              activeClassName="border-b-2"
            >
              Liên hệ
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/news"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white hover:text-red-500 "
              activeClassName="border-b-2 "
            >
              Tin tức
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button onClick={() => {
            history.push('/login')
          }} className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50">
            Sign up
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
