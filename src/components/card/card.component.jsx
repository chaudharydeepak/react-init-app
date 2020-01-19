import React from 'react';

import  './card.style.css'

// this is a functional component.
// this doesnt have access to state / have no state or lifecycle methods.
// this just gets props and does something with the props.

export const Card = props => (
    <div className="card-container">
        <img
            alt='monster' 
            src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
    </div>
);