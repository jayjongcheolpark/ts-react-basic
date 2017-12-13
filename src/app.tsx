import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface AppProps { message: string }
const App = (props: AppProps) => {
  return (
    <div>
      <ChildApp message={props.message} />
    </div>
  )
}

interface ChildAppProps { message: string }
interface ChildAppState { count: number }

class ChildApp extends React.Component<ChildAppProps, ChildAppState> {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <div onClick={this.increment}>{this.props.message}</div>
        <div>{this.state.count}</div>
      </div>
    )
  }
}
ReactDOM.render(
  <App message="Hello world" />, document.getElementById('root'))