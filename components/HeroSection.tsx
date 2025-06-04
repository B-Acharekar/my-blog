'use client'

import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative px-6 lg:px-20 py-12 lg:py-24 bg-transparent">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
            Learn development<br />with great articles.
          </h1>
          <p className="text-lg text-gray-300 max-w-md mx-auto lg:mx-0">
            Find the latest of my writing here.
          </p>
          <form className="relative w-full max-w-xl" role='search'>
            {/* Search Icon */}
            <button
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-lime-500"
              title="Search"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M3.75 11.34C1.65 9.23 1.65 5.8 3.75 3.7C4.77 2.68 6.12 2.11 7.56 2.11C8.99 2.11 10.35 2.68 11.36 3.7C13.46 5.8 13.46 9.23 11.36 11.34C9.26 13.44 5.85 13.44 3.75 11.34ZM18 16.45L13.6 12.03C15.8 9.07 15.59 4.85 12.9 2.15C10.05 -0.71 5.07 -0.72 2.21 2.15C-0.74 5.11 -0.74 9.93 2.21 12.89C3.69 14.37 5.62 15.1 7.56 15.1C9.15 15.1 10.72 14.58 12.06 13.58L16.46 18L18 16.45Z"
                />
              </svg>
            </button>

            {/* Input */}
            <input
              type="search"
              placeholder="Search posts"
              className="w-full rounded-full border border-gray-300 bg-white py-3 pl-12 pr-24 text-lg font-medium focus:border-blue-500 focus:outline-none dark:bg-slate-900 dark:text-white dark:border-gray-700 dark:focus:border-blue-400"
              name="q"
            />

            {/* Toggle + Count (optional) */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 text-slate-500 text-sm">
              <input type="checkbox" title="Show all posts" aria-label="Show all posts" className="accent-blue-500" />
              <span>203</span>
            </div>
          </form>

        </div>

        {/* Right Image Section */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_918,q_auto,f_auto/kentcdodds.com/illustrations/skis_z5lkc3"
            alt="Illustration of skis"
            className="w-full max-w-[380px] object-contain animate-fade-in drop-shadow-xl transition-transform duration-500 ease-in-out hover:scale-105"
            style={{ aspectRatio: '0.71' }}
            crossOrigin="anonymous"
          />
        </div>

      </div>

    </section>
  )
}

export default HeroSection
