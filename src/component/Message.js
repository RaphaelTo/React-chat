import React, { Component, Fragment } from 'react';

class Message extends Component {
    
    state = {
        messages : [
            {
                message:'',
                user:''
            }
        ]
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        return {
            messages: [...prevState.messages,
                {
                    message: nextProps.messages.message,
                    user: nextProps.messages.user
                }
            ]
        }
    }


    Message = () => {
        const {message, user} = this.props.messages;
        this.setState(
            {
                messages:[...this.state.messages, {
                    message: message,
                    pseudo: user
                }], 
            }
        );
    }
    
    render() {
        const {messages} = this.state;

        let message = messages.map((message, key) => {
            if(message.message !== ""){
            return (
                <div key={key} className='user-message'>
                    <span>{message.user}</span>
                    <p>{message.message}</p>
                </div> 
            )
        }
    })

        return (
            <Fragment>
                <p>Les messages</p>
                {message ? message : null}
            </Fragment>
        )
    }
}

export default Message