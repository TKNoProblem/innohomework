import React from 'react';
import PricingCard, { type PricingCardProps } from './PricingCard';

const plans: PricingCardProps[] = [
  {
    plan: 'Standard',
    price: '$100',
    features: [
      '50,000 Requests',
      '4 contributors',
      'Up to 3 GB storage space',
    ],
    isFeatured: false,
  },
  {
    plan: 'Pro',
    price: '$200',
    features: [
      '100,000 Requests',
      '7 contributors',
      'Up to 6 GB storage space',
    ],
    isFeatured: true,
  },
  {
    plan: 'Expert',
    price: '$500',
    features: [
      '200,000 Requests',
      '11 contributors',
      'Up to 10 GB storage space',
    ],
    isFeatured: false,
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 py-12 px-2">
      <h2 className="mb-10 text-3xl font-bold text-white text-center">Pricing</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-5xl">
        {plans.map((plan) => (
          <div
            key={plan.plan}
            className={`flex-1 ${plan.isFeatured ? 'h-[500px] sm:mb-4' : 'h-[450px]'} flex w-[20rem]`}
          >
            <PricingCard
              {...plan}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection; 