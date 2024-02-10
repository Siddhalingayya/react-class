import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'hello'
      }
    }

    clickHandler(){
        this.setState({
            message:'good bye'
        })
        console.log(this);
    }
  render() {
    return (
      <div className='main-block'>
        <div>{this.state.message}</div>
            <button onClick={this.clickHandler.bind(this)} className='btn2'>click</button>
      </div>
    )
  }
}

export default EventBind