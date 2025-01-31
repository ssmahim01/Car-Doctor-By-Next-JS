"use client"
import Link from "next/link";
import { registerUser } from "../actions/auth/registerUser";

export default function RegisterForm() {
    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

       await registerUser({name, email, password});
    };

      return (
        <form onSubmit={handleRegister} className="w-full max-w-lg space-y-8">
          <label className="form-control w-full">
            <div className="label w-full">
              <span className="label-text  font-bold">Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="name"
            />
          </label>
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
            Register
          </button>
          <p className="text-center">Or Sign In with</p>
          <p className="text-center">
            Don't Have an account?{" "}
            <Link href="/login" className="text-orange-500 font-bold">
              Login
            </Link>
          </p>
        </form>
      );
}