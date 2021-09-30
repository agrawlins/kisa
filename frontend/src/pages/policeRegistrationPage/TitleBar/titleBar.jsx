import React from 'react';
import './titleBar.css';

function TitleBar(props) {
    return(
        <div className="row row-spacer">
            <div className="col-md-12" style={{padding:0}}>
                <h1 className="titlebar-nav">
                In Order to Protect Others, <br/> We Need to Know <br/> Who You Are!
                </h1>
            </div>
        </div>
    )
}

export default TitleBar;