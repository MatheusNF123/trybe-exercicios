import './App.css';


// const Task = ({value}) => {
//   return (
//     <li>{value}</li>
//   )
// }

const tarefas = ['acordar', 'jogar', 'tomar cafe', 'almoçar', 'tomar banho'] 

function App() {
  const task = (value) => {
    return (
      <li key={value}>{value}</li>
    )
  }
  
  return (
    <div className="App">
      <h1>Hello, World</h1> 
      <div>
        <ol>{tarefas.map(elemento => ( task(elemento)))}</ol>
      </div>
      {/* {task('Acordar!')} */}
      {/* <Task value={'Acordar'}/> */}
    </div>
  );
}

export default App;
