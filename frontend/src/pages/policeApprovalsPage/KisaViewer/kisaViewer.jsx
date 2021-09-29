import React from 'react';
import Kisa from '../Kisa/kisa';

function KisaViewer(props){
    return(
        <div className="row row-spacer">
        <div className="col-md-4">
            <button onClick={() => props.previousKisa()}>Previous Kisa</button>
        </div>
        <div className="col-md-4">
            <Kisa kisa={props.kisa}/>
        </div>
        <div className="col-md-4">
            <button onClick={() => props.nextKisa()}>Next Kisa</button>
        </div>
    </div>
    )
}

export default KisaViewer;