"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

export default function SocialLogin() {
  const router = useRouter();
  const handleSocialLogin = async (socialName) => {
    // console.log(socialName);

    const loginResult = await signIn(socialName, { redirect: false });
    if (loginResult.ok) {
      router.push("/");
      toast.success(`Login Successful by ${socialName}`, {
        position: "top-center",
      });
    } else {
      toast.error("Login failed!");
    }
  };

  return (
    <div className="flex justify-center gap-8">
      <p
        onClick={() => handleSocialLogin("google")}
        className="cursor-pointer bg-slate-200 rounded-full p-3"
      >
        <FaGoogle type="button" />
      </p>
      <p
        onClick={() => handleSocialLogin("github")}
        className="cursor-pointer bg-slate-200 rounded-full p-3"
      >
        <FaGithub type="button" />
      </p>
    </div>
  );
}
