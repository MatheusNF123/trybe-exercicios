import React from 'react'


class InputFullName extends React.Component{
  render(){
    const { text_FULLNAME, handleChange } = this.props
    return (
      <label htmlFor="text_FULLNAME">
      FullName:
      <input type="text" name="text_FULLNAME" onChange={handleChange} value={text_FULLNAME} maxLength='40' id="text_FULLNAME" required/>
    </label>
    )
  }
}

export default InputFullName