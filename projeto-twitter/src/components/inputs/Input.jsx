import { useState } from 'react';
import './Input.css'

export function Input(props){


  const [input, setInput] = useState('')

return(

      <input type="text" onChange={e => localStorage.setItem(props.placeholder, e.target.value)} placeholder={props.placeholder}/>

)
}