import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import Footer from './Footer/footer';

class CreatePolice extends Component {
    constructor(props){
        super(props);
        this.dids = {
            //PULL FROM GOOGLE MAPS API
            reason: [],
            kisa: []
        };
    this.state = {
        policeNumber: 0
        }
    }

    createPolice(did){
        this.dids.push(did);
        this.setState({
            policeNumber: this.dids.length + 1
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
                    <button type="submit" onSubmit= {this.createPolice.bind(this)}>CREATE ACCOUNT</button>
                </form>
                <Footer />
            </div>
        );
    }
}

export default CreatePolice;