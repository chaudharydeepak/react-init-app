import React from 'react'
import  './card-list.style.css'

import {Card} from '../card/card.component'

// this is a functional component.
// this doesnt have access to state / have no state or lifecycle methods.
// this just gets props and does something with the props.

export const CardList = props => {
    return <div className='card-list'>
        {props.monsters.map( monster => (
            // key helps reach update specific item on state change - performance booster.
            <Card key={monster.id} monster={monster}></Card>
        ))}
    </div>;
}



