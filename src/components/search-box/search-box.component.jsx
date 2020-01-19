import React from 'react';
import './search-box.style.css';

// this is a functional component.
// this doesnt have access to state / have no state or lifecycle methods.
// this just gets props and does something with the props.

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}/>   
);