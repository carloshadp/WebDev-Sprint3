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
      <div class="flex flex-col justify-center items-center p-10" >
        <div class="flex flex-col justify-center items-center gap-2 bg-sky-950 border rounded-xl h-60 w-96">
          <h2>Login</h2>
          <div class="gap-2">
            <div class="flex gap-2">
            <img src="/src/assets/user.svg" width="16px" />
              <input class="rounded-lg mb-2 text-black" type="email" placeholder="Email" value={user} onChange={(e) => setUser(e.target.value)} required />
            </div>

            <div class="flex gap-2 "  >
              <img src="/src/assets/lock.svg" width="16px" />
              <input class="rounded-lg text-black" type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
            </div>

          </div>
            <button class="hover:text-sky-400 mt-2" id="entrar" onClick={Login} type="submit">  Entrar</button>
          <li class="list-none hover:text-sky-400"><NavLink to="/register" >Não tem conta? Registre-se</NavLink></li>
        </div>
      </div>
    </>
  )
}
