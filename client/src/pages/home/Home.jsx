import React from 'react';
import { Link } from "react-router-dom";


import './home.css'

const Home = () => {
	return (
		<>
        	<header>
				<div className='titulo'>
					<h1>Bienvenido a Dog App</h1>
				</div>
			</header>
			
		
			<Link to="/home">
				<button className = "btn" type="button">INGRESAR</button>
			</Link>
		
		</>
	);
}

export default Home;