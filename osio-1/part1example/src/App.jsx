import { useState } from "react";

const Hello = ({name, age}) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

const Display = ({counter, style}) => <div style={style}>{counter}</div>

const DisplayII = ({value, style}) => <div style={style}>{value}</div>

const Button = ({onClick, text}) => {
  return (
  <button onClick={onClick} 
  style={{marginRight: "0.4rem", marginLeft: "0.4rem"}}>{text}</button>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        <br />
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      <br />
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
  
const App = () => {
  const nimi = "Pekka";
  const ika = 10;

  const [counter, setCounter] = useState(0);
  const [left, setLeft] = useState(0);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);


  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(updatedRight + left)
  }

  const [value, setValue] = useState(10);
  const setToValue = (newValue) => {
    console.log('value now:', newValue)
    setValue(newValue)
  }
  
  return (
  <div>
    <div>
      <h1>Greetings</h1>
      <Hello name ="Maya" age={26 + 10}/>
      <Hello name ={nimi} age={ika}/>
    </div>
    <br />
    <div>
      <Display counter={counter} style={{marginLeft: "0.4rem"}}/>
      <br />
      <Button onClick={increaseByOne}
        text='plus'/>
      <Button onClick={decreaseByOne}
        text='minus'/>
    <br />
    <br />
      <Button onClick={setToZero} 
        text='zero'/>
    </div>
    <br />
    <br />
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left'/>
      <Button onClick={handleRightClick} text='right'/>
      {right}
      <History allClicks={allClicks}/>
      <p>total {total}</p>
    </div>
    <br />
    <div>
      <DisplayII value={value} style={{marginLeft: "0.4rem"}}/>
      <br />
      <Button onClick={() => setToValue(1000)} text="thousand"/>
      <Button onClick={() => setToValue(0)} text="reset"/>
      <Button onClick={() => setToValue(value + 1)} text="increment"/>
    </div>
  </div>
 )
}

export default App