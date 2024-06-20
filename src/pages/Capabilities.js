import React from 'react';
import ReactPlayer from 'react-player'

import { Button } from '../components/Button';
import Security from '../components/visuals/security.mp4';
import Spaces from '../components/visuals/spaces.mp4';
import Billing from '../components/visuals/billing.mp4';

export const Capabilities = () => {
  return (
    <div className="capabilities">

      <div className="global-container text-center mb-32">
        <p className="md:w-5/6 mx-auto">Explore the robust features and tools that Eagle Pay offers to streamline and enhance your truck parking operations. From advanced security measures to seamless communication and comprehensive reporting, our platform is designed to meet the unique needs of site operators. Discover how our capabilities can help you manage your lots more efficiently, ensure safety, and provide an exceptional experience for your drivers.</p>
      </div>

      {/* Security Features Section */}
      <div className="global-container rounded-xlarge p-32 mb-64">
        <h3 className="heading-2 text-center">Comprehensive VMS for Enhanced Security</h3>
        <p className="md:w-5/6  mx-auto text-center mb-32">Eagle Pay’s advanced Video Management System (VMS) is designed to provide unparalleled security and peace of mind for truck parking operators.</p>

        <div className="flex max-md:flex-col md:flex-row gap-16 items-start relative"> 
          <video width="1000" muted autoPlay loop className="md:w-1/2 rounded-large bg-white shadow-lg p-16 z-10 md:-mr-64">
            <source src={Security} type="video/mp4" />
            Your browser does not support the video tag.
          </video> 

          <div className="rounded-large cta-container p-16 py-40 md:pl-64 shadow-lg md:mt-16">
            <h3 className="heading-3">Secured Gate Access</h3>
            <p className="mb-32">Control access to your lots with our secure gate access system, managed via a kiosk app and remote gate opening capabilities.</p>
            
            <h3 className="heading-3">Live Camera Feeds, LPR, & Remote Playbacks</h3>
            <p className="mb-32">Our custom-built VMS (Video Management System) ensures you can monitor your lots in real-time and access remote video playback whenever needed.</p>
            
            <h3 className="heading-3">Cloud Storage</h3>
            <p className="mb-32">Save your video recordings on the cloud based on your specific requirements, ensuring data is always accessible and secure.</p>

            <Button
                as="a"
                href="https://calendly.com/park-nation/introduction-to-eaglepay-platform"
                target="_blank"
                rel="noreferrer"
                color="dark"
                size="sm"
                >
                Book a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* White Label Section */}
      <div className="global-container rounded-xlarge px-32">
        <h3 className="heading-2 mb-32 text-center">Tailor-Made for Your Business</h3>
        <p className="text-center mx-auto w-5/6 mb-32">We understand the unique needs of parking operations, which is why our platform is fully customizable. From leases to refund policies, you have the control to personalize every aspect to suit your business requirements.</p>

        <div className="flex max-md:flex-col-reverse md:flex-row gap-16 items-start relative"> 
          <div className="rounded-large cta-container md:mt-32 px-32 py-40 md:pr-64 shadow-lg">
            <h3 className="heading-3">White Labeling</h3>
            <p className="mb-32">White-label your web and mobile apps, offering a seamless and branded experience to your customers.</p>
            
            <h3 className="heading-3">Custom Workflows</h3>
            <p className="mb-32">Developed by parking lot owners, our platform addresses every scenario you face. Customize workflows to fit your unique needs.</p>
            
            <h3 className="heading-3">Manage Multiple Lots & Drivers</h3>
            <p className="mb-32">Empower site operators to manage multiple lots and drivers effortlessly, providing full control over operations and reservations.</p>

            <Button
                as="a"
                href="https://calendly.com/park-nation/introduction-to-eaglepay-platform"
                target="_blank"
                rel="noreferrer"
                color="dark"
                size="sm"
                >
                Book a Demo
            </Button>
          </div>

          <video width="1000" muted autoPlay loop className="md:w-1/2 rounded-large bg-white shadow-lg p-16 z-10 md:-ml-64">
            <source src={Billing} type="video/mp4" />
            Your browser does not support the video tag.
          </video> 
        </div>
      </div>
      
      {/* Multiple Features Section */}
      <div className="global-container rounded-xlarge p-32">
        <h3 className="heading-2 my-64 text-center ">We thought about everything to make your life easier as an operator</h3>

        <div className="flex flex-col gap-32 mb-64"> 
          <div className="flex max-md:flex-col md:flex-row gap-16 items-center mb-64"> 
            <video width="1000" muted autoPlay loop className="md:w-4/6 rounded-large bg-white shadow-lg p-16">
              <source src={Spaces} type="video/mp4" />
              Your browser does not support the video tag.
            </video> 
            <div className="grow">
              <h3 className="heading-3">Reserve real-time</h3>
              <p>Give customers all the information about your location from Pricing, Availability, Amenities, and Rules & Guidelines.</p>
            </div>
          </div>
        
          <div className="flex max-md:flex-col md:flex-row gap-16 items-center md:text-right"> 
            <div className="grow">
              <h3 className="heading-3">Enhance Your Financial Operations</h3>
              <p>Explore our comprehensive billing and transaction features. Set up recurring billing and second-day ACH transfers with ease.</p>
            </div>
            <video width="1000" muted autoPlay loop className="md:w-4/6 rounded-large bg-white shadow-lg p-16">
              <source src={Billing} type="video/mp4" />
              Your browser does not support the video tag.
            </video> 
          </div>
        </div>

      </div>
    </div>
  );
}
