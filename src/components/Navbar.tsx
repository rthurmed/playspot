import Link from "next/link";
import "./Navbar.css";
import { NavbarSearch } from "./NavbarSearch";

export function Navbar() {
    return (
        <div className="navbar gap-2 bg-base-100">
            <div className="">
                <Link className="btn btn-ghost text-xl" href="/">
                    PlaySpot
                </Link>
            </div>
            <div className="flex-grow">
                <div id="search-field" className="hidden md:flex flex-none justify-center gap-2 w-full">
                    <NavbarSearch />
                </div>
            </div>
            <div id="search-button">
                <Link
                    className="btn btn-ghost md:hidden"
                    href="/search"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="You"
                            src="https://placecats.com/200/200"
                            className="bg-stone-800"
                        />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    )
}
