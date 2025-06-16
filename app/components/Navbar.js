import React from 'react'
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between p-4 bg-gray-900 shadow-md rounded-lg mx-4 mt-4">
                <div className="flex items-center space-x-6">
                    <a href="/" className="text-white text-2xl font-bold font-inter rounded-md px-3 py-1 hover:bg-gray-700 transition duration-300">
                        My App
                    </a>
                    <div className="hidden md:flex space-x-4">
                        <SignedIn mode="modal">
                            <Link
                                href="/dashboard"
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 hover:bg-gray-700"
                            >
                                Home
                            </Link>
                        </SignedIn>
                        <SignedIn>
                            <Link
                                href="/dashboard"
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 hover:bg-gray-700"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="/dashboard"
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 hover:bg-gray-700"
                            >
                                Settings
                            </Link>
                        </SignedIn>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <SignedIn>
                        <div className="rounded-full overflow-hidden border-2 border-transparent hover:border-blue-500 transition duration-300">
                            <UserButton />
                        </div>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                            >
                                Sign In
                            </button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                            >
                                Sign Up
                            </button>
                        </SignUpButton>
                    </SignedOut>
                </div>
            </nav></div>
    )
}

export default Navbar