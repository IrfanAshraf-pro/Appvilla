import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
    const featureItems=[
        {name:'Hobby',description:'All the basics for starting a new business',price:12,cta:'Buy Hobby'},
        {name:'Freelancer',description:'All the basics for starting a new business',price:24,cta:'Buy Freelancer'},
        {name:'StartUp',description:'All the basics for starting a new business',price:32,cta:'Buy StartUp'},
        {name:'Enterprise',description:'All the basics for starting a new business',price:48,cta:'Buy Enterprise'},

      ]
  return (
    <section className="w-[90%] sm:w-[60%] md:w-[90%] flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center gap-2 p-2 text-center sm:w-9/12 md:w-7/12 ">
        <h2 className="text-sm lg:text-md text-main">PRICING</h2>
        <h1 className="text-xl font-bold lg:text-4xl">Pricing Plan</h1>
        <p className="pt-4 text-sm text-paragraph lg:text-md">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 px-4 mt-16 md:w-[90%] lg:w-full lg:px-3 md:grid-cols-2 lg:grid-cols-4">
       {featureItems.map((item,index)=>(
        <PricingCard item={item} key={index}/>
       ))}
      </div>
    </section>
  );
};

export default Pricing;
