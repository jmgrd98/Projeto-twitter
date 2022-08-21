import './index.css'

export default function Card(){
    return(
        <div id="card">
            <p><span>Nome:</span> {localStorage.getItem('Nome')}</p>
            <p><span>Sobrenome:</span> {localStorage.getItem('Sobrenome')}</p>
            <p><span>Email:</span> {localStorage.getItem('Email')}</p>
            <p><span>Telefone:</span> {localStorage.getItem('Telefone')}</p>
        </div>
    )
}