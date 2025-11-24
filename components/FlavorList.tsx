import React from 'react';
import { STAPLE_FLAVORS } from '../constants';
import { Leaf, Award } from 'lucide-react';

export const FlavorList: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-base text-sweetGreen font-bold tracking-wide uppercase font-display">Our Staples</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-display">
          Always Churning
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto font-sans">
          These favorites are available every day at all of our shops. We also spin new rotating flavors daily!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {STAPLE_FLAVORS.map((flavor) => (
          <div key={flavor.id} className="flex flex-col bg-sweetCream rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
            <div className="h-48 w-full overflow-hidden relative">
              <img
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                src={flavor.imageUrl}
                alt={flavor.name}
              />
              <div className="absolute top-2 right-2 flex gap-1">
                {flavor.isGlutenFree && (
                  <span className="bg-white/90 text-sweetGreen p-1 rounded-full shadow-sm" title="Gluten Free">
                    <Leaf size={16} />
                  </span>
                )}
                {flavor.category === 'Staple' && (
                   <span className="bg-white/90 text-sweetBlue p-1 rounded-full shadow-sm" title="Staple Flavor">
                     <Award size={16} />
                   </span>
                )}
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 font-display mb-2">{flavor.name}</h3>
                <p className="text-gray-600 font-sans">{flavor.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
