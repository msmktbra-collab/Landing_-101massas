import React from 'react';

const TopBanner: React.FC = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 text-white py-3 shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base font-semibold tracking-wide">
          Promoção acaba hoje: <span className="font-bold underline decoration-2">{getCurrentDate()}</span>
        </p>
      </div>
    </div>
  );
};

export default TopBanner;
