"use client"
import Link from 'next/link';

export default function LoginForm() {    
    return (
      <form className="w-full max-w-lg space-y-8">
        <label className="form-control w-full">
          <div className="label w-full">
            <span className="label-text  font-bold">Email</span>
          </div>
          <input
            type="text"
            name="email"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label w-full">
            <span className="label-text font-bold">Password</span>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </label>
        <button className="w-full h-12 bg-orange-500 text-white font-bold">
          Sign In
        </button>
        <p className="text-center">Or Sign In with</p>
        <p className="text-center">
          Already have an account?{" "}
          <Link href="/register" className="text-orange-500 font-bold">
            Register
          </Link>
        </p>
      </form>
    );
}
