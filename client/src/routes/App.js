import { Route, Routes } from 'react-router-dom';
import './App.css';

//Componentes
// import Dogs from '../components/dogs';
// import Order from '../components/order';
// import SearchBar from '../components/searchBar';
import DogDetail from '../components/dogDetail'
import AddDog from '../components/addDog';
import Home from '../pages/home/Home';

//Pages
import Cards from '../pages/cards/Cards'

function App() {
  return (
    <div className="App">
      {/* <h1>Henry Dogs</h1>
      <SearchBar/>
      <Order/> */}
      <Routes>
        <Route  path='/' element={ <Home/>} />
        <Route  path='/home' element={ <Cards/>} />
        <Route  path='/:name'  element={<DogDetail/>} />
        <Route  path='/add'  element={<AddDog/>} />
      </Routes>
     
    </div>
  );
}

export default App;
