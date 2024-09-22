import React from 'react'
import { NavLink } from "react-router-dom";
import '/src/Stylesheets/header.css'

export default function Header(){
    return(
        <>  
                
            <header class=" bg-sky-950 fixed left-0 top-0 w-full">
                <div className="telaGrande">
                    <section class="sm:h-20 sm:flex sm:justify-center sm:items-center sm:gap-52">
                        <div class="sm:size-1/4 sm:text-nowrap">
                            <h1 class="sm:px-0.5">Fórmula-E Manager Wiki</h1>
                            <div>
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



                <div className="container-mobile"> 
                    <section class="h-20 flex  justify-around  items-center">
                        <input type="checkbox" id="menu" className="container-botao"/>
                        <label htmlFor="menu" class="bg-[url('/src/assets/Menu.svg')] bg-no-repeat bg-center"></label>
                        <ul className="listmenu">               
                                <li><NavLink to="/">Home</NavLink> </li>
                                <li><NavLink to="/login">Login</NavLink></li>
                                <li><NavLink to="/circuitos">Circuitos</NavLink></li>
                                <li><NavLink to="/pilotos">Pilotos</NavLink></li>
                                <li><NavLink to="/equipes">Equipes</NavLink></li>
                        </ul>       
                        <div class="size-1/4 text-nowrap">
                            <h1 class="px-0.5">Fórmula-E Manager Wiki</h1>
                            <div>
                                <h3 class="text-xs text-sky-400 ml-1">A Wiki for players</h3>
                            </div>
                        </div>
                    </section> 
                </div>
            </header>
        </>
    )}
