import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const menu = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/services">Services</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 bg-opacity-80 lg:px-16 md:px-10 px-5 fixed z-10 border-b border-gray-300 shadow-md">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 text-base shadow *:text-gray-600 *:font-bold"
          >
            {menu}
          </ul>
        </div>
        <Link href={"/"}>
          <Image
            src={"/assets/logo.svg"}
            alt="Logo of the platform"
            width={95}
            height={85}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base px-1 *:text-gray-600 *:font-bold">
         {menu}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline border border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-none text-base px-5 font-bold rounded-md">Appointment</button>
      </div>
    </div>
  );
}
