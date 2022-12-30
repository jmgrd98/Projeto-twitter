import './index.css';
import Form from '../../components/Form';
import Card from '../../components/Card';


function Cadastrar() {

    // const[card, setCard] = useState([])

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

    <Form/>
    <Card/>
    

      </div>
      </main>

      </body>
    </div>
  );
}

export default Cadastrar;
