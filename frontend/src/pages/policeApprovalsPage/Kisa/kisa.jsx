import React from 'react';
import './kisa.css';

function Kisa(props){
    return(
        <div className="kisa">
            <div className="cover">
                <h1 className="title">{props.kisa.title}</h1>
                <h2 className="author">{props.kisa.author}</h2>
                <h4 className="description">{props.kisa.description}</h4>
            </div>
        </div>
    );
}

export default Kisa;