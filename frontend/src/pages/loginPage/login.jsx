import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import Footer from './Footer/footer';

class Login extends Component {
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
                    <form>
                        <label>PLEASE ENTER YOUR EMAIL AND PASSWORD:</label><br/>
                        <input type="text" placeholder="Email Address"></input><br/>
                        <input type="text" placeholder="Password"></input><br/>
                        <button type="submit">LOGIN</button>
                    </form>
                    <label>
                        Don't Have An Account Yet?
                    </label>
                    <button>CREATE ACCOUNT HERE</button>
                <Footer />
            </div>
        );
    }
}

export default Login;