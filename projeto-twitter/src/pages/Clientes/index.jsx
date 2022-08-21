import { useState } from 'react';
import './index.css';
import Card from '../../components/cards';

function Clientes() {

  const [userNome, setUserNome] = useState('')
  const [userSobrenome, setUserSobrenome] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userTelefone, setUserTelefone] = useState('')
  const [user, setUser] = useState([])

  function AddUser(event){
    event.preventDefault()
    const newUser = {
      nome: userNome,
      sobrenome: userSobrenome,
      email: userEmail,
      telefone: userTelefone
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
