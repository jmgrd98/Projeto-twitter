import { useState, useEffect } from 'react';
import './index.css';
import Card from '../../components/cards';


function Clientes() {
 
  const [card, setCard] = useState([])

  function AddCard(e){
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

  useEffect((newCard) => {
  const card = localStorage.getItem(newCard);
  if (card) {
   setCard(prevstate => [...prevstate, newCard]);
  }
  }, []);
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
    {
    //card.map(card => <Card
      //                  key={localStorage.getItem('Nome')}
        //                nome={localStorage.getItem('Nome')}
          //              sobrenome={localStorage.getItem('Sobrenome')}
            //            email={localStorage.getItem('Email')}
              //          telefone={localStorage.getItem('Telefone')}
                //        cep={localStorage.getItem('CEP')}
                  //      endereco1={localStorage.getItem('Endereço 1')}
                  //      endereco2={localStorage.getItem('Endereço 2')}
                   //     nascimento={localStorage.getItem('Data de Nascimento')}
                    //    cpf={localStorage.getItem('CPF')}
                     //   renda={localStorage.getItem('Renda Mensal')}/>)
    }

    <Card/>
      </div>
      </main>

      </body>
    </div>
  );
}

export default Clientes;
