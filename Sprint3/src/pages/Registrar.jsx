import React, { useState } from 'react'
import { listaContas, listaSenhas } from '../scripts/Login'


export default function Registrar() {

  const [criarUser, setNewUser] = useState("")
  const [criarSenha, setNewSenha] = useState("")
  const [repetirSenha, setRepetirSenha] = useState("")

  function Registrar(){
    console.log(listaContas)
    if (criarSenha === "" || criarUser === ""){
      alert("Não pode ter campos nulos.");
      return
    }
    if (criarSenha !== repetirSenha){
      alert("As senhas são distintas!")
      return
    }
    if(!listaContas.includes(criarUser) && criarUser !== null){
        listaContas.push(criarUser);
        localStorage.setItem('users', JSON.stringify(listaContas));
        alert("Conta criada");
        return 
    }else{
        alert("Este user ja tem conta, Volte e faca login")
    }
    if(!listaSenhas.includes(criarSenha) && criarSenha !== null){
        listaSenhas.push(criarSenha);
        localStorage.setItem('senhas', JSON.stringify(listaSenhas));
    }
    
    if(listaContas.includes(criarUser) && listaSenhas.includes(criarSenha)){
        alert("Conta criada, pode voltar ao login!")
    }
  
  }
  return (
    <>
      <section className="container" class="sm:flex sm:flex-col sm:justify-center sm:items-center sm:p-10  sm:m-28">
        <div class="bg-gradient-to-t from-black to-blue-900 sm:flex sm:flex-col sm:justify-center sm:items-center bg-sky-950 sm:border sm:rounded-xl sm:h-60 sm:w-96">
          <h2>Registre-se</h2>
          <div class="sm:flex sm:flex-col sm:gap-2 sm:p-3" >
            <div class="sm:flex sm:gap-2">
              <img src="/src/assets/User.svg" width="16px" />
              <input class="rounded-lg border border-sky-700 text-black" type="email" placeholder="Email" value={criarUser} onChange={(e) => setNewUser(e.target.value)} required />
            </div>

            <div class="sm:flex sm:gap-2">
              <img src="/src/assets/lock.svg" width="16px" />
              <input class="rounded-lg border border-sky-700 text-black" type="password" placeholder="Senha" value={criarSenha} onChange={(e) => setNewSenha(e.target.value)} required />
            </div>

            <div class="sm:flex sm:gap-2">
              <img src="/src/assets/lock.svg" width="16px" />
              <input class="rounded-lg border border-sky-700 text-black" type="password" placeholder="Repetir senha" value={repetirSenha} onChange={(e) => setRepetirSenha(e.target.value)} required />
            </div>
          </div>
          <button class="hover:text-sky-400 self-center" onClick={Registrar}>Criar conta</button>
        </div>
      </section>
    </>
  )
}
