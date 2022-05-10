
import './App.css';
import Pokedex from './Pokedex';

import data from './data'

function App() {
  return (
    <div className="App">
    <h1>Pokedex</h1>
   <Pokedex  poke={data}/>
   </div>
  );
}

export default App;
