import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'


export default function Login() {
  const user = useState("")
  const senha = useState("")
  return (
    
    <>
    <div class="container">
      <h2>Login</h2>
      <div>
        <div>

          <img src="/src/assets/pessoa.svg" width="16px"/>
          <input type="email" placeholder="Email" id="user" required/>
        </div>

        <div>
          <img src="/src/assets/lock.svg" width="16px"/>
          <input type="password" placeholder="Senha" id="senha" required/>
        </div>
        <button id="entrar">Entrar</button>
      </div>
      <li><NavLink to="/register" >Não tem conta? Registre-se</NavLink></li>
    </div>
    </>
  )
}
