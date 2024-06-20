import React from 'react';

// import { Button } from '../components/Button';

export const UseCases = () => {
  return (
    <div className="cases">

      <div className="global-container mb-[100rem]">
        <h3 className="heading-2 pt-96" id="trucking">Truck Parking Lots</h3>
        <p>Our secure, completely illuminated locations can be accessed remotely or by pin code and feature state-of-the-art 24/7 monitoring. If you are a truck driver, operator or have a commercial fleet, contact us to find out how we can serve you.</p>
      </div>

      <div className="global-container rounded-xlarge p-32 mb-[100rem]">
        <h3 className="heading-2 pt-96" id="boating">Boats & Marinas</h3>
        <p>Swap out-dated booking processes for EaglePay’s simple, transparent parking management system, guaranteeing better experiences for visitors and businesses.</p>
      </div>
      
      <div className="global-container rounded-xlarge p-32 mb-[100rem]">
        <h3 className="heading-2 pt-96" id="camping">RV's & Campers</h3>
        <p>EaglePay is an all-in-one storage software solution designed to help outdoor storage yard owners streamline their processes and manage their tenants all in one dashboard.</p>
      </div>
    </div>
  );
}
