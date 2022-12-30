import { useState, useEffect } from 'react';
import './index.css';
import Card from '../../components/Card';
import {Link} from 'react-router-dom'


function Clientes() {
 
  const [card, setCard] = useState([])

  useEffect((newCard) => {
  const card = localStorage.getItem(newCard);
  if (card) {
   setCard(prevstate => [...card, newCard]);
  }
  }, []);
  

  return (
    <div className="App">

    <body>
      
    
      <aside>
        <nav>
          <li><Link to='/perfil'>Cadastrar</Link></li>
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
