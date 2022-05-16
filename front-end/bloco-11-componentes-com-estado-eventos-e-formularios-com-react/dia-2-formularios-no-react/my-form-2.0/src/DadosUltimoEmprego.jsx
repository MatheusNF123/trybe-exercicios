import React from 'react'


class DadosUltimoEmprego extends React.Component {
  render(){
    return (
        <fieldset>Dados do seu Último Emprego
        <div>
        <label htmlFor="text_CURRICULO">
        Resumo do currículo:
        <textarea name="text_CURRICULO" id="text_CURRICULO" onChange={this.handleChange} value={text_CURRICULO} cols="15" rows="5" required></textarea>
        </label>
        <label htmlFor="Cargo">
        Cargo:
        <textarea name="Cargo" id="Cargo" maxLength='40' onChange={this.handleChange} value={Cargo}  required></textarea>
        </label>
        <label htmlFor="">Descrição
        <input type="text" name="Descricao" id="Descricao" onChange={this.handleChange} value={Descricao}  maxLength='500' required />
        </label>
        <button type='button'>Mostrar Dados</button>
        <button type='button'>Limpar dados</button>
        <button type='submit'  onClick={this.handleClick} >submit</button>
        </div>
        </fieldset>
    )
  }
}

export default DadosUltimoEmprego