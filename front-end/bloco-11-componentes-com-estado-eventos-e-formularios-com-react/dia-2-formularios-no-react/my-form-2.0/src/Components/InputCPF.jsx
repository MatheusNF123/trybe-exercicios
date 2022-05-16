import React from 'react'


class InputCPF extends React.Component{
  render(){
    const { text_CPF, handleChange } = this.props
    return (
      <label htmlFor="text_CPF">
      CPF:
      <input type="text" name="text_CPF" onChange={handleChange} value={text_CPF} id="text_CPF" required/>
    </label>
    )
  }
}

export default InputCPF