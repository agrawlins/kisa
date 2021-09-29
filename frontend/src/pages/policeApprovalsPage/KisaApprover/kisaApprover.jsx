import React, {Component} from 'react';

class KisaApprover extends Component{
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
        const kisa={kisa}
        this.props.addNewKisa(kisa);
        this.setState({
            kisa: {kisa}
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
                        <div className="col-md-4">
                            <input type="button" name="reject" value="Reject" onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <input type="submit" value="Map" />
                        </div>
                        <div className="col-md-4">
                            <input type="button" name="approve" value="Approve" onChange={this.handleChange} />
                        </div>
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default KisaApprover;