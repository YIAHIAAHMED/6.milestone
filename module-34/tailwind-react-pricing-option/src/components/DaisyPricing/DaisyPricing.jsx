import React from 'react';

const DaisyPricing = ({pricing}) => {
    const {name, price, duration, features} = pricing;
    return (
        <div class="card w-96 bg-base-100 shadow-sm">
            <div class="card-body">
                <span class="badge badge-xs badge-warning">Most Popular</span>
                <div class="flex justify-between">
                    <h2 class="text-3xl font-bold">{name}</h2>
                    <span class="text-xl">{price}</span>
                </div>
                <ul class="mt-6 flex flex-col gap-2 text-xs">
                    {
                        features.map((feature, index) => <li key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{feature}</span>
                    </li>)
                    }
                </ul>
                <div class="mt-6">
                    <button class="btn btn-primary btn-block">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default DaisyPricing;