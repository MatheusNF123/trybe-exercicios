import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0
    }
    this.escreve1 = this.escreve1.bind(this)
    this.escreve2 = this.escreve2.bind(this)
    this.escreve3 = this.escreve3.bind(this)

  }
   escreve1 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1     
    }))
    console.log(`botao1 ${this.mudacor(this.state.numeroDeCliques1)}`)
  }
   escreve2 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
      
    }))
    console.log(`botao1 ${this.mudacor(this.state.numeroDeCliques2)}`)
  }
   escreve3 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
    console.log(`botao1 ${this.mudacor(this.state.numeroDeCliques3)}`)
  }

  mudacor(num) {
    return num%2 === 0 ? 'green' : 'white';
  }
  render() {
    const {numeroDeCliques1,numeroDeCliques2,numeroDeCliques3} = this.state
    return (
      <>
      <button onClick={this.escreve1} style={{backgroundColor: this.mudacor(numeroDeCliques1)}}> {numeroDeCliques1}</button>
      <button onClick={this.escreve2} style={{backgroundColor: this.mudacor(numeroDeCliques2)}}>{numeroDeCliques2}</button>
      <button onClick={this.escreve3} style={{backgroundColor: this.mudacor(numeroDeCliques3)}}>{numeroDeCliques3}</button>
      </>
    )
  }
}
export default App;