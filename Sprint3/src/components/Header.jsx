import React from 'react'
import { NavLink } from "react-router-dom";
import '/src/Stylesheets/header.css'

export default function Header(){
    return(
        <>  
                
            <header class=" bg-sky-950">
                <div className="telaGrande">
                    <section class="h-20 flex justify-center items-center gap-52">
                        <div class="size-1/4 text-nowrap">
                            <h1 class="px-0.5">Fórmula-E Manager</h1>
                        </div>
                        <nav>
                            <ul class="flex gap-4">
                                <li><NavLink to="/">Home</NavLink> </li>
                                <li><NavLink to="/login">Login</NavLink></li>
                                <li><NavLink to="/circuitos">Circuitos</NavLink></li>
                                <li><NavLink to="/pilotos">Pilotos</NavLink></li>
                            </ul>
                        </nav>   
                    </section>
                </div>



                <div className="container-mobile"> 
                    <section class="h-20 flex justify-center justify-around  items-center">
                        <input type="checkbox" id="menu" className="container-botao"/>
                        <label htmlFor="menu" class="bg-[url('/src/assets/Menu.svg')] bg-no-repeat bg-center"></label>
                        <ul className="listmenu">               
                                <li><NavLink to="/">Home</NavLink> </li>
                                <li><NavLink to="/login">Login</NavLink></li>
                                <li><NavLink to="/circuitos">Circuitos</NavLink></li>
                                <li><NavLink to="/pilotos">Pilotos</NavLink></li>
                        </ul>       
                        <div class="size-1/4 text-nowrap">
                            <h1 class="px-0.5">Fórmula-E Manager</h1>
                        </div>
                    </section> 
                </div>
            </header>
        </>
    )}
