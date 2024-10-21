import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter></Counter>
      <Form></Form>
    </>
  )
}

export default App
