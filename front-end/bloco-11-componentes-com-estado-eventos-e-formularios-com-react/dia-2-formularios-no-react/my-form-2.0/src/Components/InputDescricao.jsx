import React from 'react'


class InputDescricao extends React.Component {
  render(){
    const { Descricao, handleChange} = this.props
    return (       
        <label htmlFor="">
        Descrição
        <input type="text" name="Descricao" id="Descricao" onChange={handleChange} value={Descricao}  maxLength='500' required />
        </label>       
    )
  }
}

export default InputDescricao