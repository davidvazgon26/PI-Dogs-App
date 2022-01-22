import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDogs } from "../store/actions"
import Dog from "./dog"

export default function Dogs(){
    let dogs = useSelector((state)=>state.filteredDogs)
    let dispatch = useDispatch()
    useEffect(() =>{
        dispatch(fetchDogs())
        
    }, [])
    return <div>
                {dogs.map((dog)=>{
                    return <Dog id = {dog.id} name = {dog.name} image = {dog.image}/>
                })}
           </div>
}