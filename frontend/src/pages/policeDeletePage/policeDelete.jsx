import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import TitleBar from './TitleBar/titleBar';
import Footer from './Footer/footer';

class DeletePolice extends Component {
    constructor(props){
        super(props);
        this.policemen = [
            //PULL FROM GOOGLE MAPS API
            {GoogleApiWrapper},
        ];
    this.state = {
        policeNumber: 0
        }
    }

    deletePolice(police){
        this.policemen.push(police);
        this.setState({
            policeNumber: this.policemen.length - 1
        });
    }

    render() {
        return(
            <div className="container-fluid">
                <TitleBar />
                <form className="center">
                    <label>WHY ARE YOU LEAVING?</label> <br/>
                    <input type="textarea" value={this.state.reason} /><br/>
                    <button type="submit" onSubmit= {this.deletePolice.bind(this)}>DELETE ACCOUNT</button>
                </form>
                <Footer />
            </div>
        );
    }
}

export default DeletePolice;