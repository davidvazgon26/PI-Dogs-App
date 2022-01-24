import {Link} from 'react-router-dom'

import '../styles/dog.css'

export default function Dog({id, name, image}){
    return <div className='dogCard'>
    <Link to={`/${name}`}>
        <h3>{name}</h3>
        <img src={image} alt = 'img'/>
    </Link>
       
    </div>
}