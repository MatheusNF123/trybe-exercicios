import React from 'react'


class InputEstado extends React.Component{
  render(){
    const { estado, handleChange } = this.props
    return (
      <label htmlFor="estado">
      Estado:
        <input type='checkbox' name="estado" onChange={handleChange} value={estado} id="estado" required/>
      </label>
    )
  }
}

export default InputEstado