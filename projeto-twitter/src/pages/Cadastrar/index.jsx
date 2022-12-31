import './index.css';
import Form from '../../components/Form';
import Card from '../../components/Card';
import {Link} from 'react-router-dom'


function Cadastrar() {

    // const[card, setCard] = useState([])

  return (
    <div className="App">

    <body>
      
    
      <aside>
        <nav>
          <ul>
          <li><Link to='/'>Cadastrar</Link></li>
          <li><Link to="/clientes">Clientes</Link></li>
          </ul>
        </nav>
      </aside>

      <main>

    <div className='card'>

      <h1>Cadastrar</h1>

    <Form/>
    <Card/>
    

      </div>
      </main>

      </body>
    </div>
  );
}

export default Cadastrar;
