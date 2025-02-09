"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const {data: session, status} = useSession();
  console.log(session?.user?.email);
  const appointment = (
    <>
      <Link href={"/my-bookings"}>
      <button className="btn btn-outline border border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-none text-base w-full font-bold rounded-md">
        Appointment
      </button>
      </Link>
    </>
  );

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
        <Link href="/my-bookings">My Bookings</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 bg-opacity-80 lg:px-16 md:px-10 px-5 fixed z-10 border-b border-gray-200 shadow-sm">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 text-base shadow *:text-gray-600 *:font-bold"
          >
            {menu}
            <div className="md:hidden block mt-3 w-full">{appointment}</div>
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
        {status !== 'authenticated' ? (
          <div className="flex gap-3 items-center mr-4">
          <Link href="/login">
            <button className="btn bg-teal-500 border-none text-white text-base btn-md px-4 font-bold rounded-md">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="btn text-white bg-violet-500 border-none text-base btn-md px-5 font-bold rounded-md">
              Register
            </button>
          </Link>
        </div>
        ) : (
          <>
          <Image className="rounded-full border-4 border-purple-500 mr-3" src={session?.user?.image} alt="Profile Image" width={50} height={50} />
          <button onClick={() => signOut()} className="btn text-white bg-rose-500 border-none btn-md px-5 font-bold flex gap-2 mr-4 items-center rounded-md">
              <FaSignOutAlt className="text-xl" /> <span className="text-base">Log Out</span>
            </button>
          </>
        )}

        <div className="md:block hidden">{appointment}</div>
      </div>
    </div>
  );
}
