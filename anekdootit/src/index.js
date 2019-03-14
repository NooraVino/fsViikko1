import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({anecdote, points}) => (
  <div>
    {anecdote}
    <div> {points} ääntä  </div>
    </div>
)


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints]= useState(new Array(6).fill(0))
  const [best, setBest] = useState(0)

  const vote = () => {
    const copy = [ ... points]; 
    copy[selected] += 1; 
    setPoints(copy)

    if (copy[best] < copy[selected]) {
      setBest(selected)
    }

  } 
  
  const randomNext = () => Math.round(5 * Math.random())


  return (
    <div>
      <h2>Päivän anekdootti:</h2>
      <Anecdote
          anecdote={anecdotes[selected]}
          points={points[selected]}
        />

    <button onClick={vote}>äänestä</button>
    <button onClick={() => setSelected(randomNext())}>seuraava anekdootti</button>
   
      <h2>Eniten ääniä kerännyt anekdootti:</h2>
      <Anecdote
        anecdote={anecdotes[best]}
        points = {points[best]}
        />
    </div>
  )
}
               
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
