'use client'
import React from 'react'
import Link from 'next/link';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { useState } from 'react';
import Image from 'next/image';
//Components
import ComponentModal from './modals/loginModal';

// Last edited by Jelly
const NavBar = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isDropDownOpen, setIsDropDownopen] = useState(false)

  return (
    <>
      <header className="sticky top-4 bg-neutral-900 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
        <nav
        className="relative max-w-[66rem] w-full bg-neutral-800 rounded-[28px] py-3 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto"
        aria-label="Global"
        >
          <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="/"
              aria-label="Preline"
              >
              <Image
                src="https://cdn.discordapp.com/attachments/1153100871178125343/1240882294806544475/Screenshot_2024-05-16_212200-removebg-preview.png?ex=66482d31&is=6646dbb1&hm=0033d810e0c091d83d8ef2079764bc66476562d051d43f99cb1bb94db9453e83&"
                alt="Logo"
                width={50} // Adjust the width as needed
                height={50} // Adjust the height as needed
                />
              </Link>
              {/* End Logo */}
              <div className="md:hidden">
              <button
                  type="button"
                  className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-collapse="#navbar-collapse"
                  aria-controls="navbar-collapse"
                  aria-label="Toggle navigation"
              >
                  <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  >
                  <line x1={3} x2={21} y1={6} y2={6} />
                  <line x1={3} x2={21} y1={12} y2={12} />
                  <line x1={3} x2={21} y1={18} y2={18} />
                  </svg>
                  <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                  </svg>
              </button>
              </div>
          </div>
          {/* Collapse */}
          <div
              id="navbar-collapse"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
              <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
              <Link
                  className="text-sm text-white md:py-4 focus:outline-none focus:text-neutral-300"
                  href="/"
              >
                  Нүүр
              </Link>
              <Link
                  className="text-sm text-white md:py-4 focus:outline-none focus:text-neutral-300"
                  href="/dashboard"
              >
                  Dashboard
              </Link>
              
              <div className="[--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:py-4">
              <button
                type="button"
                className="flex items-center w-full text-sm text-white focus:outline-none focus:text-neutral-300"
                onClick={
                  () => setIsDropDownopen(!isDropDownOpen)
                }
              >
                Хайх
                <svg
                  className="flex-shrink-0 ms-1 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {isDropDownOpen && (
                <div className="transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] opacity-100 md:w-48 z-10 bg-neutral-800 md:shadow-md rounded-lg p-2 mt-4 absolute top-full text-center">
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white font-medium focus:outline-none focus:text-neutral-300"
                    href="/lostitems"
                    onClick={() => setIsDropDownopen(false)}
                  >
                    Алдсан
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white font-medium focus:outline-none focus:text-neutral-300"
                    href="/founditems"
                    onClick={() => setIsDropDownopen(false)}
                  >
                    Олсон
                  </Link>
                </div>
              )}
            </div>

              <div>
                  <div
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-white font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                  >
                    <SignedOut>
                      <div>
                        <button onClick={() => {
                          console.log("invoked")
                          setModalOpen(true)
                        }} className="font-semibold text-black cursor-pointer hover:text-black">Sign in</button>
                      </div>
                    </SignedOut>
                    <SignedIn>
                      <UserButton userProfileMode='modal' showName={true} />
                    </SignedIn>
                  </div>
              </div>
              </div>
          </div>
          {/* End Collapse */}
          </nav>
      </header>

      {/* Modal section */}
      {isModalOpen && (
        <ComponentModal onClose={() => setModalOpen(false)} />
      )}
    </>

  )
}

export default NavBar