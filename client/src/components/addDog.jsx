import axios from "axios"
import { useState } from "react"
// import {Redirect} from 'react-router'
import { useNavigate } from 'react-router'

export default function AddDog() {
    const [dog, setDog] = useState({})
    let history = useNavigate()
    function onInputChange(e) {
        e.preventDefault()
        setDog({
            ...dog,
            [e.target.name]: e.target.value
        })
    }
    function onSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/dogs/', dog)
        .then(()=>{
          history.push('/') 
        })
        
    }
    return <form onSubmit = {onSubmit}>
    <label htmlFor="">Nombre</label>
        <input onChange={onInputChange} name='name' type='text' value={dog.name} />
    <label  htmlFor="">Imagen</label>
        <input onChange= {onInputChange} name='image' type='text' value={dog.image}/>

        <input type='submit' />
    </form>
    
}