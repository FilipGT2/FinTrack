import React from "react";
import logo from "../logo.svg";
import ProgressHeader from "./progressHeader.jsx";
import { func } from "prop-types";


const ProfileSetup = () => {
  return (
    <div>
      <ProgressHeader />  
      <form className="space-y-6" action="#" method="POST">
      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>
          <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                  Website
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                    http://
                  </span>
                  <input
                    type="text"
                    name="company-website"
                    id="company-website"
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-primary-darkBlue focus:ring-primary-darkBlue sm:text-sm"
                    placeholder="www.example.com"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                About
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-darkBlue focus:ring-primary-darkBlue sm:text-sm"
                  placeholder="you@example.com"
                  defaultValue={''}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Photo</label>
              <div className="mt-1 flex items-center space-x-5">
                <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                  <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button
                  type="button"
                  className="rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-darkBlue focus:ring-offset-2"
                >
                  Change
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Cover photo</label>
              <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-medium text-primary-roseRed focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-darkBlue focus-within:ring-offset-2 hover:text-primary-darkBlue"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-primary-darkBlue focus:outline-none focus:ring-primary-darkBlue sm:text-sm"
                >
                  <option>Sweden</option>
                  <option>United States</option>
                  <option>Macedonia</option>
                </select>
              </div>

              <div className="col-span-6">
                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                  Street address
                </label>
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-darkBlue focus:ring-primary-darkBlue sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-darkBlue focus:ring-primary-darkBlue sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  State / Province
                </label>
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-darkBlue focus:ring-primary-darkBlue sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                  ZIP / Postal code
                </label>
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-darkBlue focus:ring-primary-darkBlue sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
            <p className="mt-1 text-sm text-gray-500">Decide which communications you'd like to receive and how.</p>
          </div>
          <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
            <fieldset>
              <legend className="sr-only">By Email</legend>
              <div className="text-base font-medium text-gray-900" aria-hidden="true">
                By Email
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="Portfolio Updates"
                      name="Portfolio Updates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary-roseRed focus:ring-primary-darkBlue"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="Portfolio Updates" className="font-medium text-gray-700">
                      Portfolio Updates
                    </label>
                    <p className="text-gray-500">Get notified when there are significant changes in your portfolio value.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="Market Trends"
                      name="Market Trends"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary-roseRed focus:ring-primary-darkBlue"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="Market Trends" className="font-medium text-gray-700">
                      Market Trends
                    </label>
                    <p className="text-gray-500">Stay informed about major market movements and trends.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="Price Alerts"
                      name="Price Alerts"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary-roseRed focus:ring-primary-darkBlue"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="Price Alerts" className="font-medium text-gray-700">
                      Price Alerts
                    </label>
                    <p className="text-gray-500">Get notified when a stock reaches a certain price target or falls below a stop-loss level.</p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="contents text-base font-medium text-gray-900">Push Notifications</legend>
              <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-primary-roseRed focus:ring-primary-darkBlue"
                  />
                  <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                    Everything
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-primary-roseRed focus:ring-primary-darkBlue"
                  />
                  <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                    Same as email
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-primary-roseRed focus:ring-primary-darkBlue"
                  />
                  <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-3 pb-5">
        <button
          type="button"
          className="rounded-md bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-darkBlue focus:ring-offset-2"
        >
          Go Back
        </button>
        <button
          type="submit"
          className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-primary-roseRed py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-darkBlue hover:scale-125 transition duration-400 focus:outline-none focus:ring-2 focus:ring-primary-darkBlue focus:ring-offset-2"
        >
          Save
        </button>
      </div>
    </form>
    </div>
  )
}

export default ProfileSetup;
