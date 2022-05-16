import React from 'react'


class InputEndereço extends React.Component{
  render(){
    const { text_ENDERECO, handleChange } = this.props
    return (
      <label htmlFor="text_ENDERECO">
          Endereço:
          <input type="text" name="text_ENDERECO" onChange={handleChange} value={text_ENDERECO} maxLength='200' id="text_ENDERECO" required/>
        </label>
    )
  }
}

export default InputEndereço