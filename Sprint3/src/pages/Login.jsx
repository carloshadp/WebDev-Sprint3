import React from 'react'
import { NavLink } from 'react-router-dom'



export default function Login() {
  return (
    <>
    <div class="container">
      <h2>Login</h2>
      <div>
        <div>

          <img src="/src/assets/pessoa.svg" width="16px"/>
          <input type="email" placeholder="Email" required/>
        </div>

        <div>
          <img src="/src/assets/lock.svg" width="16px"/>
          <input type="password" placeholder="Senha" required/>
        </div>
        <button id="Entrar">Entrar</button>
      </div>
      <li><NavLink to="/register" >Não tem conta? Registre-se</NavLink></li>
    </div>
    </>
  )
}
