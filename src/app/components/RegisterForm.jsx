"use client"
import Link from "next/link";
import { registerUser } from "../actions/auth/registerUser";
import SocialLogin from "./SocialLogin";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

      const res = await registerUser({name, email, password});
       if(res.acknowledged){
         router.push("/login");
       }
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
          <p className="text-center">Or Log In with</p>
          <SocialLogin />
          <p className="text-center">
            Don't Have an account?{" "}
            <Link href="/login" className="text-orange-500 font-bold">
              Login
            </Link>
          </p>
        </form>
      );
}