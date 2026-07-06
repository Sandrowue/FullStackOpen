const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>  
  )
}

const Content = (props) => {  
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.name} part={part.name} exercises={part.exercises}/>
      ))}
    </div>
  )
}

const Total = (props) => {
  const total = props.exercises.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <p>Total Number of exercises: {total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
    name: 'Fundamentals of React:',
    exercises: 10
    },
    {
    name: 'Using props to pass data:',
    exercises: 7 
    },
    {
    name: 'State of a component:',
    exercises: 14 
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content  parts={parts}/>
      <Total exercises={parts}/>    
    </div>
  )
}

export default App