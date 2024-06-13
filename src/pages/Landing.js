import React from 'react';

import { Button } from '../components/Button';

export const Landing = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <div className="global-container flex max-md:flex-col md:flex-row items-center relative -mb-[7.2rem]">
        <div>
          <h1 className="heading-display">Parking Solutions for the Modern Trucking Industry</h1>
          <Button color="dark">Request a Demo Today</Button>
        </div>
        <img alt="" src={`${process.env.PUBLIC_URL + "/images/hero.png"}`} width={600}/>
      </div>

      {/* Audience Section */}
      <div className="bg-gradient-to-b from-neutral-200 to-neutral-50 py-64">
        <div className="global-container flex max-md:flex-col md:flex-row gap-16">
          <div className="bg-gradient-to-b from-neutral-50 to-neutral-200 rounded-xlarge p-32">
            <h3>Site Operators</h3>
            <p>Carriers can make instant over-the-road payments, automate back-office processes, and get flexible and fast freight payments from brokers in Relay's network.</p>
            <p>Reporting All the data at your fingertips, from rent rolls to access logs its included with Truckbays.</p>
            <p>Tickets Charge customers one-off invoices for inconveniences such as unauthorized parking, late fees and so on.</p>
            <p>Lease automation Easily move customers around for any situation; Customer needs a larger spot to accomodate for a new trailer, Check.</p>
          </div>

          <div className="bg-gradient-to-b from-neutral-50 to-neutral-200 rounded-xlarge p-32">
            <h3>Site Operators</h3>
            <p>Carriers can make instant over-the-road payments, automate back-office processes, and get flexible and fast freight payments from brokers in Relay's network.</p>
            <p>Reporting All the data at your fingertips, from rent rolls to access logs its included with Truckbays.</p>
            <p>Tickets Charge customers one-off invoices for inconveniences such as unauthorized parking, late fees and so on.</p>
            <p>Lease automation Easily move customers around for any situation; Customer needs a larger spot to accomodate for a new trailer, Check.</p>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-gradient-to-b from-emerald-30 to-emerald-20 py-64 shadow-[0_24px_32px_0_rgba(0,0,0,0.5)]">
        <div className="global-container flex max-md:flex-col md:flex-row gap-16 items-center md:justify-between">
          <div className="text-center">
            <p className="text-40 font-black leading-none mb-1">750,000</p>
            <p>Transactions on the platform</p>
          </div>

          <div className="text-center">
            <p className="text-40 font-black leading-none mb-1">1000+</p>
            <p>Operators</p>
          </div>

          <div className="text-center">
            <p className="text-40 font-black leading-none mb-1">24/7</p>
            <p>US Based Customer support</p>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="bg-gradient-to-b from-blue-40 to-blue-30 py-64 relative -z-20">
        <div className="global-container flex max-md:flex-col-reverse md:flex-row gap-16 items-center relative">
          <div>
            <h3 className="heading-2 text-emerald-10">Request a demo today</h3>
            <p className="text-neutral-50">Discover how Eagle Pay can transform your truck parking operations. Our technology and expertise make us the trusted partner for modern trucking enterprises.</p>
            <Button color="light">Request a Demo</Button>
          </div>

          <img alt="" src={`${process.env.PUBLIC_URL + "/images/sample.png"}`} />
        </div>
      </div>

      {/* Security Features Section */}
      <div className="global-container my-64">
        <div className="bg-gradient-to-b from-neutral-100 to-transparent rounded-xlarge p-32">
          <h3 className="heading-2 mb-32">Comprehensive VMS for Enhanced Security</h3>

          <div className="flex max-md:flex-col-reverse md:flex-row gap-16 items-center relative"> 
            <div className="flex flex-col gap-16 md:-mr-64 z-10">
              <div className="rounded-lg bg-white p-16 shadow-lg">
                <img alt="" src={`${process.env.PUBLIC_URL + "/images/sample.png"}`} /> 
              </div>
              <div className="rounded-lg bg-white p-16 shadow-lg">
                <img alt="" src={`${process.env.PUBLIC_URL + "/images/sample.png"}`} /> 
              </div>
              <div className="rounded-lg bg-white p-16 shadow-lg">
                <img alt="" src={`${process.env.PUBLIC_URL + "/images/sample.png"}`} /> 
              </div>
            </div>

            <div className="rounded-large bg-white p-16 md:pl-64 shadow-lg">
              <h3 className="heading-3">Secured Gate Access</h3>
              <p className="mb-32">Control access to your lots with our secure gate access system, managed via a kiosk app and remote gate opening capabilities.</p>
              
              <h3 className="heading-3">Remote Gate Access</h3>
              <p className="mb-32">Control access to your lots with our secure gate access system, managed via a kiosk app and remote gate opening capabilities.</p>
              
              <h3 className="heading-3">Secured Gate Access</h3>
              <p className="mb-32">Control access to your lots with our secure gate access system, managed via a kiosk app and remote gate opening capabilities.</p>
              
              <h3 className="heading-3">Live Camera Feeds & Remote Playbacks</h3>
              <p className="mb-32">Control access to your lots with our secure gate access system, managed via a kiosk app and remote gate opening capabilities.</p>
              
              <h3 className="heading-3">Cloud Storage</h3>
              <p className="mb-32">Control access to your lots with our secure gate access system, managed via a kiosk app and remote gate opening capabilities.</p>

              <Button color="dark">Request a Demo</Button>
            </div>
          </div>
        </div>
      </div>


      {/* White Label Section */}
      <div className="global-container my-64">
        <div className="bg-gradient-to-b from-neutral-100 to-transparent rounded-xlarge p-32">
          <h3 className="heading-2 mb-32">Tailor-Made for Your Business</h3>

          <div className="flex max-md:flex-col-reverse md:flex-row gap-16 items-center relative"> 
            <div className="rounded-large bg-white p-16 md:pr-64 shadow-lg">
              <h3 className="heading-3">Secured Gate Access</h3>
              <p className="mb-32">Control access to your lots with our secure gate access system, managed via a kiosk app and remote gate opening capabilities.</p>
              
              <h3 className="heading-3">Remote Gate Access</h3>
              <p className="mb-32">Control access to your lots with our secure gate access system, managed via a kiosk app and remote gate opening capabilities.</p>
              
              <h3 className="heading-3">Secured Gate Access</h3>
              <p className="mb-32">Control access to your lots with our secure gate access system, managed via a kiosk app and remote gate opening capabilities.</p>
              
              <h3 className="heading-3">Live Camera Feeds & Remote Playbacks</h3>
              <p className="mb-32">Control access to your lots with our secure gate access system, managed via a kiosk app and remote gate opening capabilities.</p>
              
              <h3 className="heading-3">Cloud Storage</h3>
              <p className="mb-32">Control access to your lots with our secure gate access system, managed via a kiosk app and remote gate opening capabilities.</p>
            </div>

            <div className="flex flex-col gap-16 md:-ml-64 z-10">
              <div className="rounded-lg bg-white p-16 shadow-lg">
                <img alt="" src={`${process.env.PUBLIC_URL + "/images/sample.png"}`} /> 
              </div>
              <div className="rounded-lg bg-white p-16 shadow-lg">
                <img alt="" src={`${process.env.PUBLIC_URL + "/images/sample.png"}`} /> 
              </div>
              <Button color="dark">Request a Demo</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Multiple Features Section */}
      <div className="global-container my-64">
        <div className="bg-gradient-to-b from-neutral-100 to-transparent rounded-xlarge p-32">
          <h3 className="heading-2 mb-32">Efficient Billing & Transactions</h3>

          <div className="flex max-md:flex-col md:flex-row gap-16 items-center"> 
            <div className="rounded-lg bg-white p-16 shadow-lg">
              <img alt="" src={`${process.env.PUBLIC_URL + "/images/sample.png"}`} className="grow w-full"/> 
            </div>
            <div>
              <h3 className="heading-3">Cloud Storage</h3>
              <p>Control access to your lots with our secure gate access system, managed via a kiosk app and remote gate opening capabilities.</p>
            </div>
          </div>
          
          <div className="flex max-md:flex-col md:flex-row gap-16 items-center"> 
            <div className="rounded-lg bg-white p-16 shadow-lg">
              <img alt="" src={`${process.env.PUBLIC_URL + "/images/sample.png"}`} className="grow w-full"/> 
            </div>
            <div>
              <h3 className="heading-3">Cloud Storage</h3>
              <p>Control access to your lots with our secure gate access system, managed via a kiosk app and remote gate opening capabilities.</p>
            </div>
          </div>
          
          <div className="flex max-md:flex-col md:flex-row gap-16 items-center"> 
            <div className="rounded-lg bg-white p-16 shadow-lg">
              <img alt="" src={`${process.env.PUBLIC_URL + "/images/sample.png"}`} className="grow w-full"/> 
            </div>
            <div>
              <h3 className="heading-3">Cloud Storage</h3>
              <p>Control access to your lots with our secure gate access system, managed via a kiosk app and remote gate opening capabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
