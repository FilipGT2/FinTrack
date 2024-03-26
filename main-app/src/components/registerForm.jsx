import React from "react";
import logo from "../logo.svg";


const Register = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
      <img src={logo} alt="FinTrack logo"/>     
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-center pb-12 ">
          <label className="mr-1 text-4xl text-primary-darkBlue font-bold">Register</label>
        </div>
       <form>
      <div className="space-y-6">
        <div className="border-b border-gray-900/10 pb-3 ">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Create your profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Try not to bust while filling out this form
          </p>
        </div>

        <div className="border-b border-gray-900/10">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-roseRed sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-roseRed sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-roseRed sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            
          </div>
        </div>

        <div class="mb-6">
        <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        <input type="password" id="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-darkBlue sm:text-sm sm:leading-6" placeholder="•••••••••" required />
    </div> 
    <div class="mb-6">
        <label for="confirm_password" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
        <input type="password" id="confirm_password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-darkBlue sm:text-sm sm:leading-6" placeholder="•••••••••" required />
    </div> 
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-primary-roseRed px-3 py-2 text-sm font-semibold transition duration-400 hover:scale-125  text-white shadow-sm hover:bg-primary-darkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-roseRed"
        >
          Next
        </button>
      </div>
    </form>
    </div>
    </section>
  );
};

export default Register;
