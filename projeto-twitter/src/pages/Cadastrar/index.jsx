import { useState } from 'react';
import './index.css';
import {Input} from '../../components/inputs/Input'

function Cadastrar() {

  const [user, setUser] = useState([])

  function AddUser(event){
    event.preventDefault()
    const newUser = {
      nome: localStorage.getItem('Nome'),
      sobrenome: localStorage.getItem('Sobrenome'),
      email: localStorage.getItem('Email'),
      telefone: localStorage.getItem('Telefone')
    }
    setUser(prevState => [...prevState, newUser])
  }

  function Alert(e){
    e.preventDefault()
    alert('Usuário cadastrado com sucesso!')
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

    <form action="" method="get" onSubmit={AddUser}>

      <h1>Cadastrar</h1>

    
      <Input placeholder="Nome"/>
      <Input placeholder="Sobrenome"/>
      <Input placeholder="Email"/>
      <Input placeholder="Telefone"/>
    
      <button type="submit" onClick={Alert} onClick={AddUser}>Próximo</button>

    </form>

      </div>
      </main>

      </body>
    </div>
  );
}

export default Cadastrar;
