import React from 'react'


class InputCurriculo extends React.Component {
  render(){
    const { text_CURRICULO, handleChange} = this.props
    return (       
        <label htmlFor="text_CURRICULO">
        Resumo do currículo:
        <textarea name="text_CURRICULO" id="text_CURRICULO" onChange={handleChange} value={text_CURRICULO} cols="15" rows="5" required></textarea>
        </label>      
    )
  }
}

export default InputCurriculo