import React from 'react';
import { FaPhone, FaMapPin, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import { Button } from './Button';
import { ReactComponent as Logo} from './visuals/logo.svg';
import { ReactComponent as Lines} from './visuals/decor-lines.svg';
import { ReactComponent as Lines2} from './visuals/decor-lines-2.svg';

export const Footer = () => {
  return (
    <>
      {/* App Section */}
      <div className="bg-gradient-to-b from-emerald-50 to-emerald-40 py-64 relative -z-20">
        <div className="global-container flex max-md:flex-col md:flex-row gap-16 items-center md:justify-between relative">
          <div>
            <p className="text-40 font-black leading-none mb-1 text-emerald-10">Download our app</p>
            <ul className="text-white my-32 list-disc pl-16">
              <li>wqrgergerg ewrger e bdfb f bsdfbsdfb s</li>
              <li>e bdfb f bsdfbsdfb s</li>
              <li>2wqrgergerg ewrgerf bsdfb</li>
              <li>e bdfb f bsdfbsdfb s</li>
              <li>2wqrgergerg ewrgerf bsdfb</li>
            </ul>
            <div className="flex gap-16 items-center">
              <Button color="light">Apple Store</Button>
              <Button color="light">Google Play</Button>
            </div>
          </div>

          <img alt="" src={`${process.env.PUBLIC_URL + "/images/app.png"}`} className="w-[30rem] md:-my-[9.6rem]" />

          <Lines className="text-emerald-50 absolute -top-64 right-1 -z-10"/>
          <Lines className="text-emerald-40 absolute -bottom-64 left-1 -z-10"/>
        </div>
      </div>
      <footer className="bg-gradient-to-b from-neutral-300 to-white py-64 relative -z-30">
        <div className="global-container">
          <div className="max-md:flex max-md:flex-col max-md:w-fit max-md:mx-auto">
            <a href="/"><Logo height={40}  className="mb-32"/></a>
            <div className="flex items-center gap-16 md:ml-64 mb-16"><FaPhone className="text-emerald-40" size={24} />123-123-1234</div>
            <div className="flex items-center gap-16 md:ml-64 mb-16"><FaMapPin className="text-emerald-40" size={24} />Address 12345, AB 12345</div>
            <div className="flex items-center gap-16 md:ml-64"><FaEnvelope className="text-emerald-40" size={24} />info@eaglepay.com</div>
          </div>
          <hr className="border-t border-neutral-400 my-32"  />
          <div className="flex gap-16 max-md:flex-col md: justify-between items-center">
            <p>© 2024 EaglePay. All rights reserved.</p>
            <div className="flex items-center gap-16">
              <a href="/" target="_blank" rel="noreferrer"><FaFacebook size={24} className="text-emerald-40" /></a>
              <a href="/" target="_blank" rel="noreferrer"><FaInstagram size={24} className="text-emerald-40" /></a>
              <a href="/" target="_blank" rel="noreferrer"><FaTwitter size={24} className="text-emerald-40" /></a>
            </div>
          </div>
          <Lines2 className="text-neutral-200 absolute top-1 right-1 -z-10"/>
        </div>
      </footer>
    </>
  );
}
