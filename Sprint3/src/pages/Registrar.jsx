import React, { useState } from 'react'
import { listaContas, listaSenhas } from '../scripts/Login'


export default function Registrar() {

  const [criarUser, setNewUser] = useState("")
  const [criarSenha, setNewSenha] = useState("")
  const [repetirSenha, setRepetirSenha] = useState("")

  function Registrar(){
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
    <div className="container">
      <h2>Registre-se</h2>
      <div>
        <div>

          <img src="/src/assets/pessoa.svg" width="16px"/>
          <input type="email" placeholder="Email" value={criarUser} onChange={(e) => setNewUser(e.target.value)} required/>
        </div>

        <div>
          <img src="/src/assets/lock.svg" width="16px"/>
          <input type="password" placeholder="Senha" value={criarSenha} onChange={(e) => setNewSenha(e.target.value)} required/>
        </div>
        <div>
          <img src="/src/assets/lock.svg" width="16px"/>
          <input type="password" placeholder="Repetir senha" value={repetirSenha} onChange={(e) => setRepetirSenha(e.target.value)}required/>
        </div>
        <button id="Criar" onClick={Registrar}>Criar</button>
      </div>
    </div>
    </>
  )
}
