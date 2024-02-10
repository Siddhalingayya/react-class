import React, { Component } from 'react'
import LifeCycleB from './LifecycleB';

class LifeCycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name : 'sid'
    }
    console.log('LifecycleA constructor');
  }

  static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA constructor');
        return null
  }

  componentDidMount() {
      console.log('LifecycleA componentDidMount');
  }

  render() {
    console.log('LifecycleA render ');
    return (
      <div>
        LifecycleA
       <div><LifeCycleB/></div> 
      </div>
    )
  }
}

export default LifeCycleA