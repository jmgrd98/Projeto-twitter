import {Routes as Wrapper, Route, BrowserRouter} from 'react-router-dom'
import Cadastrar from './pages/Cadastrar'
import Clientes from './pages/Clientes'

export default function Routes(){
    return (
    
    <BrowserRouter>
    <Wrapper>

        <Route exact path="/" element={<Cadastrar/>}/>
        <Route path="/clientes" element={<Clientes/>}/>

    </Wrapper >
    </BrowserRouter>

    )
}