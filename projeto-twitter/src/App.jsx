import { useState } from 'react';
import './App.css';
import {Input} from './components/inputs/Input'

function App() {

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
          <li><a href="App.jsx">Cadastrar</a></li>
          <li><a href="">Clientes</a></li>
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
    
      <button type="submit">Próximo</button>

    </form>

      </div>
      </main>

      </body>
    </div>
  );
}

export default App;
