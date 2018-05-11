import React, { Component } from 'react';
import './Card.css';
const Card = (props) => (
    <div className="col-xs-3 hero-card" 
        style={{ backgroundImage: `url("${props.image}")` }}
        onClick={() => props.cardClickedOn(props.id)}
    >
       
    </div>
);

export default Card;