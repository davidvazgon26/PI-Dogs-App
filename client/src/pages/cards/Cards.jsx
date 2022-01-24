import React from 'react';
import Dogs from '../../components/dogs';
import Order from '../../components/order';
import SearchBar from '../../components/searchBar';


import './cards.css'

const Cards = () => {
	return (
		<>
        	<header>
			    <div className='titulo'>
                <h1>Catálogo de razas</h1>
                </div>
			</header>
                    <div className='menu'>
                    <div className='filtro'><Order/></div>
                    <div className='filtro'><SearchBar/></div>
                    </div>
            <body>
                <div className='cards'>
                    <Dogs className='card'/>
                </div>
            </body>
			
		
            
		
		</>
	);
}

export default Cards;




