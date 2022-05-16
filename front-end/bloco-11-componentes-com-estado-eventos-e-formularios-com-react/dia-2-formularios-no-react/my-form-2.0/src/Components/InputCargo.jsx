import React from 'react'


class InputCargo extends React.Component {
  render(){
    const { Cargo, handleChange} = this.props
    return (       
        <label htmlFor="Cargo">
        Cargo:
        <textarea name="Cargo" id="Cargo" maxLength='40' onChange={handleChange} value={Cargo}  required></textarea>
        </label>    
    )
  }
}

export default InputCargo