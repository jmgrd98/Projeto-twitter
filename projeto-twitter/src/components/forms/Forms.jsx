import { useState } from 'react';

export function Forms(props){

  const [userNome, setUserNome] = useState('')
  const [userSobrenome, setUserSobrenome] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userTelefone, setUserTelefone] = useState('')
  const [user, setUser] = useState([])

return(
    
    <form action="" method="get">

      <h1>Cadastrar</h1>

      <input type="text" placeholder='Nome' onChange={e => setUserNome(e.target.value)}/>
      <input type="text" placeholder='Sobrenome' onChange={e => setUserSobrenome(e.target.value)}/>
      <input type="text" placeholder='Email' onChange={e => setUserEmail(e.target.value)}/>
      <input type="text" placeholder='Telefone' onChange={e => setUserTelefone(e.target.value)}/>

      

    </form>
)
}