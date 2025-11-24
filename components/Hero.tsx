import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative bg-sweetCream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-sweetCream sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-display">
                <span className="block xl:inline">Simply Great</span>{' '}
                <span className="block text-sweetBlue xl:inline">Ice Cream</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-sans">
                We believe in small batches, huge smiles, and the best ingredients Colorado has to offer. Come taste the difference of handcrafted joy.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md shadow">
                  <button
                    onClick={onCtaClick}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-sweetBlue hover:bg-sky-500 md:py-4 md:text-lg transition-all"
                  >
                    View Flavors
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    className="w-full flex items-center justify-center px-8 py-3 border-2 border-sweetGreen text-base font-medium rounded-full text-sweetGreen bg-transparent hover:bg-sweetGreen hover:text-white md:py-4 md:text-lg transition-all"
                  >
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-sky-100 flex items-center justify-center overflow-hidden">
        {/* Abstract Ice Cream Art */}
        <div className="relative w-full h-full">
            <img 
                src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Delicious Ice Cream"
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-sweetCream opacity-50 lg:opacity-100 lg:w-20"></div>
        </div>
      </div>
    </div>
  );
};
