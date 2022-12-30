import CardStyle from "./index"

export default function Card(props){

    return(
        <CardStyle className="card">
            <span>Nome: </span><p>{props.name}</p>
            <span>Sobrenome: </span><p>{props.surname}</p>
            <span>Email: </span><p>{props.email}</p>
            <span>Telefone: </span><p>{props.number}</p>
            <span>CEP: </span><p>{props.cep}</p>
            <span>Endereço 1: </span><p>{props.address}</p>
            <span>Endereço 2: </span><p>{props.address2}</p>
            <span>Data de nascimento: </span><p>{props.birth}</p>
            <span>CPF: </span><p>{props.cpf}</p>
            <span>Renda Mensal: </span><p>{props.renda}</p>
        </CardStyle>
    )
}