'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../../ui/button'
import SearchInput from './search-input'
import { ToggleMode } from './toggle'
import { Ghost, Menu, Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="font-bold text-2xl">
                                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                                    Byte
                                </span>
                                <span className="text-foreground">Code</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/Articles" className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80">Articles</Link>
                        <Link href="/Tutorial" className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80">Tutorial</Link>
                        <Link href="/About" className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80">About</Link>
                        <Link href="/Dashboard" className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80">Dashboard</Link>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        <SearchInput />
                        <ToggleMode />

                        {/* user sction */}
                        <SignedIn>
                            <UserButton></UserButton>
                        </SignedIn>
                        <SignedOut>
                            <div className="hidden md:flex items-center gap-2">
                                <SignInButton><Button>Login</Button></SignInButton>
                                <SignUpButton><Button>Signup</Button></SignUpButton>
                            </div>
                        </SignedOut>


                        {/* Hamburger for Mobile */}
                        {/* <button
                            className="md:hidden text-foreground"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button> */}

                        {/* Mobile Button */}
                        <Button variant={'ghost'} size={'icon'} className="md:hidden text-muted-foreground hover:text-foreground/80"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {
                                mobileMenuOpen ? (<X className='h-5 w-5' />) : (<Menu className='h-5 w-5' />)
                            }
                        </Button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-4 border-t">
                        {/* Search Bar (Mobile) */}
                        <div className="px-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search articles..."
                                    className="pl-10 w-full focus-visible:ring-1"
                                />
                            </div>
                        </div>

                        {/* Mobile Navigation Links */}
                        <div className="space-y-2 px-4">
                            <Link
                                href="/articles"
                                className="block px-3 py-2 text-base font-medium text-foreground"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Articles
                            </Link>
                            <Link
                                href="/tutorials"
                                className="block px-3 py-2 text-base font-medium text-foreground"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Tutorials
                            </Link>
                            <Link
                                href="/about"
                                className="block px-3 py-2 text-base font-medium text-foreground"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/dashboard"
                                className="block px-3 py-2 text-base font-medium text-foreground"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Dashboard
                            </Link>
                        </div>

                        {/* Mobile Auth Buttons */}
                        {/* <SignedOut>
                            <div className="px-4 flex flex-col gap-2">
                                <SignInButton>
                                    <Button variant="outline" className="w-full">
                                        Login
                                    </Button>
                                </SignInButton>
                                <SignUpButton>
                                    <Button className="w-full">Sign up</Button>
                                </SignUpButton>
                            </div>
                        </SignedOut> */}
                    </div>
                )}


            </div>
        </nav>
    )
}

export default Navbar
