import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import Footer from './Footer/footer';

class CreateKisa extends Component {
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

    createKisa(did){
        this.kisa.push(did);
        this.setState({
            policeNumber: this.kisa.length + 1
        });
    }

    render() {
        return(
            <div className="container-fluid">
                <TitleBar />
                <form className="center">
                    <label>Please Complete the Following:</label> <br/>
                    <input type="text" value={this.state.reason}>First Name:</input><br/>
                    <input type="text" value={this.state.reason}></input>Last Name:<br/>
                    <input type="text" value={this.state.reason}></input>email address:<br/>
                    <input type="text" value={this.state.reason}></input>Password:<br/>
                    <button type="submit" onSubmit= {this.createKisa.bind(this)}>CREATE ACCOUNT</button>
                </form>
                <Footer />
            </div>
        );
    }
}

export default CreateKisa;