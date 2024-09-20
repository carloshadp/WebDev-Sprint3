import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import {listaContas, listaSenhas} from "../scripts/Login.js"

export default function Login() {

  const [user, setUser] = useState("")
  const [senha, setSenha] = useState("")

  function Login(){
    console.log(listaContas)
    console.log(listaSenhas)
    if(!listaContas.includes(user)){
      console.log(listaContas)
      alert("Este user nao tem conta");
    }else if(listaContas.includes(user) && !listaSenhas.includes(senha)){
      alert("Senha icorreta")
    }else{
      window.location.href = "/"
    }
  }


  return (
    
    <>
    <div className="container">
      <h2>Login</h2>
      <div>
        <div>

          <img src="/src/assets/pessoa.svg" width="16px"/>
          <input type="email" placeholder="Email" value={user} onChange={(e) => setUser(e.target.value)} required/>
        </div>

        <div>
          <img src="/src/assets/lock.svg" width="16px"/>
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required/>
        </div>
        <button id="entrar" onClick={Login} type="submit">  Entrar</button>
      </div>
      <li><NavLink  to="/register" >Não tem conta? Registre-se</NavLink></li>
    </div>
    </>
  )
}
