import React, {Component} from 'react';
import './Card.css';

class  Card extends Component {
  

  state ={
    pokemonID : this.props.id,
    pokemon: {}
  }

  componentDidMount(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonID}`)
    .then((response)=> {
      return response.json()
    })
    .then((result)=> {
      this.setState({pokemon: result})
    })
  }

    
  render () {return (
       <div className='pokemonCard'>        
        <img alt='pokemon' src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.pokemonID}.png?`} width="200" height="200" />
        <span className='name'>{this.state.pokemon.name} </span>        
       </div>
     )}

};

export default Card;