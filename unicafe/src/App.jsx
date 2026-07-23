import { useState } from 'react'

const Button = ({onClick, text}) => {
    return (
    <button onClick={onClick}
    style={{marginRight: "0.4rem", marginLeft: "0.4rem", minWidth: "3rem"}}>{text}</button>
  )
  }

const Display = ({good, ok, poor, total}) => {
  return (
  <div>
    <p>Good: {good}</p>
    <p>Ok: {ok}</p>
    <p>Poor: {poor}</p>
    <br />
    <p>Total: {total}</p>
  </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [ok, setOk] = useState(0)
  const [poor, setPoor] = useState(0)
  const [total, setTotal] = useState(0)

  const increaseGood = () => {
    setGood(good + 1);
    const goodSum = good + 1
    return (
    goodSum, setTotal(goodSum + ok + poor)
  )}
  const increaseOk = () => {
    setOk(ok + 1);
    const okSum = ok + 1
    return (
    okSum, setTotal(okSum + good + poor)
    
  )}
  const increasePoor = () => {
    setPoor(poor +1)
    const poorSum = poor + 1
    return (
    poorSum, setTotal(poorSum + good + ok)
  )}
  
  return (
    <div>
      <h2>Choose feedback</h2>
      <Button onClick={increaseGood} text="Good"/>
      <Button onClick={increaseOk} text="Ok"/>
      <Button onClick={increasePoor} text="Poor"/>
      <br />
      <br />
      <h2>Statistics</h2>
      <Display good={good} ok={ok} poor={poor} total={total}/>
    </div>
  )
}

export default App