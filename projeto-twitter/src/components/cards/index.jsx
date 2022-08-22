import './index.css'

export default function Card(props){

    const cardObject = {
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

    function addCard(e){
        alert('Usuário cadastrado com sucesso!')
        e.preventDefault()
        localStorage.setItem('cardObject', JSON.stringify(cardObject))
        console.log(cardObject)
    }

    return(
        <div id="card">
            <p><span>Nome: </span>{localStorage.getItem('Nome')}</p>
            <p><span>Sobrenome: </span>{props.sobrenome}</p>
            <p><span>Email: </span>{props.email}</p>
            <p><span>Telefone: </span>{props.telefone}</p>
            <p><span>CEP: </span>{props.cep}</p>
            <p><span>Endereço 1: </span>{props.endereco1}</p>
            <p><span>Endereço 2: </span>{props.endereco2}</p>
            <p><span>Data de nascimento: </span>{props.nascimento}</p>
            <p><span>CPF: </span>{props.cpf}</p>
            <p><span>Renda Mensal: </span>{props.renda}</p>
        </div>
    )
}