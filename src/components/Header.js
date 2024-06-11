import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import { ReactComponent as Logo} from '../components/visuals/logo-custom.svg';
import { Button } from '../components';


export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="global-container fixed w-full top-8 left-1/2 -translate-x-1/2 z-50">
                <nav
                    className={classNames(
                        "flex justify-between items-center",
                        "p-16 rounded-lg shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] backdrop-blur-md bg-neutral-50/50"
                    )}
                >
                    <Link to="/eaglepay">
                        <Logo height={40} />
                    </Link>
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
                    menuOpen ? "max-sm:block" : "max-sm:hidden",
                    "flex items-center gap-16",
                    "fixed -top-1 -right-1 -bottom-1 -left-1 bg-black/50 z-50",
                )}
            >
                <div
                    className={classNames(
                        "absolute top-1 right-1 bottom-1 left-1",
                        "flex flex-col gap-16",
                        "p-32 pt-64 m-16 rounded-lg shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] bg-[#E5E1DB]"
                    )}
                >
                    <Link to="/eaglepay" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/eaglepay/capabilities" onClick={() => setMenuOpen(false)}>Capabilities</Link>
                    <Link to="/eaglepay/use-cases" onClick={() => setMenuOpen(false)}>UseCases</Link>
                    <Link to="/eaglepay/contact" onClick={() => setMenuOpen(false)}>Book a Demo</Link>
                    <Button
                        as="a"
                        href="https://www.truckparknation.com/login"
                        target="_blank"
                        rel="noreferrer"
                        color="hollow"
                        onClick={() => setMenuOpen(false)}
                    >
                        Sign In
                    </Button>
                    <Button
                        as="a"
                        href="https://www.truckparknation.com/sign-up"
                        target="_blank"
                        rel="noreferrer"
                        color="hollow"
                        onClick={() => setMenuOpen(false)}
                    >
                        Register
                    </Button>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        type="button"
                        class="block text-black focus:outline-none sm:hidden p-16 absolute top-1 right-1"
                    >
                        <AiOutlineClose size={24} />
                    </button>
                </div>
            </div>
        </>
    );
};
