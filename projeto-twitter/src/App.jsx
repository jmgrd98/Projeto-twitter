import { useState } from 'react';
import './App.css';
import {Forms} from './components/forms/Forms'

function App() {

  const [userNome, setUserNome] = useState('')
  const [userSobrenome, setUserSobrenome] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userTelefone, setUserTelefone] = useState('')
  const [user, setUser] = useState([])

  function handleAddUser(){
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
          <li><a href="App.jsx">Cadastrar</a></li>
          <li><a href="">Clientes</a></li>
        </nav>
      </aside>

      <main>

    <div id="card">

      <Forms />

      <button type="submit" onClick={handleAddUser}>Próximo</button>
      </div>
      </main>

      </body>
    </div>
  );
}

export default App;
