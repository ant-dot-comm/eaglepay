import React from 'react';

import { Button } from '../components/Button';

export const UseCases = () => {
  return (
    <div className="cases">

      <div className="global-container">
        <h1 className="heading-display">About</h1>
      </div>

      {/* Security Features Section */}
      <div className="global-container rounded-xlarge p-32">
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

      {/* White Label Section */}
      <div className="global-container rounded-xlarge p-32">
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
      
      {/* Multiple Features Section */}
      <div className="global-container rounded-xlarge p-32">
        <h3 className="heading-2 mb-32">Efficient Billing & Transactions</h3>

        <div className="flex flex-col gap-32"> 
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
