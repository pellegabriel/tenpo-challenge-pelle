'use client'

import { ArrowRight, CreditCard, History, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto pt-20 md:pt-24">
            <div className="mb-12 px-4 md:px-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">About Our Platform</h1>
                <p className="text-[var(--accessible-components-dark-grey)] text-lg">
                    A modern financial management solution designed to simplify your transaction tracking and payment processing.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-black/40 p-6 rounded-lg border border-[var(--accessible-components-dark-grey)]/20">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-[var(--primary)]/10">
                            <Zap className="w-6 h-6 text-[var(--primary)]" />
                        </div>
                        <h2 className="text-xl font-semibold">Real-time Transactions</h2>
                    </div>
                    <p className="text-[var(--accessible-components-dark-grey)]">
                        Experience lightning-fast transaction processing with our real-time system. Track your payments and transfers instantly with detailed status updates.
                    </p>
                </div>

                <div className="bg-black/40 p-6 rounded-lg border border-[var(--accessible-components-dark-grey)]/20">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-[var(--primary)]/10">
                            <History className="w-6 h-6 text-[var(--primary)]" />
                        </div>
                        <h2 className="text-xl font-semibold">Transaction History</h2>
                    </div>
                    <p className="text-[var(--accessible-components-dark-grey)]">
                        Access your complete transaction history with advanced filtering and search capabilities. Keep track of all your financial activities in one place.
                    </p>
                </div>

                <div className="bg-black/40 p-6 rounded-lg border border-[var(--accessible-components-dark-grey)]/20">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-[var(--primary)]/10">
                            <CreditCard className="w-6 h-6 text-[var(--primary)]" />
                        </div>
                        <h2 className="text-xl font-semibold">Secure Payments</h2>
                    </div>
                    <p className="text-[var(--accessible-components-dark-grey)]">
                        Process payments securely with our advanced encryption technology. Your financial data is protected with industry-standard security measures.
                    </p>
                </div>

                <div className="bg-black/40 p-6 rounded-lg border border-[var(--accessible-components-dark-grey)]/20">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-[var(--primary)]/10">
                            <Shield className="w-6 h-6 text-[var(--primary)]" />
                        </div>
                        <h2 className="text-xl font-semibold">User Protection</h2>
                    </div>
                    <p className="text-[var(--accessible-components-dark-grey)]">
                        Your security is our priority. We implement robust authentication and authorization systems to ensure your account and transactions remain protected.
                    </p>
                </div>
            </div>

            <div className="bg-black/40 p-8 rounded-lg border border-[var(--accessible-components-dark-grey)]/20">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-[var(--accessible-components-dark-grey)] mb-6">
                    We're dedicated to providing a seamless and secure financial management experience. Our platform combines powerful features with an intuitive interface, making financial transactions simpler and more accessible for everyone.
                </p>
                <Link href="/transactions" className="inline-flex items-center gap-2 text-[var(--primary)] hover:opacity-80 transition-opacity">
                    <span className="font-medium">Get Started Today</span>
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    )
} 