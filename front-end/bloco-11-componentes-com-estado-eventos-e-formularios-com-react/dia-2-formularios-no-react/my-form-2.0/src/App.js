import './App.css';
import React from 'react';
import InputCidade from './Components/InputCidade';
import InputCPF from './Components/InputCPF';
import InputEmail from './Components/InputEmail';
import InputTipo from './Components/InputTipo';
import InputFullName from './Components/InputFullName';
import InputEndereço from './Components/InputEndereço';
import InputEstado from './Components/InputEstado';
import InputCurriculo from './Components/InputCurriculo';
import InputDescricao from './Components/InputDescricao';
import InputCargo from './Components/InputCargo';

class App extends React.Component {
  state = {
    text_FULLNAME: '',
    email: '',
    text_CPF: '',
    text_ENDERECO: '',
    text_CIDADE: '',
    estado: false,
    radio: false,
    text_CURRICULO: '',
    Cargo: '',
    Descricao: ''

  }

  handleChange = ({target}) => {
    const { name } = target
    const value = target.type === 'checkbox' || target.type === 'radio' ? target.checked : target.value
    this.setState({[name]: value})
  }

 
  render() {
    const { text_FULLNAME, email, text_CPF, text_ENDERECO, text_CIDADE, estado, Tipo, text_CURRICULO, Cargo, Descricao} = this.state
  return (
    <div className="App">
      <form action="">
      <fieldset>MEU FORMULÁRIO
      <div>
      <InputFullName text_FULLNAME={text_FULLNAME} handleChange={this.handleChange}/>
      <InputEmail email={email} handleChange={this.handleChange}/>
      <InputCPF text_CPF={text_CPF} handleChange={this.handleChange}/>
      <InputEndereço text_ENDERECO={text_ENDERECO} handleChange={this.handleChange}/>
      <InputCidade text_CIDADE={text_CIDADE} handleChange={this.handleChange}/>
      <InputEstado estado={estado} handleChange={this.handleChange}/>
      <InputTipo Tipo={Tipo} handleChange={this.handleChange}/>
      </div>
      </fieldset>
        

      <fieldset>Dados do seu Último Emprego
        <div>
        <InputCurriculo text_CURRICULO={text_CURRICULO} handleChange={this.handleChange}/>
        <InputCargo Cargo={Cargo} handleChange={this.handleChange}/>
        <InputDescricao Descricao={Descricao} handleChange={this.handleChange}/>
        <button type='button'>Mostrar Dados</button>
        <button type='reset'>Limpar dados</button>
        <button type='submit'  onClick={this.handleClick} >submit</button>
        </div>
        </fieldset>

        
      </form>
    </div>
  );
}
}
export default App;
