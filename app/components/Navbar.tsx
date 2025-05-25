'use client'
import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';
import { HomeIcon, Zap, Info } from 'lucide-react'
import Link from 'next/link'
import SpotlightButton from './SpotlightButton'

const Navbar = () => {
    const { isSignedIn } = useUser();
    return (
        <header className="fixed top-0 left-0 right-0 border-b border-[var(--accessible-components-dark-grey)]/20 backdrop-blur-sm bg-black z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-[var(--primary)]/10">
                        <Zap className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                        <span className="font-semibold text-white">Tenpo Challenge</span>
                </Link>
                <nav className='flex items-center gap-5'>
                    {isSignedIn ? (
                        <>
                            <Link
                                href='/'
                                className='hidden md:flex items-center gap-1.5 text-sm text-white hover:text-[var(--primary)] transition-colors'
                            >
                                <HomeIcon size={16}/>
                                <span>
                                    Home
                                </span>
                            </Link>
                            <Link
                                href='/about'
                                className='hidden md:flex items-center gap-1.5 text-sm text-white hover:text-[var(--primary)] transition-colors'
                            >
                                <Info size={16}/>
                                <span>
                                    About Us
                                </span>
                            </Link>
                            <Link
                                href='/transactions' className='mb-2'
                            >
                                <SpotlightButton label="Get Started" size="sm" />
                            </Link>
                            <UserButton/>
                        </>
                    ) : (
                        <>
                    <Link
                                href='/transactions' className='mb-2'
                            >
                                <SpotlightButton label="Get Started" size="sm" />
                            </Link>
                        </>
                    )
                    }
                </nav>
            </div>
        </header>
    )
};

export default Navbar
