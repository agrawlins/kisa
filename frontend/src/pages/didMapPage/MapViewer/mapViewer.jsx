import React from 'react';
import Kisa from '../Kisa/kisa';

function MapViewer(props){
    return(
        <div className="row row-spacer">
        <div className="col-md-4">
            <button onClick={() => props.previousKisa()}>Approvals</button>
        </div>
        <div className="col-md-4">
            <Kisa kisa={props.kisa}/>
        </div>
        <div className="col-md-4">
            <button onClick={() => props.nextKisa()}>Sign Out</button>
        </div>
    </div>
    )
}

export default MapViewer;