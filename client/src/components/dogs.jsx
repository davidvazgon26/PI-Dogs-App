import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDogs } from "../store/actions"
import Dog from "./dog"

import '../styles/listDogs.css'

console.log(fetchDogs())


export default function Dogs(){
    let dogs = useSelector((state)=>state.filteredDogs)
    let dispatch = useDispatch()
    useEffect(() =>{
        dispatch(fetchDogs())
        
    }, [])
    return <div className="dogsCards">
                {dogs.map((dog)=>{
                    return <Dog id = {dog.id} name = {dog.name} image = {dog.image}/>
                })}
           </div>
}