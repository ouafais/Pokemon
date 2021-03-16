import React from 'react';
import './Card.css';

function Card (props) {
  async function  listPokemon(id){
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const pokemon= await response.json();
    return pokemon;
}
  return (
       <div className='pokemonCard'>        
        <img alt='pokemon' src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png?`} width="200" height="200" />
        <h2>name of pokemon</h2>
       </div>
     );

};

export default Card;