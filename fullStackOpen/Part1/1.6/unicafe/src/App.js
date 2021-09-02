import React, { useState } from 'react'
const Button = ({handle, text}) => {
  return(
  <button onClick = {handle}>
    {text}
  </button>
  )
}
const Display = (props) => {
  return(
  <p>
    {props.text} {props.value}
  </p>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const incGood = () =>{
  //   console.log(good)
  //   setGood(good + 1)
  // }
  // const incNeutral = () => {
  //   console.log(neutral)
  //   setNeutral(neutral + 1)
  // }
  // const incBad = () => {
  //   console.log(bad)
  //   setBad(bad + 1)
  // }
  return (
    
    <div>
      <div>
      <h1>give feedback</h1>
        <br />
        <Button  handle = {() => setGood(good + 1)} text = "good" />
        <Button  handle = {() => setNeutral(neutral + 1)} text = "neutral" />
        <Button  handle = {() => setBad(bad + 1)} text = "bad" />
        {/* <button {incGood}>good</button>
        <button {incNeutral}>neutral</button>
        <button {incBad}>bad</button> */}
      </div>
      <div>
        <h1>statistics</h1>
        <br />
        <Display value = {good} text = "good" />
        <Display value = {neutral} text = "neutral" />
        <Display value = {bad} text = "bad" />

      </div>
    </div>
  )
}

export default App
