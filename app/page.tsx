'use client';

import Image from 'next/image'
import Link from 'next/link'
import SpotlightButton from './components/SpotlightButton'

const HomePage = () => {
  return (
    <main className="min-h-screen bg-background text-color">
      {/* Hero Section */}
      <section className="text-foreground">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold leading-tight text-primary">
                Recent Transactions
              </h1>
              <p className="text-xl text-dark-grey">
                Easily track your latest expenses and purchases in one place. Stay on top of your spending with real-time updates.
              </p>
              <div className="min-h-[100px] md:min-h-[120px] flex items-center">
                <Link href="/signup" className="block">
                  <SpotlightButton label="Start Managing" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/dude.png"
                alt="Finance App Overview"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-bg-styles-3">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Smart Tools for Financial Control
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-medium-purple/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medium-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* icon */}
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-tb-secundary">Transaction History</h3>
              <p className="text-dark-grey">
                Access a clear summary of your most recent transactions to keep your finances in check.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-dodger-blue/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-dodger-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* icon */}
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-tb-secundary">Smart Insights</h3>
              <p className="text-dark-grey">
                Get automatic suggestions and stats based on your spending habits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-sandy-brown/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sandy-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* icon */}
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-tb-secundary">Expense Monitoring</h3>
              <p className="text-dark-grey">
                Track how much you’re spending daily, weekly, or monthly — all in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
