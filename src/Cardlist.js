import React from 'react';
import Card from './Card.js';
import './Cardlist.css';

 function Cardlist() {
   
    //create a table of cards that I will return after
    const cards = [];
    for (let i=1; i<=150; i++) {
        
        cards.push(<Card key={i} id={i} />)
    }
         
       return(
        <div className='listepokemon'>
         {cards}
        </div>
     );

    
   

};

export default Cardlist;