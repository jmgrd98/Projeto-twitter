import { useState } from 'react'
import './index.css'

export default function Card(props){

    const [cards, setCards] = useState([])

    return(
        <div id="card">
            <p><span>Nome: </span>{localStorage.getItem('Nome')}</p>
            <p><span>Sobrenome: </span>{localStorage.getItem('Sobrenome')}</p>
            <p><span>Email: </span>{localStorage.getItem('Email')}</p>
            <p><span>Telefone: </span>{localStorage.getItem('Telefone')}</p>
            <p><span>CEP: </span>{localStorage.getItem('CEP')}</p>
            <p><span>Endereço 1: </span>{localStorage.getItem('Endereço 1')}</p>
            <p><span>Endereço 2: </span>{localStorage.getItem('Endereço 2')}</p>
            <p><span>Data de nascimento: </span>{localStorage.getItem('Nascimento')}</p>
            <p><span>CPF: </span>{localStorage.getItem('CPF')}</p>
            <p><span>Renda Mensal: </span>{localStorage.getItem('Renda Mensal')}</p>
        </div>
    )
}