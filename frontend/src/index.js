import React from 'react';
import ReactDOM from 'react-dom';
import PoliceApprovals from './pages/policeApprovalsPage/policeApprovals';
import 'bootstrap/dist/css/bootstrap.css';

const jsxElement = <h1>Our React App</h1>;
console.log(jsxElement);

ReactDOM.render(<PoliceApprovals />, document.getElementById('root'));