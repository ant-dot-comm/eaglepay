import React from 'react';

import { Button } from '../components/Button';

export const Capabilities = () => {
  return (
    <div className="capabilities">

      <div className="global-container">
        <h1 className="heading-display">Capabilities</h1>
        <p>Explore the robust features and tools that Eagle Pay offers to streamline and enhance your truck parking operations. From advanced security measures to seamless communication and comprehensive reporting, our platform is designed to meet the unique needs of site operators. Discover how our capabilities can help you manage your lots more efficiently, ensure safety, and provide an exceptional experience for your drivers.</p>
      </div>

      {/* Security Features Section */}
      <div className="global-container rounded-xlarge p-32">
        <h3 className="heading-2">Comprehensive VMS for Enhanced Security</h3>
        <p>Eagle Pay’s advanced Video Management System (VMS) is designed to provide unparalleled security and peace of mind for truck parking operators.</p>

        <div className="flex max-md:flex-col-reverse md:flex-row gap-16 items-center relative"> 
          <div className="flex flex-col gap-16 md:-mr-64 z-10">
            <div className="rounded-lg bg-white p-16 shadow-lg">
              <img alt="" src={`${process.env.PUBLIC_URL + "/images/sample.png"}`} /> 
            </div>
            <div className="rounded-lg bg-white p-16 shadow-lg">
              <img alt="" src={`${process.env.PUBLIC_URL + "/images/sample.png"}`} /> 
            </div>
          </div>

          <div className="rounded-large bg-white p-16 py-40 md:pl-64 shadow-lg">
            <h3 className="heading-3">Secured Gate Access</h3>
            <p className="mb-32">Control access to your lots with our secure gate access system, managed via a kiosk app and remote gate opening capabilities.</p>
            
            <h3 className="heading-3">Live Camera Feeds & Remote Playbacks</h3>
            <p className="mb-32">Our custom-built VMS (Video Management System) ensures you can monitor your lots in real-time and access remote video playback whenever needed.</p>
            
            <h3 className="heading-3">Cloud Storage</h3>
            <p className="mb-32">Save your video recordings on the cloud based on your specific requirements, ensuring data is always accessible and secure.</p>

            <Button color="dark">Request a Demo</Button>
          </div>
        </div>
      </div>

      {/* White Label Section */}
      <div className="global-container rounded-xlarge px-32">
        <h3 className="heading-2 mb-32">Tailor-Made for Your Business</h3>
        <p>We understand the unique needs of parking operations, which is why our platform is fully customizable. From leases to refund policies, you have the control to personalize every aspect to suit your business requirements.</p>

        <div className="flex max-md:flex-col-reverse md:flex-row gap-16 items-center relative"> 
          <div className="rounded-large bg-white px-32 py-40 md:pr-64 shadow-lg">
            <h3 className="heading-3">White Labeling</h3>
            <p className="mb-32">White-label your web and mobile apps, offering a seamless and branded experience to your customers.</p>
            
            <h3 className="heading-3">Custom Workflows</h3>
            <p className="mb-32">Developed by parking lot owners, our platform addresses every scenario you face. Customize workflows to fit your unique needs.</p>
            
            <h3 className="heading-3">Manage Multiple Lots & Drivers</h3>
            <p className="mb-32">Empower site operators to manage multiple lots and drivers effortlessly, providing full control over operations and reservations.</p>
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
            <h3 className="heading-3">Simplify Your Billing Process</h3>
            <p>Streamline your finances with our efficient billing solutions. </p>
          </div>
        </div>
        
        <div className="flex max-md:flex-col md:flex-row gap-16 items-center"> 
          <div className="rounded-lg bg-white p-16 shadow-lg">
            <img alt="" src={`${process.env.PUBLIC_URL + "/images/sample.png"}`} className="grow w-full"/> 
          </div>
          <div>
            <h3 className="heading-3">Automate Your Payments</h3>
            <p>Set up recurring billing and second-day ACH transfers with ease.</p>
          </div>
        </div>
        
        <div className="flex max-md:flex-col md:flex-row gap-16 items-center"> 
          <div className="rounded-lg bg-white p-16 shadow-lg">
            <img alt="" src={`${process.env.PUBLIC_URL + "/images/sample.png"}`} className="grow w-full"/> 
          </div>
          <div>
            <h3 className="heading-3">Enhance Your Financial Operations</h3>
            <p>Explore our comprehensive billing and transaction features.</p>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}
