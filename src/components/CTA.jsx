import React from "react";

const CTA = () => {
  return (
    <section className="w-[92%] sm:w-[62.5%] md:w-[80%] lg:w-[60%] text-center ">
      <div className="flex flex-col items-center justify-center gap-6 md:gap-10 text-secondary">
        <h3 className="text-[25px] md:text-[32px] md:leading-[50px]  font-extrabold lg:text-[38px] lg:leading-12 md:px-40 lg:px-8">
          You are using free Lite Version of Appvilla
        </h3>
        <p className="text-[15px] lg:px-32">
          Please, purchase full version of the template to get all pages,
          features and commercial license.
        </p>
        <button className="flex items-center justify-center w-[180px] px-6 py-2.5 text-sm rounded-md group shadow-[0px_3px_5px_#00000017] bg-secondary text-main hover:bg-primary hover:text-secondary">
          Purchase Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
