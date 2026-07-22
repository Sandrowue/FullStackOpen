import { useState } from 'react'

const Button = ({onClick, text}) => {
    return (
    <button onClick={onClick}
    style={{marginRight: "0.4rem", marginLeft: "0.4rem", minWidth: "3rem"}}>{text}</button>
  )
  }

const Display = ({good, ok, poor}) => {
  return (
  <div>
    <p>Good: {good}</p>
    <p>Ok: {ok}</p>
    <p>Poor: {poor}</p>
  </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [ok, setOk] = useState(0)
  const [poor, setPoor] = useState(0)

  const increaseGood = () => setGood(good + 1);
  const increaseOk = () => setOk(ok + 1);
  const increasePoor = () => setPoor(poor +1);

  return (
    <div>
      <h2>Choose feedback</h2>
      <Button onClick={increaseGood} text="Good"/>
      <Button onClick={increaseOk} text="Ok"/>
      <Button onClick={increasePoor} text="Poor"/>
      <br />
      <br />
      <h2>Statistics</h2>
      <Display good={good} ok={ok} poor={poor}/>
    </div>
  )
}

export default App