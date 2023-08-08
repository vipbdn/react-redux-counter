import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
const App = () => {
  const dispatch = useDispatch()
  const value = useSelector((x) => {
    return x.count
  })
 

  return (
    <div className='App'>
      <h1>Count {value}</h1>
      <button onClick={()=>dispatch({type:'Inc', payload:1})}>Increase</button>
      <button onClick={()=>dispatch({type:'Dec', payload:1})}>Increase</button>
      
    </div>
  )
}

export default App
