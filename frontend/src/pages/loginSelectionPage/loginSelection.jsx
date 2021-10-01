import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import Footer from './Footer/footer';

class LoginSelection extends Component {
    constructor(props){
        super(props);
        this.kisa = {
            //PULL FROM GOOGLE MAPS API
            reason: [],
            kisa: []
        };
    this.state = {
        policeNumber: 0
        }
    }

    render() {
        return(
            <div className="container-fluid">
                <TitleBar />
                    <button onClick={<a href="./didRegistrationPage"/>}>I'M LOOKING FOR PROTECTION</button> <br />
                    <button onClick={<a href="./kisaRegistrationPage"/>}>I'M LOOKING TO PROTECT OTHERS</button> <br />
                    <button onClick={<a href="./policeRegistrationPage"/>}>I WORK IN LAW ENFORCEMENT</button>
                <Footer />
            </div>
        );
    }
}

export default LoginSelection;