import Input from "../Input"
import './index.css'
// import {AddCard} from '../../components/cards/'

export default function Form(){
    // const [userNome, setUserNome] = useState('')
    // const [userSobrenome, setUserSobrenome] = useState('')
    // const [userEmail, setUserEmail] = useState('')
    // const [userTelefone, setUserTelefone] = useState('')
    // const [userCEP, setUserCEP] = useState('')
    // const [userEndereco1, setUserEndereco1] = useState('')
    // const [userEndereco2, setUserEndereco2] = useState('')
    // const [userNascimento, setUserNascimento] = useState('')
    // const [userCPF, setUserCPF] = useState('')
    // const [userRenda, setUserRenda] = useState('')
    // const [card, setCard] = useState([])

  // Ver se no localStorage tem alguma coisa
  // Se existir, salvar em uma const
  // Salvar um array no localstorage com o valor anterior e o atual
  // Transformar a array com o JSON.stringify
  //

  function Alert(){
    alert('Usuário cadastrado com sucesso!')
  }

   return(
    
    <div id="step1">
        <Input placeholder="Nome: " />
        <Input placeholder="Sobrenome: " />
        <Input placeholder="Email: " />
        <Input placeholder="Telefone: "/>
        <Input placeholder="CEP: " />
        <Input placeholder="Endereço 1: " />
        <Input placeholder="Endereço 2: " />
        <Input placeholder="CPF: " />
        <Input placeholder="Nascimento: " />
        <Input placeholder="Renda Mensal: " />
      <button id="button" type="button" onClick={Alert}>Próximo</button>
    </div>
   )
}

