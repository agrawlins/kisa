import React from 'react';
import './titleBar.css';
import value from './valueRandomizer';


function TitleBar(props) {
    return(
        <div className="row row-spacer">
            <div className="col-md-12" style={{padding:0}}>
                <h1 className="titlebar-nav">
                 Today's Value:
                 {value}
                </h1>
            </div>
        </div>
    )
}

export default TitleBar;