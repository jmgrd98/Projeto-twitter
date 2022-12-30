import './index.css'

export default function Input(props){

return(

      <input type="text" name={props.placeholder}onChange={e => localStorage.setItem(props.placeholder, e.target.value)} placeholder={props.placeholder}/>

)
}