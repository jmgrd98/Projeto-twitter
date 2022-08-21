import { useState } from 'react';
import './Input.css'

export function Input(props){


  const [input, setInput] = useState('')

return(

      <input type="text" onChange={e => setInput(e.target.value)} placeholder={props.placeholder}/>

)
}