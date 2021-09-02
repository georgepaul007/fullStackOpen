import React, { useState } from 'react'
const Button = ({handle, text}) => {
  return(
  <>
  <button onClick = {handle}>
    {text}
  </button>
  </>
  )
}
const Display = (props) => {
  return(
  <>
    {props.text} {props.value}
  </>
  )
}
const StatisticLine = ({text, value}) => {
  return(
    <>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
      <br />
    </>
  )
}
const Statistics = ({good, neutral, bad}) => {
  if(good || neutral || bad) {
    return(
      <>
        {/* {console.log(good,bad,neutral)}
        good {good} <br />
        neutral {neutral} <br/>
        bad {bad} <br/>
        all {good} <br />
        average {(good - bad)/(good+bad+neutral)} <br />
        positive {(good/(good+bad+neutral)*100)} % <br /> */}
        <br />
        <table>
         <tr>
           <StatisticLine text="good" value ={good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value ={neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value ={bad} />
          </tr>
          <tr>
            <StatisticLine text = "average" value = {(good - bad)/(good+bad+neutral)} />
          </tr>
          <tr>
            <StatisticLine text = "positive" value = {(good/(good+bad+neutral)*100)} />
          </tr>
        </table>
      </>
    )
  }
  else {
    return (
      <>
        No feedback given
      </>
    )
  }
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const findAverage = () => {
    let total = good + bad + neutral;
    let average = (good - (bad))/total
    return average
  }
  const positivePercentage = () => {
    return (good/(good+bad+neutral)*100)
  }
  return (
    
    <div>
      <div>
      <h1>give feedback</h1>
        <br />
        <Button  handle = {() => setGood(good + 1)} text = "good" />
        <Button  handle = {() => setNeutral(neutral + 1)} text = "neutral" />
        <Button  handle = {() => setBad(bad + 1)} text = "bad" />
      </div>
      <div>
        <h1>statistics</h1>
        <Statistics good = {good} neutral = {neutral} bad = {bad}/>
      </div>
    </div>
  )
}

export default App
