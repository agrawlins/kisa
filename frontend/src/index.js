import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app"
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const jsxElement = <h1>Our React App</h1>;
console.log(jsxElement);

ReactDOM.render(
    <Router>
        
            <App />
        
    </Router>,
    document.getElementById('root')
);
// ReactDOM.render(<Login />, document.getElementById('root'));
// ReactDOM.render(<DidCreate />, document.getElementById('root'));
// ReactDOM.render(<DidMap />, document.getElementById('root'));
// ReactDOM.render(<DeleteDid />, document.getElementById('root'));
// ReactDOM.render(<KisaCreate />, document.getElementById('root'));
// ReactDOM.render(<KisaMap />, document.getElementById('root'));
// ReactDOM.render(<DeleteKisa />, document.getElementById('root'));
// ReactDOM.render(<PoliceCreate />, document.getElementById('root'));
// ReactDOM.render(<PoliceMap />, document.getElementById('root'));
// ReactDOM.render(<PoliceApprovals />, document.getElementById('root'));
// ReactDOM.render(<DeletePolice />, document.getElementById('root'));