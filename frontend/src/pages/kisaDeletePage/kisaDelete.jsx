import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import TitleBar from './TitleBar/titleBar';
import Footer from './Footer/footer';

class DeleteKisa extends Component {
    constructor(props){
        super(props);
        this.kisas = [
            //PULL FROM GOOGLE MAPS API
            {GoogleApiWrapper},
        ];
    this.state = {
        kisaNumber: 0
        }
    }

    deleteKisa(police){
        this.kisas.push(police);
        this.setState({
            kisaNumber: this.kisas.length - 1
        });
    }

    render() {
        return(
            <div className="container-fluid">
                <TitleBar />
                <form className="center">
                    <label>WHY ARE YOU LEAVING?</label> <br/>
                    <input type="textarea" value={this.state.reason} /><br/>
                    <button type="submit" onSubmit= {this.deleteKisa.bind(this)}>DELETE ACCOUNT</button>
                </form>
                <Footer />
            </div>
        );
    }
}

export default DeleteKisa;