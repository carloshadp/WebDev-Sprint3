import React from 'react'
import { NavLink } from "react-router-dom";
import '/src/Stylesheets/header.css'

export default function Header(){

    return(
        <>  
                
            <header class=" bg-sky-950 fixed left-0 top-0 w-full">
                <div className="hidden md:block">
                    <section class="sm:h-20 sm:flex sm:justify-center sm:items-center sm:gap-52">
                        <div class="sm:size-1/4 sm:text-nowrap sm:flex sm:items-center sm:gap-4">
                            <div>
                                <img src="/src/imgs/Favicon/Nosso favicon.png" class="sm:w-12"/>
                            </div>
                            <div>
                                <h1 class="sm:px-0.5">Fórmula-E Manager Wiki</h1>
                                <h3 class="sm:text-xs text-sky-400 sm:ml-1">A Wiki for players</h3>
                            </div>
                        </div>
                        <nav>
                            <ul class="sm:flex sm:gap-4">
                                <li><NavLink to="/">Home</NavLink> </li>
                                <li><NavLink to="/login">Login</NavLink></li>
                                <li><NavLink to="/circuitos">Circuitos</NavLink></li>
                                <li><NavLink to="/pilotos">Pilotos</NavLink></li>
                                <li><NavLink to="/equipes">Equipes</NavLink></li>
                            </ul>
                        </nav>   
                    </section>
                    <hr border="1px" solid black width="100%" />
                </div>



                <div class="md:hidden"> 
                    <section class="h-20 flex  justify-around  items-center">
                        <button id="menuButton" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-50 hover:text-white hover:bg-gray-700 focus:outline-none focus: bg-gray-700 focus:text-white trasition duration-75 ease-in-out" aria-label="Menu" aria-expanded="false">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox='0 0 24 24'>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h116M4 18h16"></path>
                            </svg>
                        </button>
                        <div id="menu" class="hidden md:hidden">
                            <ul class="px-2 pt-2 pd-3 sm:px-3">           
                                <li><NavLink to="/">Home</NavLink> </li>
                                <li><NavLink to="/login">Login</NavLink></li>
                                <li><NavLink to="/circuitos">Circuitos</NavLink></li>
                                <li><NavLink to="/pilotos" >Pilotos</NavLink></li>
                                <li><NavLink to="/equipes">Equipes</NavLink></li>
                            </ul> 
                        </div>       
                        <div class="size-1/4 text-nowrap">
                            <h1 class="px-0.5">Fórmula-E Manager Wiki</h1>
                            <div>
                                <h3 class="text-xs text-sky-400 ml-1">A Wiki for players</h3>
                            </div>
                        </div>
                    </section> 
                </div>

                <script src="/Sprint3/src/components/Header.js"></script>
            </header>
        </>
    )}
    
