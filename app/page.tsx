'use client';

import Link from 'next/link'
import SpotlightButton from './components/SpotlightButton'
import ThreeScene from './components/ThreeScene';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-background text-color">
      <section className="text-foreground">
        <div className="container mx-auto px-4 py-12 md:py-20 mt-8 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold leading-tight text-primary">
                Recent Transactions
              </h1>
              <p className="text-lg text-zinc-400">
                Easily track your latest expenses and purchases in one place. Stay on top of your spending with real-time updates.
              </p>
              <div className="min-h-[100px] md:min-h-[120px] flex items-center">
                <Link href="/transactions" className="block">
                  <SpotlightButton label="Start Managing" />
                </Link>
              </div>
            </div>
            <div className="relative w-full max-w-[400px] md:max-w-[500px] aspect-square mx-auto">
            <ThreeScene />
          </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
