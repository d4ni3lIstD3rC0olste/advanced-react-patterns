// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {Switch} from '../switch'

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  const getTogglerProps = (props = {}) => {
    return {
      'aria-pressed': on,
      onClick: () => {
        toggle();
        props.onClick && props.onClick();
      }
    }
  }

  return {on, toggle, getTogglerProps}
}

function App() {
  const {on, getTogglerProps} = useToggle()
  return (
    <div>
      <Switch {...getTogglerProps({on})} />
      <hr />
      <Wrapper>
      <button
        {...getTogglerProps({
          'aria-label': 'custom-button',
          onClick: () => console.info('onButtonClick'),
        })}
      >
        {on ? 'on' : 'off'}
      </button>
      </Wrapper>
    </div>
  )
}

function Wrapper({children}) {
  console.log(children)
  return {...children};
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
