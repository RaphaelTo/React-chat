import React, { Component } from 'react';

import '../App.css';

import FormMessage from './FormMessage';
import Messsage from './Message';

class ListMessages extends Component {
    
    state= {
        message: '',
        user: ''
    }

    componentDidMount(){
        this.setState({user:this.props.location.state.pseudo});
    }
    
    getMessage = (state) => {
        this.setState({message: state.message, user: state.user});
    }
    
    render() {
        return (
            <div className='box'>
                <h1>Test</h1>
                <div className="messages">
                    <Messsage messages={this.state}/>
                </div>
                <div>
                    <FormMessage getMessage={this.getMessage} user={this.state.user}/>
                </div>
            </div>
        )
    }
}

export default ListMessages