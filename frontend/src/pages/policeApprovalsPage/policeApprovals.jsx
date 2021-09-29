import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import KisaViewer from './KisaViewer/kisaViewer';
import KisaApprover from './KisaApprover/kisaApprover';
import Footer from './Footer/footer';

class PoliceApprovals extends Component {
    constructor(props){
        super(props);
        this.kisas = [
            //PULL FROM KISA COLLECTION ON MONGODB
            {title: 'Ready Player One', author: 'Ernest Cline'},
            {title: 'All the Light We Cannot See', author: 'Anthony Doerr'},
            {title: 'The First and Last Freedom', author: "Jiddu Krishnamurti"}
        ];
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
                <KisaViewer kisa={this.kisas[this.state.kisaNumber]} nextKisa={() => this.goToNextKisa()} previousKisa={() => this.goToPreviousKisa()}/>
                <KisaApprover approveNewKisa={this.approveNewKisa.bind(this)}/>
                <Footer />
            </div>
        );
    }
}

export default PoliceApprovals;