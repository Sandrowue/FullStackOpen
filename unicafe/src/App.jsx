import { useState } from 'react'

const Button = ({onClick, text}) => {
    return (
    <button onClick={onClick}
    style={{marginRight: "0.4rem", marginLeft: "0.4rem", minWidth: "3rem"}}>{text}</button>
  )
  }

const StatisticsLIne = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good, ok, poor, total, average, positive}) => {
  return (
  <div>
    <table>
      <StatisticsLIne text="Good: " value={good}/>
      <StatisticsLIne text="Ok: " value={ok}/>
      <StatisticsLIne text= "Poor: " value={poor}/>
      <br />
      <StatisticsLIne text="Total " value={total}/>
      <StatisticsLIne text="Averege: " value={average}/>
      <StatisticsLIne text="Positive: " value={positive}/>
    </table>
  </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [ok, setOk] = useState(0)
  const [poor, setPoor] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const increaseGood = () => {
    setGood(good + 1);
    const goodSum = good + 1
    const totalSum = goodSum + ok + poor
    const calculateAverage = (goodSum - poor) / totalSum
    const positivePercentage = goodSum / totalSum * 100
    return (
      goodSum, setTotal(totalSum), setAverage(calculateAverage), setPositive(positivePercentage)
  )}
  const increaseOk = () => {
    setOk(ok + 1);
    const okSum = ok + 1
    const totalSum = okSum + good + poor
    const calculateAverage = (good - poor) / totalSum
    const positivePercentage = good / totalSum * 100
    return (
    okSum, setTotal(totalSum), setAverage(calculateAverage), setPositive(positivePercentage)
    
  )}
  const increasePoor = () => {
    setPoor(poor +1)
    const poorSum = poor + 1
    const totalSum = poorSum + good + ok
    const calculateAverage = (good - poorSum) / totalSum
    const positivePercentage = good / totalSum * 100
    return (
    poorSum, setTotal(totalSum), setAverage(calculateAverage), setPositive(positivePercentage)
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
      {total == 0 ? (
        <p>No feedback given</p>
      ) : (<Statistics good={good} ok={ok} poor={poor} total={total} average={average} positive={positive}/>)}
      
    </div>
  )
}

export default App