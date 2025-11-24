import React from 'react';
import { LOCATIONS } from '../constants';
import { MapPin, Phone, Clock } from 'lucide-react';

export const Locations: React.FC = () => {
  return (
    <div className="bg-sky-50 py-16 px-4 sm:px-6 lg:px-8 cow-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 bg-white/80 backdrop-blur-sm p-8 rounded-3xl inline-block w-full">
            <h2 className="text-3xl font-extrabold text-sweetBlue sm:text-4xl font-display">
            Find Your Moo
            </h2>
            <p className="mt-4 text-xl text-gray-600 font-sans">
            Visit us at one of our lovely neighborhood shops.
            </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="bg-white rounded-3xl shadow-lg p-8 relative overflow-hidden border-t-8 border-sweetGreen">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">{loc.name}</h3>
              <div className="space-y-4 text-gray-600 font-sans">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-sweetBlue mr-3 flex-shrink-0" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-sweetBlue mr-3 flex-shrink-0" />
                  <span>{loc.phone}</span>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-sweetBlue mr-3 flex-shrink-0" />
                  <span>{loc.hours}</span>
                </div>
              </div>
              <div className="mt-8">
                <button className="w-full bg-sweetCream text-sweetDark font-bold py-2 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
