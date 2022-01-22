import {Link} from 'react-router-dom'

export default function Dog({id, name, image}){
    return <div>
    <Link to={`/${name}`}>
        <h3>{name}</h3>
        <img src={image} alt = 'img'/>
    </Link>
       
    </div>
}