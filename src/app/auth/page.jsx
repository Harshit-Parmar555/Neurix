import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function AuthPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-white font-inter text-2xl font-semibold mt-4">Sign in</h2>
      </div>
      <div className="bg-[#191919] rounded-xl shadow-lg w-full max-w-md p-12">
        <form className="space-y-4 flex flex-col gap-2">
          <div className="">
            
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-md bg-[#131313] font-inter text-white border border-zinc-700 placeholder-gray-500 focus:outline-none focus:border-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-white font-inter text-black font-medium hover:bg-gray-300 transition"
          >
            Continue
          </button>

          <div className="flex items-center gap-2 text-zinc-500">
            <div className="h-px flex-1 bg-zinc-600" />
            <span className="text-xs">OR</span>
            <div className="h-px flex-1 bg-zinc-600" />
          </div>

          <button className="flex items-center justify-center w-full font-inter py-2 bg-zinc-950 border border-zinc-700 text-white rounded-md hover:bg-zinc-700 transition">
            <FcGoogle className="mr-2 text-lg" />
            Continue with Google
          </button>

          <button className="flex items-center justify-center w-full font-inter py-2 bg-zinc-950 border border-zinc-700 text-white rounded-md hover:bg-zinc-700 transition">
            <FaGithub className="mr-2 text-lg" />
            Continue with GitHub
          </button>

          <p className="text-sm text-center text-zinc-500 font-inter">
            Don’t have an account?{" "}
            <a href="#" className="text-purple-400 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>

      <footer className="absolute bottom-4 text-xs text-zinc-600 text-center w-full">
        Terms of Service and Privacy Policy
      </footer>
    </div>
  );
}
