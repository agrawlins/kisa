import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import TitleBar from './TitleBar/titleBar';
import Footer from './Footer/footer';

class DeleteDid extends Component {
    constructor(props){
        super(props);
        this.dids = {
            //PULL FROM GOOGLE MAPS API
            reason: [],
            kisa: []
        };
    this.state = {
        kisaNumber: 0
        }
    }

    deleteDid(did){
        this.dids.push(did);
        this.setState({
            kisaNumber: this.dids.length - 1
        });
    }

    render() {
        return(
            <div className="container-fluid">
                <TitleBar />
                <form className="center">
                    <label>WHY ARE YOU LEAVING?</label> <br/>
                    <button type="radio" value={this.state.reason}>I Found a Better App</button><br/>
                    <button type="radio" value={this.state.reason}></button>I Don't Need Protection<br/>
                    <button type="radio" value={this.state.reason}></button>I Was Harmed by a KISA<br/>
                        <label>PLEASE Tell Us Who; <br/> We Want to Make Sure They <br/> Can't Hurt Anyone Else</label>
                        <input type="textarea" value={this.state.kisa}></input>
                    <button type="submit" onSubmit= {this.deleteDid.bind(this)}>DELETE ACCOUNT</button>
                </form>
                <Footer />
            </div>
        );
    }
}

export default DeleteDid;