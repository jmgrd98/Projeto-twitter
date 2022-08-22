import './index.css'

export default function Card(props){

    return(
        <div id="card">
            <p><span>Nome:</span>{props.nome}</p>
            <p><span>Sobrenome:</span>{props.sobrenome}</p>
            <p><span>Email:</span>{props.email}</p>
            <p><span>Telefone:</span>{props.telefone}</p>
        </div>
    )
}