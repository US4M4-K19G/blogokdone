'use client' // This makes the component a client component

import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the menu when clicked
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex items-center justify-between p-5 md:flex-row">
                    {/* Logo with custom width of 90% */}
                    <Link href={''} className="flex title-font font-medium items-center text-gray-900 md:mb-0 w-full md:w-[90%]">
                        <span className="ml-3 text-xl">M Usama</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="md:flex flex-wrap items-center text-base justify-end hidden md:flex w-[50%]">
                        <Link href={''} className="mr-10 hover:text-gray-900">Home</Link>
                        <Link href={''} className="mr-10 hover:text-gray-900">Blog</Link>
                        <Link href={''} className="mr-2 hover:text-gray-900">About</Link>
                    </nav>

                    {/* Hamburger Menu for Mobile */}
                    <div className="md:hidden flex items-center justify-end w-[10%]">
                        <button onClick={toggleMenu} className="text-gray-900 focus:outline-none w-8 h-8">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation (Hidden by default, displayed when hamburger is clicked) */}
                {isMenuOpen && (
                    <nav className="md:hidden flex flex-col p-5">
                        <Link href={''} className="mb-4 hover:text-gray-900">Home</Link>
                        <Link href={''} className="mb-4 hover:text-gray-900">Blog</Link>
                        <Link href={''} className="mb-4 hover:text-gray-900">About</Link>
                    </nav>
                )}
            </header>
        </div>
    )
}

export default Header;
