"use client"
import Link from "next/link";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const router = useRouter();

    const submitHandler = async(e: React.FormEvent) =>{
        e.preventDefault();
        try {
            const res = await axios.post(`/api/singup`, {email, password, username});
            if(res?.data?.success){
                router.push("/login")
            }
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <form onSubmit={submitHandler} className="md:w-1/3 max-w-sm">
      
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Sign in
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left flex justify-start gap-2 items-center">
          <div>Already have an account?{" "}</div>
          <Link href={"/login"}>
          <div
            className="text-red-600 hover:underline hover:underline-offset-4"
          >
            Login
          </div>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Signin;