import React, {Component, Fragment} from 'react';

class FormMessage extends Component {
    
    state = {
        user: '',
        message: ''
    }
    
    handleChange = (e) => {
        this.setState({user: this.props.user, message: e.target.value});
    }

    submitMessage = () => {
        const {getMessage} = this.props;
        getMessage(this.state);
        this.setState({user: this.props.user, message: ''});
    }
    
    render() {
        return (
            <Fragment>
                <textarea id="messageInput" value={this.state.message} onChange={this.handleChange}/>
                <button onClick={this.submitMessage}>Envoyez</button>
            </Fragment>
        )
    }
}

export default FormMessage;