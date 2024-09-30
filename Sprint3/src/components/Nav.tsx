import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {Menu, X} from "lucide-react";

const Navlinks = () => {
    return (
        <><div className="md:flex grid grid-rows-5 grid-flow-col md:gap-4 gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/circuitos">Circuitos</NavLink>
            <NavLink to="/pilotos">Pilotos</NavLink>
            <NavLink to="/equipes">Equipes</NavLink>
        </div>
        </>
    );
};

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="flex w-1/3 justify-end">
                <div className="hidden justify-between md:flex">
                    <Navlinks />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleNavbar}>{isOpen ? <X />: <Menu />}</button>
                </div>
            </nav>
            {isOpen && (
                <div className="flex basis-full flex-col items-center">
                    <Navlinks />
                </div>
            )}
        </>
        );
    };

    export default Nav;