
import './App.css';

class App extends React.Component {
  state = {
    objDog = '',
    loading: true
  }

  componentDidMount() {
    this.requisicao()
  }

  requisicao = async () => {
    const request = await fetch('https://dog.ceo/api/breeds/image/random')
    const objeto = await request.json()
    this.setState({
      objDog: objeto,
      loading: false
    })
  }
  render(){
    const { loading } = this.state
    loading ? <h1>Loading...</h1> :
      (
      <img src={loading.message} alt='alguma coisa'/>
  );
}

}

export default App;


