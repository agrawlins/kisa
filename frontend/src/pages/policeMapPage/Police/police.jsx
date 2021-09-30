import React from 'react';
import './police.css';

function Police(props){
    return(
        <div className="police">
            <div className="cover">
                <h1 className="title">{props.police.title}</h1>
                <h2 className="author">{props.police.author}</h2>
                <h4 className="description">{props.police.description}</h4>
            </div>
        </div>
    );
}

export default Police;