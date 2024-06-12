import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import { ReactComponent as Logo} from '../components/visuals/logo-custom.svg';
import { Button } from '../components';

import './Header.scss';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = (
        <>
            <Link to="/eaglepay/capabilities" onClick={() => setMenuOpen(false)}>Capabilities</Link>
            <Link to="/eaglepay/use-cases" onClick={() => setMenuOpen(false)}>UseCases</Link>
            <Button
                as="link"
                to="/eaglepay/contact"
                color="dark"
                onClick={() => setMenuOpen(false)}
                size="sm"
                >
                Book a Demo
            </Button>
            <Button
                as="a"
                href="https://www.truckparknation.com/login"
                target="_blank"
                rel="noreferrer"
                color="hollow"
                onClick={() => setMenuOpen(false)}
                size="sm"
                >
                Sign In / Register
            </Button>
        </>
    )

    return (
        <div className="relative">
            <header className="header global-container fixed w-full top-8 left-1/2 -translate-x-1/2 z-50">
                <nav
                    className={classNames(
                        "flex justify-between items-center",
                        "p-16 rounded-lg shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] backdrop-blur-md bg-neutral-50/50"
                    )}
                >
                    <Link to="/eaglepay">
                        <Logo height={40} />
                    </Link>

                    <div className="hidden sm:flex items-center gap-16 text-sm">
                        {links}
                    </div>
                    
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        type="button"
                        class="block text-black focus:outline-none sm:hidden p-16"
                    >
                        <FaBars size={24} />
                    </button>
                </nav>
            </header>
            <div
                className={classNames(
                    {'max-sm:hidden sm:hidden' : !menuOpen},
                    "header-overlay",
                )}
            >
                <div
                    className={classNames(
                        "header-overlay__content"
                    )}
                >
                    <Link to="/eaglepay">
                        <Logo height={40} className="mb-32" />
                    </Link>
                    <div className="text-xl flex flex-col items-center gap-32 w-full">
                        {links}
                    </div>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        type="button"
                        class="block text-black focus:outline-none sm:hidden p-16 absolute top-1 right-1"
                    >
                        <AiOutlineClose size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};
