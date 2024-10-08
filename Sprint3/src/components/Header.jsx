import React from 'react'
import { NavLink } from "react-router-dom";
import '/src/Stylesheets/header.css';
import Nav from "./Nav";
import Logo from "./Logo";

export default function Header(){
    return(
        <>  
                
            <header class="flex flex-wrap items-center justify-between border-b bg-sky-950 sticky top-0 w-full z-[20] mx-auto p-5 shadow-lg">
                        <section class="grid grid-rows-1 grid-flow-col gap-4">
                            <Logo />
                            <div class="hidden md:block text-nowrap self-center">
                                <h1 class="px-0.5 ">Fórmula-E Manager Wiki</h1>
                                <h3 class="text-xs text-sky-400 ml-1">A Wiki for players</h3>
                            </div>
                        </section>
                        <Nav />
            </header>
        </>
    )}
