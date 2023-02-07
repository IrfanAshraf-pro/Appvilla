import React from "react";
import Card from "../components/Card";

const Features = () => {
  const carItems=[
    {name:'Push To Deploy',icon:'cloud'},
    {name:'SSL Certificates',icon:'cloud'},
    {name:'Simple Queues',icon:'cloud'},
    {name:'Advanced Query',icon:'cloud'},
    {name:'Powerful Api',icon:'cloud'},
    {name:'Database Backups',icon:'cloud'},

  ]
  return (
    <section className="w-[90%] sm:w-[60%] md:w-[90%] flex flex-col items-center justify-center pt-12">
      <div className="flex flex-col items-center justify-center gap-2 p-2 text-center sm:w-9/12 md:w-6/12 ">
        <h2 className="text-sm lg:text-md text-main">FEATURES</h2>
        <h1 className="text-xl font-bold lg:text-4xl">
          Your Experience Gets Better And Better Over Time.
        </h1>
        <p className="pt-4 text-sm text-paragraph lg:text-md">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      {/* Card container */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
       {carItems.map((item,index)=>(
        <Card item={item} key={index}/>
       ))}
      </div>
    </section>
  );
};

export default Features;
