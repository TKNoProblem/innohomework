import React from 'react';

export interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, features, isFeatured }) => {
  return (
    <div
      tabIndex={0}
      className={`flex flex-col justify-between items-center focus:z-10000 px-6 py-8 w-full max-w-sm focus:outline-none focus:ring-4 focus:ring-blue-400/70 transition-all duration-200
        ${isFeatured ? 'bg-slate-700 text-white' : 'bg-white text-slate-700'}
      `}
      aria-label={plan}
    >
      <div className="mb-6 text-center w-full">
        <h3 className={`mb-2 text-lg font-semibold tracking-wide uppercase ${isFeatured ? 'text-white' : 'text-slate-700'}`}>{plan}</h3>
        <div className={`mb-4 text-5xl font-extrabold ${isFeatured ? 'text-white' : 'text-slate-700'}`}>{price}</div>
      </div>
      <ul className="mb-8 w-full">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className={`py-3 w-full text-center font-medium ${isFeatured ? 'text-white' : 'text-slate-700'} ${idx !== features.length - 1 ? 'border-b border-gray-300' : ''}`}
          >
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2 mt-2 font-bold uppercase tracking-wide border-0 rounded-none bg-transparent ${isFeatured ? 'text-white' : 'text-slate-700'} hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-400/70 cursor-pointer`}
      >
        Subscribe
      </button>
    </div>
  );
};

export default PricingCard; 