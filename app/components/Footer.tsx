'use client'

import Link from 'next/link'
import { Home, History, User, Zap } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useUser } from '@clerk/nextjs'

const Footer = () => {
    const pathname = usePathname();
    const { isSignedIn } = useUser();

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <>
            <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-[var(--accessible-components-dark-grey)]/20 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-around items-center py-4">
                        <Link 
                            href="/" 
                            className={`flex flex-col items-center gap-1 transition-colors ${
                                isActive('/') ? 'text-[var(--primary)]' : 'text-[var(--accessible-components-dark-grey)]'
                            }`}
                        >
                            <Home className="w-6 h-6" />
                            <span className="text-xs">Home</span>
                        </Link>

                        {isSignedIn && (
                            <Link 
                                href="/transactions" 
                                className={`flex flex-col items-center gap-1 transition-colors ${
                                    isActive('/transactions') ? 'text-[var(--primary)]' : 'text-[var(--accessible-components-dark-grey)]'
                                }`}
                            >
                                <History className="w-6 h-6" />
                                <span className="text-xs">Transactions</span>
                            </Link>
                        )}

                        <Link 
                            href="/about" 
                            className={`flex flex-col items-center gap-1 transition-colors ${
                                isActive('/about') ? 'text-[var(--primary)]' : 'text-[var(--accessible-components-dark-grey)]'
                            }`}
                        >
                            <User className="w-6 h-6" />
                            <span className="text-xs">About</span>
                        </Link>
                    </div>
                </div>
            </footer>

            <footer className="hidden md:block border-t border-[var(--accessible-components-dark-grey)]/20 backdrop-blur-sm bg-black text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-4" role="region" aria-label="Recent Transactions">
                            <div className="flex items-center gap-2">
                                <div className="p-2 rounded-lg bg-[var(--primary)]/10" aria-hidden="true">
                                    <Zap className="w-5 h-5 text-[var(--primary)]" />
                                </div>
                                <h3 className="text-xl font-semibold">Recent Transactions</h3>
                            </div>
                            <p className="text-[var(--accessible-components-dark-grey)]">
                                Track and manage your financial transactions with ease.
                            </p>
                        </div>

                        <nav className="space-y-4" aria-label="Quick Links">
                            <h3 className="text-xl font-semibold">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-[var(--accessible-components-dark-grey)] hover:text-[var(--primary)] transition-colors" aria-label="Go to Home page">Home</Link></li>
                                {isSignedIn && (
                                    <li><Link href="/transactions" className="text-[var(--accessible-components-dark-grey)] hover:text-[var(--primary)] transition-colors" aria-label="View your transactions">Transactions</Link></li>
                                )}
                                <li><Link href="/about" className="text-[var(--accessible-components-dark-grey)] hover:text-[var(--primary)] transition-colors" aria-label="Learn more about our platform">About</Link></li>
                            </ul>
                        </nav>

                        <div className="space-y-4" role="region" aria-label="Connect with us">
                            <h3 className="text-xl font-semibold">Connect</h3>
                            <ul className="space-y-2 text-[var(--accessible-components-dark-grey)]">
                                <li>
                                    <a 
                                        href="https://master--cv3d.netlify.app/"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="hover:text-[var(--primary)] transition-colors"
                                        aria-label="Visit my portfolio website (opens in new tab)"
                                    >
                                        Portfolio: cv3d.netlify.app
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://github.com/pellegabriel" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="hover:text-[var(--primary)] transition-colors"
                                        aria-label="Visit my GitHub profile (opens in new tab)"
                                    >
                                        GitHub: @pellegabriel
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://linkedin.com/in/gabrielpelle" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="hover:text-[var(--primary)] transition-colors"
                                        aria-label="Visit my LinkedIn profile (opens in new tab)"
                                    >
                                        LinkedIn: linkedin.com/in/gabrielpelle
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="mailto:pellegabriel@hotmail.com"
                                        className="hover:text-[var(--primary)] transition-colors"
                                        aria-label="Send me an email"
                                    >
                                        Email: pellegabriel@hotmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-[var(--accessible-components-dark-grey)]/20 text-center text-[var(--accessible-components-dark-grey)]">
                        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;