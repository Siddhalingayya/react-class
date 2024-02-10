import React, {Component} from "react";

class Message extends Component{
    constructor (){
        super()
            this.state = {
                message : 'Welcome to the visitor'
            }
        
    }

    changeMessage(){
        this.setState({
            message : 'Thank you for subscribing'
        })
    }


    render (){
        return (
            <div className="messageblock">
                    <h1 className="header">
                        {this.state.message}
                    </h1>
                    <button onClick={() => this.changeMessage() } className="btn2"  >Subscribe</button>

            </div>
        )
    }
}

export default Message