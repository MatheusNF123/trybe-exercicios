import React from 'react'
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
    render() {
        const {poke} = this.props
        return (
            <div className="pokedex">
            {poke.map(elemento => <Pokemon key={elemento.id} pokemon={elemento}/>)}
            </div>
        )
    }
}


export default Pokedex