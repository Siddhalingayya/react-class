import React, { Component } from 'react'

class LifeCycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name : 'sid'
    }
    console.log('LifecycleB constructor');
  }

  static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB constructor');
        return null
  }

  componentDidMount() {
      console.log('LifecycleB componentDidMount');
  }

  render() {
    console.log('LifecycleB render ');
    return (
      <div>Lifecycle B</div>
    )
  }
}

export default LifeCycleB