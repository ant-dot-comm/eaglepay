import React from 'react';
import { Button } from './Button';
import { ReactComponent as Logo} from './visuals/logo.svg';

export const Header = () => {
  return (
    <header className="global-container fixed w-full top-8 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex justify-between items-center p-16 rounded-lg shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] backdrop-blur-md bg-neutral-50/50">
            <a href="/"><Logo height={40}/></a>
            <div className="flex gap-4">
                <Button as="a" href="https://www.truckparknation.com/login" target='_blank' rel="noreferrer" color="hollow">Sign In</Button>
                <Button as="a" href="https://www.truckparknation.com/sign-up" target='_blank' rel="noreferrer"  color="hollow">Register</Button>
            </div>
        </nav>
    </header>
  );
}
