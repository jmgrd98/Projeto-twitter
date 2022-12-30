import './index.css';
import Card from '../../components/Card';
import {Link} from 'react-router-dom'

// const cards = [

// ]

function Clientes() {
  

  return (
    <div className="App">

    <body>
    
    
      <aside>
        <nav>
          <ul>
          <li><Link to='/'>Cadastrar</Link></li>
          <li><Link to='/clientes'>Clientes</Link></li>
          </ul>
        </nav>
      </aside>

      <main>

    <div id="card">

      <h1>Clientes</h1>

      <Card
        name='João Marcelo'
        surname='Dantas'
        email='jmgrd98@gmail.com'
        phone='61 996386998'
        cep='73255-901'
        address='Cond. Mansões Entrelagos'
        address2='etapa 2 conjunto i casa2'
        birth='01/10/1998'
        cpf='041.125.851-60'
        renda='R$2.000'
      />
   

      </div>
      </main>

      </body>
    </div>
  );
}


export default Clientes;
