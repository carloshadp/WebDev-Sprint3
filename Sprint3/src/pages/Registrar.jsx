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
  if(!listaContas.includes(criarUser) && criarUser !== null){
      listaContas.push(criarUser);
      localStorage.setItem('users', JSON.stringify(listaContas));
      alert("Conta criada");
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
      <div className="container" class="flex flex-col justify-center items-center p-10">
        <div class="flex flex-col justify-center items-center bg-sky-950 border rounded-xl h-60 w-96">
          <h2>Registre-se</h2>
          <div class="flex flex-col gap-2 p-3" >
            <div class="flex gap-2">
              <img src="/src/assets/User.svg" width="16px" />
              <input class="rounded-lg border border-sky-700 text-black" type="email" placeholder="Email" value={criarUser} onChange={(e) => setNewUser(e.target.value)} required />
            </div>

            <div class="flex gap-2">
              <img src="/src/assets/lock.svg" width="16px" />
              <input class="rounded-lg border border-sky-700 text-black" type="password" placeholder="Senha" value={criarSenha} onChange={(e) => setNewSenha(e.target.value)} required />
            </div>

            <div class="flex gap-2">
              <img src="/src/assets/lock.svg" width="16px" />
              <input class="rounded-lg border border-sky-700 text-black" type="password" placeholder="Repetir senha" value={repetirSenha} onChange={(e) => setRepetirSenha(e.target.value)} required />
            </div>
          </div>
          <button class="hover:text-sky-400 self-center" onClick={Registrar}>Criar conta</button>
        </div>
      </div>
    </>
  )
}
