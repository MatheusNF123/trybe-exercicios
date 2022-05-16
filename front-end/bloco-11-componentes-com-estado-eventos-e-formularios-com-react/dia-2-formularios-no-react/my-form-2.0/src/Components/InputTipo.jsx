import React from 'react'


class InputTipo extends React.Component{
  render(){
    const { radio, handleChange } = this.props
    return (
      <label htmlFor="radio">
      Tipo:
        <input type="radio" name="radio" id="radio" onChange={handleChange} value={radio} required/>
      </label>
    )
  }
}

export default InputTipo