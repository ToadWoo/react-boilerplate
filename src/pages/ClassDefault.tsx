import React from 'react'

class ClassDefault extends React.Component {
  state = {
    count: 1,
  }

  add = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <>
        <h1>count: {this.state.count}</h1>
        <button onClick={this.add.bind(this)}>click</button>
      </>
    )
  }
}

export default ClassDefault
