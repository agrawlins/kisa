import React, { Component } from 'react';
import  ReactDOM  from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
                    ReactDOM.render(
                        {/* <Router>
                            <Switch>
                                <Route exact path="/components/trialOne" component={trialOne}/>
                                <Route exact path="/components/trialTwoA" component={trialTwoA}/>
                                <Route exact path="/components/trialTwoB" component={trialTwoB}/>
                                <Route exact path="/components/trialThree" component={trialThree}/>
                            </Switch>
                        </Router> */}
                <Footer />
            </div>
        );
    }
}

export default CreateKisa;