import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router"
import Dog from './dog';

export default function DogDetail(){

    const[dog, setDog] = useState(null)
    let {name} = useParams()
    useEffect(()=>{
        axios.get('http://localhost:3001/dogs/?name=' + name)
        .then((response)=>{
            setDog(response.data)
        })
        return () =>{
            setDog(null)
            // Limpiar, si trabajan con redux
        }
    },[])

    return <div>
    {console.log(dog)}
    {
        dog ? dog.length > 1 ? <div>

        {dog.map((d)=>{
                    return <Dog key = {d.id} name = {d.name} image = {d.image}/>
                })}

        </div> :<div> <h3>{dog[0].name}</h3> <img src={dog.image} alt = 'img'/> </div> : <div>loading</div>
    }
    </div>
     
}  

             


                // return <div>
                // {
                //     dog ?
                //     <>
                //         <h3>{dog[0].name}</h3>
                //          <img src={dog.image} alt = 'img'/>
                   
                //     </>:
                //         <div>loading</div>
                // }
                // </div>