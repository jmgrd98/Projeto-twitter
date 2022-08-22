import { Input } from "../inputs/Input";
import { useState } from "react";
//import {AddCard} from '../../components/cards/'

export function Forms1(){
    const [userNome, setUserNome] = useState('')
    const [userSobrenome, setUserSobrenome] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userTelefone, setUserTelefone] = useState('')

    return(
    <div>
        <Input placeholder="Nome" onChange={e => localStorage.setItem('Nome')}/>
        <Input placeholder="Sobrenome" onChange={e => localStorage.setItem('Sobrenome')}/>
        <Input placeholder="Email" onChange={e => localStorage.setItem('Email')}/>
        <Input placeholder="Telefone" onChange={e => localStorage.setItem('Telefone')}/>

        <button id="button" type="submit" >Próximo</button>
    </div>
    )
}

export function Forms2(){
    const [userCEP, setUserCEP] = useState('')
    const [userEndereco1, setUserEndereco1] = useState('')
    const [userEndereco2, setUserEndereco2] = useState('')
    return(
    <div>
        <Input placeholder="CEP" onChange={e => localStorage.setItem('CEP')}/>
      <Input placeholder="Endereço 1" onChange={e => localStorage.setItem('Endereço 1')}/>
      <Input placeholder="Endereço 2" onChange={e => localStorage.setItem('Endereço 2')}/>

      <button id="button" type="submit" >Próximo</button>
    </div>
    )
}

export function Forms3(){
    
    const [userNascimento, setUserNascimento] = useState('')
    const [userCPF, setUserCPF] = useState('')
    const [userRenda, setUserRenda] = useState('')
    const [card, setCard] = useState([])

    function AddCard(e){
        alert('Usuário cadastrado com sucesso!')
        e.preventDefault()
        const newCard = {
            nome: localStorage.getItem('Nome'),
            sobrenome: localStorage.getItem('Sobrenome'),
            email: localStorage.getItem('Email'),
            telefone: localStorage.getItem('Telefone'),
            cep: localStorage.getItem('CEP'),
            endereco1: localStorage.getItem('Endereço 1'),
            endereco2: localStorage.getItem('Endereço 2'),
            nascimento: localStorage.getItem('Nascimento'),
            cpf: localStorage.getItem('CPF'),
            renda: localStorage.getItem('Renda Mensal')
        }
        setCard(prevState => [...prevState, newCard])
    }

    return(
    <div>
     <Input placeholder="Data de Nascimento" onChange={e => localStorage.setItem('Nascimento')}/>
      <Input placeholder="CPF" onChange={e => localStorage.setItem('CPF')}/>
      <Input placeholder="Renda Mensal" onChange={e => localStorage.setItem('Renda Mensal')}/>

      <button id="button" type="submit" onClick={AddCard}>Cadastrar</button>
    </div>
    )
}