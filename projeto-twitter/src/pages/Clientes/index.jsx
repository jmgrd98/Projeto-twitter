import { useState } from 'react';
import './index.css';
import Card from '../../components/cards';

function Clientes() {
  const [user, setUser] = useState([])

  function handleAddUser(event){
    event.preventDefault()
    const newUser = {
      nome: localStorage.getItem('Nome'),
      sobrenome: localStorage.getItem('Sobrenome'),
      email: localStorage.getItem('Email'),
      telefone: localStorage.getItem('Telefone')
    }
    setUser(prevState => [...prevState, newUser])
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

      <h1>Clientes</h1>
    
        <Card/>

      </div>
      </main>

      </body>
    </div>
  );
}

export default Clientes;
