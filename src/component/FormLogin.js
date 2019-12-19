import React, {Component, Fragment} from 'react';
import { Redirect } from 'react-router-dom';

class FormLogin extends Component {
    
    state= {
        pseudo: '',
        redirect: false
    }
    
    sendUser() {
        const {pseudo} = this.props;
        pseudo(this.state.pseudo);
        this.setState({redirect: true});
    }

    handleChange = (e) => {
        this.setState({pseudo: e.target.value});
    }

    render() {        
        return (
            <Fragment>
                {this.state.redirect ? <Redirect to={{pathname: "/message",state: {pseudo: this.state.pseudo}}} /> : null}
                <input value={this.state.pseudo} onChange={this.handleChange} type="text" name="pseudo"/>
                <button onClick={() => this.sendUser()}>Valider</button>
            </Fragment>
        )
    }
}

export default FormLogin