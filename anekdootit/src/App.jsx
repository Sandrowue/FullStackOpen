import { useState } from 'react'

const App = () => {

  const anecdotes = [
    'Adding manpower to a late software project makes it later!',
    'If it hurts, do it more often.',
    'The best way to get a project done faster is to start sooner',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Premature optimization is the root of all evil.',
    'Even the best planning is not so omniscient as to get it right the first time.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'How does a project get to be a year late?... One day at a time.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The bearing of a child takes nine months, no matter how many women are assigned. Many software tasks have this characteristic because of the sequential nature of debugging.',
    'Plan to throw one (implementation) away; you will, anyhow.',
    'The only way to go fast, is to go well.',
    "Every good work of software starts by scratching a developer's personal itch",
    'Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Program testing can be used to show the presence of bugs, but never to show their absence!',
    'The belief that complex systems require armies of designers and programmers is wrong. A system that is not understood in its entirety, or at least to a significant degree of detail by a single individual, should probably not be built.',
    'A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.',
    'Prolific programmers contribute to certain disaster.',
    'Documentation is the castor oil of programming. Managers think it is good for programmers and programmers hate it!.'
  ]

  const [selected, setSelected] = useState(null)
  const [votes, setVotes] = useState(() => Array(anecdotes.length).fill(0))

  const randomAnecdote = () => {
    const index = Math.floor(Math.random() * (anecdotes.length));
    setSelected(index)
  }

  const voteForSelected = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const Button = ({onClick, text}) => {
    return (
    <button onClick={onClick}
    style={{marginRight: "0.4rem", marginLeft: "0.4rem", minWidth: "3rem"}}>{text}</button>
  )
  }

  return (
    <div>
      {selected === null ? (
      <div><p>Click anecdote to start.</p>
      <Button text="anecdote" onClick={randomAnecdote}/></div>
    ) : (
      <div><p>{anecdotes[selected]}</p><p>Votes: {votes[selected]}</p>
      <Button text="vote" onClick={voteForSelected}/>
      <Button text="next anecdote" onClick={randomAnecdote}/>
      </div>
      )}
    </div>
  )
}

export default App