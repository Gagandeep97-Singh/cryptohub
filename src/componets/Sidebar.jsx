import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsFacebook, BsTwitter, BsGithub } from 'react-icons/bs'
const Sidebar = () => {
    return (
        <div className="p-8 bg-[rgba(0,0,0,0.7)] min-h-[100vh] font-mano ">
            <ul className="flex flex-col gap-3">
                <ul className="flex flex-col text-white gap-5">
                    <NavLink to="/">
                        <h3 className="font-medium text-[1.2rem] font-mano hover:text-teal-500">Dashboard</h3>
                    </NavLink>
                    <li>
                        <NavLink to="/assits">
                            <p className="font-normal text-gray-300 hover:text-teal-500">  All Assits </p>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/watchlist">
                            <p className="font-normal text-gray-300 hover:text-teal-500">    Watchlist</p>
                        </NavLink>
                    </li>
                </ul>
                <div className="w-full h-[1px] bg-teal-300"></div>
                <br />
                <ul className="flex flex-col text-white gap-5">
                    <NavLink>
                        <h3 className="font-medium text-[1.2rem] font-mano hover:text-teal-500">Research</h3>
                    </NavLink>
                    <li>
                        <NavLink to="/newslist">
                            <p className="font-normal text-gray-300 hover:text-teal-500">  Newssletter </p>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink>
                            <p className="font-normal text-gray-300 hover:text-teal-500">Analysis</p>
                        </NavLink>
                    </li>
                </ul>
                <div className="w-full h-[1px] bg-teal-300"></div>
                <br />

                <ul className="flex flex-col text-white gap-5">
                        <Link>
                    <li className="flex gap-2 hover:text-teal-500">
                          <span className="mt-1"><BsFacebook /></span>   Facebook
                    </li>
                        </Link>
                        <Link>
                    <li className="flex gap-2 hover:text-teal-500">
                          <span className="mt-1"><BsTwitter /></span>   Twitter
                    </li>
                        </Link>
                        <Link>
                    <li className="flex gap-2 hover:text-teal-500
                    ">
                          <span className="mt-1"><BsGithub /></span>   Github
                    </li>
                        </Link>
                  
                </ul>
            </ul>
        </div>
    )
}

export default Sidebar