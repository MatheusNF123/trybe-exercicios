import React from 'react'


class InputCidade extends React.Component{
  render(){
    const { text_CIDADE, handleChange } = this.props
    return (
      <label htmlFor="text_CIDADE">
      Cidade:
      <input type="text" name="text_CIDADE" onChange={handleChange} value={text_CIDADE} /* onBlur={}  */maxLength='28' id="text_CIDADE" required/>
    </label>
    )
  }
}

export default InputCidade