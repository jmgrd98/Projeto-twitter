import './index.css'

export default function Card(props){

    return(
        <div id="card">
            <p><span>Nome: </span>{props.name}</p>
            <p><span>Sobrenome: </span>{props.surname}</p>
            <p><span>Email: </span>{props.email}</p>
            <p><span>Telefone: </span>{props.number}</p>
            <p><span>CEP: </span>{props.cep}</p>
            <p><span>Endereço 1: </span>{props.address}</p>
            <p><span>Endereço 2: </span>{props.address2}</p>
            <p><span>Data de nascimento: </span>{props.birth}</p>
            <p><span>CPF: </span>{props.cpf}</p>
            <p><span>Renda Mensal: </span>{props.renda}</p>
        </div>
    )
}