import React from 'react'
import { connect } from 'react-redux'
import { actionThunk } from './redux/action'
class App extends React.Component {
  state = {
    select: 'reactjs'
  }

  onInputChange = ({target}) => {
    const value = target.value
    this.setState({select: value}, this.fazerRequisicao(value))

  }

  componentDidMount() {
    const {select} = this.state
    this.fazerRequisicao(select)
  }

  fazerRequisicao = (a) => {
    const {dispatch} = this.props
    console.log(this.props);
    dispatch(actionThunk(a))
   
  }

  render() {
    const {select} = this.state
    const {data, loading, isError} = this.props
   
  return (
    <>
    <h1>Selected: {select}</h1>
    <label htmlFor="stack">
      <select name="select" value={select} id="stack" onChange={this.onInputChange}>
        <option value="reactjs"  >reactjs</option>
        <option value="frontend" >frontend</option>
      </select>
    </label>
    {isError && window.alert('ops... algo deu errado')}
    {!loading && data ? data.map((elemento) => <ul> <li>{elemento.data.title}</li> </ul>): <h4>carregando...</h4>}
    </>
  );
}
}

const mapStateToProps = (state) => ({
  data: state.reducer.data.children,
  loading: state.reducer.loading,
  isError: state.reducer.isError
})

export default connect(mapStateToProps)(App);
