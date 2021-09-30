import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import TitleBar from './TitleBar/titleBar';
import MapViewer from './MapViewer/mapViewer'
import MapNav from './MapNav/mapNav';
import Footer from './Footer/footer';

class KisaMapPage extends Component {
    constructor(props){
        super(props);
        this.kisas = 
            //PULL FROM GOOGLE MAPS API
            {GoogleApiWrapper}
        ;
    this.state = {
        kisaNumber: 0
        }
    }

    approveNewKisa(kisa){
        this.kisas.push(kisa);
        this.setState({
            kisaNumber: this.kisas.length - 1
        });
    }

    goToNextKisa(){
        let tempKisaNumber = this.state.kisaNumber;
        tempKisaNumber++;
        if(tempKisaNumber === this.kisas.length){
            tempKisaNumber = 0;
        }
        this.setState({
            kisaNumber: tempKisaNumber
        });
    }

    goToPreviousKisa(){
        let tempKisaNumber = this.state.kisaNumber;
        tempKisaNumber--;
        if(tempKisaNumber < 0)
            tempKisaNumber = this.kisas.length -1;
        this.setState({
            kisaNumber: tempKisaNumber
        });
    }
    render() {
        return(
            <div className="container-fluid">
                <TitleBar />
                <MapViewer kisa={this.kisas[this.state.kisaNumber]} nextKisa={() => this.goToNextKisa()} previousKisa={() => this.goToPreviousKisa()}/>
                <MapNav approveNewKisa={this.approveNewKisa.bind(this)}/>
                <Footer />
            </div>
        );
    }
}

export default KisaMapPage;