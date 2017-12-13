import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface AppProps { message: string }
const App = (props: AppProps) => <div>{props.message}</div>

ReactDOM.render(
  <App message="Hello world" />, document.getElementById('root'))