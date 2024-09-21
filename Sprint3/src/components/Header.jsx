import React from 'react'
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
            <header class="flex justify-around h-20 items-center bg-sky-950">
                <div>
                    <h1>Fórmula-E Manager Wiki</h1>
                </div>
                <nav>
                    <ul class="flex gap-4">
                        <li><NavLink to="/">Home</NavLink> </li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/circuitos">Circuitos</NavLink></li>
                        <li><NavLink to="/pilotos">Pilotos</NavLink></li>
                        <li><NavLink to="/equipes">Equipes</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )}
