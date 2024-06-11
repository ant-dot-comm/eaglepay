import React from 'react';

import { Button } from '../components/Button';
import classNames from 'classnames';

const cta = (number, text) => {
  return (
    <div className="flex flex-col items-center cta-container p-32 rounded-large max-md:w-full md:grow">
      <p className="text-40 leading-none mb-1">{number}</p>
      <p>{text}</p>
    </div>
  );
}

const feature = (img, text) => {
  return (
    <div className="cta-container flex flex-col items-center justify-start rounded-md p-16 text-center backdrop-blur-md">
      <div className="h-80 flex items-end justify-center mb-8">
        <img alt="" src={`${process.env.PUBLIC_URL + "/images/" + img + ".png"}`} className="h-full" />
      </div>
      <p className="heading-4 md:w-3/4">{text}</p>
    </div>
  );
}

const audience = (img, title, text, bgColor) => {
  return (
    <div 
      className={classNames(
        "md:w-1/3 rounded-large max-w-[40rem] max-md:mx-auto",
        {
          "bg-emerald-50 text-white": bgColor === "emerald50",
          "bg-emerald-40 text-white": bgColor === "emerald40",
          "bg-emerald-30": bgColor === "emerald30",
        }
      )}
    >
      <img alt="" className="" src={`${process.env.PUBLIC_URL + "/images/" + img + ".png"}`}/>
      <div className="px-32 pb-32 -mt-32">
        <p className="text-24">{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

export const Landing = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <div className="global-container flex max-md:flex-col md:flex-row items-center relative -mb-[4rem]">
        <div>
          <h1 className="heading-display">Cloud based payment solution for <span className="text-emerald-40">parking lot operators</span></h1>
          <Button color="dark" className="max-sm:mb-32 max-sm:my-16 max-sm:w-full">Request a Demo Today</Button>
        </div>
        <img alt="" src={`${process.env.PUBLIC_URL + "/images/computersFiller.png"}`} width={600}/>
        <img alt="" className="absolute right-1 bottom-1 w-full -z-40 max-md:hidden" src={`${process.env.PUBLIC_URL + "/images/track1.png"}`} />
      </div>

      {/* Audience Section */}
      <div className="global-container flex max-md:flex-col md:flex-row gap-16 pt-[9.6rem]">
        {audience("audience1", "Truck Parking Lots", "Our secure, completely illuminated locations can be accessed remotely or by pin code and feature state-of-the-art 24/7 monitoring. If you are a truck driver, operator or have a commercial fleet, contact us to find out how we can serve you.", "emerald50")}
        {audience("audience2", "Boat & Marinas", "Swap out-dated booking processes for EaglePay’s simple, transparent parking management system, guaranteeing better experiences for visitors and businesses.", "emerald30")}
        {audience("audience3", "RV & Campers", "EaglePay is an all-in-one storage software solution designed to help outdoor storage yard owners streamline their processes and manage their tenants all in one dashboard.", "emerald40")}
      </div>

      {/* Trust Section */}
      <p className="text-24 text-center mt-64 mb-32">We deliver results</p>
      <div className="global-container flex max-md:flex-col md:flex-row gap-16 items-center mb-96">
        {cta("750,000", "Transactions on the platform")}
        {cta("1000+", "Drivers using EaglePay")}
        {cta("24/7", "US Based Customer support")}
      </div>

      {/* Features Section */}
      <div className="global-container my-96 relative">
        <h3 className="heading-1 mb-32 md:w-1/2">How Will EaglePay Help Your Company?</h3>

        <div className="grid max-md:grid-cols-1 md:grid-cols-2 ">
          <div className="grid max-md:grid-cols-1 md:grid-cols-2 gap-16">
            {feature("headphones", "Contactless Reservations")}
            {feature("thumb", "Marketing & Communications")}
            {feature("check", "Site Layout Customizations")}
            {feature("lpr", "Security with high-end camera & LPR Technology")}
            {feature("register", "Accounting & Integrated Payment EcoSystem")}
            {feature("data", "Advanced Analytics")}
          </div>

          <div className="flex flex-col items-end max-md:hidden -mt-[12rem]">
            <img alt="" src={`${process.env.PUBLIC_URL + "/images/image1.png"}`} width={300}/>
            <img alt="" src={`${process.env.PUBLIC_URL + "/images/image2.png"}`} width={150} className="mr-[13rem]"/>
            <img alt="" src={`${process.env.PUBLIC_URL + "/images/image3.png"}`} width={200} className='-mt-40 mr-[14rem] -mb-[10rem]'/>
            <img alt="" src={`${process.env.PUBLIC_URL + "/images/image4.png"}`} width={200} className='-z-10 mr-[8rem]'/>
          </div>
        </div>

        <img alt="" className="absolute right-1 top-1 h-full -z-40 max-md:hidden" src={`${process.env.PUBLIC_URL + "/images/track2.png"}`} />
      </div>
      
      {/* Cloud Based */}
      <div className='global-container rounded-xlarge flex max-md:flex-col md:flex-row items-center !p-32 bg-emerald-50 relative z-0 overflow-hidden max-md:!mx-8'>
        <img alt="" className="md:w-1/2" src={`${process.env.PUBLIC_URL + "/images/computersFiller.png"}`} />
        <div className="md:w-1/2 md:p-32 max-md:pt-32">
          <h3 className="heading-1 text-white">Cloud based payment solution for <span className="text-emerald-20">parking lot operators</span></h3>
          <p className="text-white">Ditch the spreadsheets and paper-based processes and upgrade to the best!</p>
        </div>
        <img alt="" className="absolute left-32 top-1 h-full -z-10" src={`${process.env.PUBLIC_URL + "/images/track3.png"}`} />
      </div>

      {/* Testimonials */}
      <div className="global-container flex flex-row items-start !p-32 mt-64 mb-32">
        <div>
          <p className='heading-2'>EagelPay is a game-changer; I'd miss most of the pings I get without it. Hands down the best way to start the business day.</p>
          <p className='text-neutral-700/50'>- Jane Smith, Bobtail Trucking Co.</p>
        </div>
        <img alt="" className="w-1/2" src={`${process.env.PUBLIC_URL + "/images/testimonial-image1.png"}`} />
      </div>
    </div>
  );
}
