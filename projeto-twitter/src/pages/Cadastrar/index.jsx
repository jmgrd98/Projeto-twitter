import { useState } from 'react';
import './index.css';
import {AddCard} from '../../components/cards/index'
import {Forms1, Forms2, Forms3} from '../../components/forms'

function Cadastrar() {

    const[card, setCard] = useState([])

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

  return (
    <div className="App">

    <body>
      
    
      <aside>
        <nav>
          <li><a href="/">Cadastrar</a></li>
          <li><a href="/clientes">Clientes</a></li>
        </nav>
      </aside>

      <main>

    <div id="card">

      <h1>Cadastrar</h1>

    <Forms1/>
    <Forms2/>
    <Forms3/>
    

      </div>
      </main>

      </body>
    </div>
  );
}

export default Cadastrar;
