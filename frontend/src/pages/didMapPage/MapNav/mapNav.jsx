import React, {Component} from 'react';

class MapNav extends Component{
    constructor(props){
        super(props);
        this.state={
            title: '',
            author: ''
        }
        
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const did={did}
        this.props.addNewDid(did);
        this.setState({
            did: {did}
        });
    }
    render(){
        return (
            <div>
                <hr />
                <center>
                    <h3></h3>
                </center>
                <form onSubmit={this.handleSubmit}>
                    <div className="row col-align">                        
                        <input type="submit" value="Respond" />
                    </div>
                </form>
            </div>
        );
    }
}

export default MapNav;