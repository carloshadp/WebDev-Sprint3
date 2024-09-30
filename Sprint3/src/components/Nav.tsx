import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {Menu, X} from "lucide-react";

const Navlinks = () => {
    return (
        <><div>
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
            <nav className="w-1/3 flex justify-end">
                <div className="hidden md:flex justify-between">
                    <Navlinks />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleNavbar}>{isOpen ? <X />: <Menu />}</button>
                </div>
            </nav>
            {isOpen && (
                <div className="flex flex-col ">
                    <Navlinks />
                </div>
            )}
        </>
        );
    };

    export default Nav;