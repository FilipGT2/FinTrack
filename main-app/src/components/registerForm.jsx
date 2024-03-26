import React from "react";
import logo from "../logo.svg";


const Register = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
      <img src={logo} alt="Login"/>     
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-center">
          <label className="mr-1 text-4xl text-primary-darkBlue font-bold">Sign In</label>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-primary-darkBlue">
            Using Username and Password
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="User Name"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <button
            className="text-primary-roseRed hover:text-primary-darkBlue hover:underline hover:underline-offset-4 bg-transparent border-none p-0 m-0"
            onClick={() => {  }} //Logic for forget password
    >
  Forgot Password?
</button>


        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-primary-roseRed hover:bg-primary-darkBlue px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          > 
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Register;
