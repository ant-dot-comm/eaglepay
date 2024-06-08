import React from 'react';
import { FaPhone, FaMapPin, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import { Button } from './Button';
import { ReactComponent as Logo} from './visuals/logo-custom.svg';
import { ReactComponent as Lines2} from './visuals/decor-lines-2.svg';

export const Footer2 = () => {
  return (
    <>
      {/* App Section */}
      <div className="global-container rounded-xlarge bg-emerald-40 max-md:!mx-8 relative z-10 !p-64 overflow-hidden">
        <div>
          <p className="heading-1 leading-none text-white mb-16">Schedule a <br/> demo today</p>
          <Button color="light">Request a demo</Button>
        </div>

        <img alt="" src={`${process.env.PUBLIC_URL + "/images/track4.png"}`} className="absolute -right-1 -top-1 -z-10" style={{"height": "101%"}} />
      </div>

      <footer className="bg-emerald-50 pb-64 pt-[20rem] -mt-[15.9rem]">
        <div className="global-container !px-32">
          <div className="flex max-md:flex-col md:justify-between">
            <a href="/"><Logo height={40}  className="mb-32 text-white"/></a>
            <div>
              <div className="flex items-center gap-16 mb-16 text-white"><FaPhone className="text-emerald-30" size={24} />123-123-1234</div>
              <div className="flex items-center gap-16 mb-16 text-white"><FaMapPin className="text-emerald-30" size={24} />Address 12345, AB 12345</div>
              <div className="flex items-center gap-16 text-white"><FaEnvelope className="text-emerald-30" size={24} />info@eaglepay.com</div>
            </div>
          </div>

          <hr className='mt-64 border-emerald-40'/>

          <div className="mt-64 md:flex md:justify-between md:flex-row-reverse">
            <div className="flex items-center gap-16 mb-16">
              <a href="/" target="_blank" rel="noreferrer"><FaFacebook size={24} className="text-emerald-30" /></a>
              <a href="/" target="_blank" rel="noreferrer"><FaInstagram size={24} className="text-emerald-30" /></a>
              <a href="/" target="_blank" rel="noreferrer"><FaTwitter size={24} className="text-emerald-30" /></a>
            </div>
            <p className="text-white">© 2024 EaglePay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
