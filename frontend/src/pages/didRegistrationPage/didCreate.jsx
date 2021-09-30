import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import Footer from './Footer/footer';

class CreateDid extends Component {
    constructor(props){
        super(props);
        this.dids = {
            //PULL FROM GOOGLE MAPS API
            reason: [],
            kisa: []
        };
    this.state = {
        didNumber: 0
        }
    }

    createDid(did){
        this.dids.push(did);
        this.setState({
            didNumber: this.dids.length + 1
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
                    <button type="submit" onSubmit= {this.createDid.bind(this)}>DELETE ACCOUNT</button>
                </form>
                <Footer />
            </div>
        );
    }
}

export default CreateDid;