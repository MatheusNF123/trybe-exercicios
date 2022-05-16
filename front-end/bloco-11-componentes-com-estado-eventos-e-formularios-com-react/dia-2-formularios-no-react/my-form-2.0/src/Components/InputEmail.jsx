import React from 'react'


class InputEmail extends React.Component{
  render(){
    const { email, handleChange } = this.props
    return (
      <label htmlFor="email">
      Email:
      <input type="email" name="email" onChange={handleChange} value={email} maxLength='50' id="email" required/>
    </label>
    )
  }
}

export default InputEmail