import React, {Component} from 'react';
import FormLogin from './FormLogin';

import '../App.css';

class Login extends Component{
    
    state= {
        pseudo: '',
    }
    
    getPseudo = (propsPseudo) => {
        this.setState({pseudo : propsPseudo});
    }
      
    render() {
        return (
            <div className="connexionBox">
                <div className="connexion">
                    <h1>Veuillez vous connecter.</h1>
                    <span>Votre pseudo</span>
                    <FormLogin pseudo={this.getPseudo} />
                </div>
            </div>
        )
    }
    
}

export default Login;