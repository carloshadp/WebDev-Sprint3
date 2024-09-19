import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Registrar() {
  return (
    <>
    <div class="container">
      <h2>Login</h2>
      <div>
        <div>

          <img src="/src/assets/pessoa.svg" width="16px"/>
          <input type="email" placeholder="Email" id="criarUser" required/>
        </div>

        <div>
          <img src="/src/assets/lock.svg" width="16px"/>
          <input type="password" placeholder="Senha" id="criarSenha" required/>
        </div>
        <div>
          <img src="/src/assets/lock.svg" width="16px"/>
          <input type="password" placeholder="Repetir senha" id="repetirSenha" required/>
        </div>
        <button id="Criar">Criar</button>
      </div>
    </div>
    </>
  )
}
