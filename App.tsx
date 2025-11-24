import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { FlavorList } from './components/FlavorList';
import { Locations } from './components/Locations';
import { AiFlavorLab } from './components/AiFlavorLab';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero onCtaClick={() => setCurrentView('flavors')} />
            <FlavorList />
            <AiFlavorLab />
            <Locations />
          </>
        );
      case 'flavors':
        return (
          <>
            <FlavorList />
            <AiFlavorLab />
          </>
        );
      case 'locations':
        return <Locations />;
      case 'lab':
        return <AiFlavorLab />;
      default:
        return (
            <>
            <Hero onCtaClick={() => setCurrentView('flavors')} />
            <FlavorList />
            </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-sweetDark">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
