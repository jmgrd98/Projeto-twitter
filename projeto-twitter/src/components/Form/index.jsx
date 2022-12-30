import { Input } from "../Input/Input";
import { useState } from "react";
// import {AddCard} from '../../components/cards/'

export function Forms(){
    const [userNome, setUserNome] = useState('')
    const [userSobrenome, setUserSobrenome] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userTelefone, setUserTelefone] = useState('')
    const [userCEP, setUserCEP] = useState('')
    const [userEndereco1, setUserEndereco1] = useState('')
    const [userEndereco2, setUserEndereco2] = useState('')
    const [userNascimento, setUserNascimento] = useState('')
    const [userCPF, setUserCPF] = useState('')
    const [userRenda, setUserRenda] = useState('')
    const [card, setCard] = useState([])

  // Ver se no localStorage tem alguma coisa
  // Se existir, salvar em uma const
  // Salvar um array no localstorage com o valor anterior e o atual
  // Transformar a array com o JSON.stringify
  //

  function Alert(){
    alert('Usuário cadastrado com sucesso!')
  }

   return(
    
    <div id="step1">
        <Input placeholder="Nome" onChange={e => localStorage.setItem(e.target.value)}/>
        <Input placeholder="Sobrenome" onChange={e => localStorage.setItem(e.target.value)}/>
        <Input placeholder="Email" onChange={e => localStorage.setItem(e.target.value)}/>
        <Input placeholder="Telefone" onChange={e => localStorage.setItem(e.target.value)}/>
        <Input placeholder="CEP" onChange={e => localStorage.setItem(e.target.value)}/>
        <Input placeholder="Endereço 1" onChange={e => localStorage.setItem(e.target.value)}/>
        <Input placeholder="Endereço 2" onChange={e => localStorage.setItem(e.target.value)}/>
        <Input placeholder="CPF" onChange={e => localStorage.setItem(e.target.value)}/>
        <Input placeholder="Nascimento" onChange={e => localStorage.setItem(e.target.value)}/>
      ` <Input placeholder="Renda Mensal" onChange={e => localStorage.setItem(e.target.value)}/>
      <button id="button" type="button" onClick={Alert}>Próximo</button>
    </div>
   )
}

