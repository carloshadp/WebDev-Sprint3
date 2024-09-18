import React from 'react'
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
            <header>
                <div>
                    <h1>Fórmula-E Manager </h1>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink> </li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/circuitos">Circuitos</NavLink></li>
                        <li><NavLink to="/pilotos">Pilotos</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )}
