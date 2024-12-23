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
                <div id="search-field" className="flex-none justify-center gap-2 w-full">
                    <NavbarSearch />
                </div>
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="You"
                            src="https://placecats.com/200/200" />
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
