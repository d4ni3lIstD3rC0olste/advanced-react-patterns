// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

// 🐨 create your ToggleContext context here
// 📜 https://reactjs.org/docs/context.html#reactcreatecontext
const ToggleContext = React.createContext();

function Toggle(props) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return <ToggleContext.Provider value={{on, toggle}} {...props}/>
}

function useToggleContext() {
  return React.useContext(ToggleContext)
}

function ToggleOn({children}) {
  const {on} = useToggleContext();
  return on ? children : null
}

function ToggleOff({children}) {
  const {on} = useToggleContext();
  return on ? null : children
}

function ToggleButton(props) {
  if (!useToggleContext()) {
    throw new Error(`use the fucking togglecontext you idiot`);
  }
  const {on, toggle} = useToggleContext();
  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
