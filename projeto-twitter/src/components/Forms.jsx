export function Forms(props){

return(
    
    <form action="" method="get">

      <h1>Cadastrar</h1>

      <input type="text" placeholder='Nome' onChange={e => console.log(e.target.value)}/>
      <input type="text" placeholder='Sobrenome'/>
      <input type="text" placeholder='Email'/>
      <input type="text" placeholder='Telefone'/>

      <button type="submit">Próximo</button>

    </form>
)
}