import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistic = ({text, value}) => (
   <tr>
      <td>{text}</td>
      <td>{value}</td>
   </tr>
)

const Statistik = (props) => {
 const all = props.good + props.bad + props.neutral
 const keskiarvo = ((props.good*1) +(props.bad*-1) + (props.neutral*0)) /all
  if (all === 0) {
     return (
        <div>
         <h3>Statistiikka: </h3>  
          <p>ei lisättyä sisältöä</p>
        </div>
        )
    }
    return (
   <div>
   <h3>Statistiikka: </h3>
   <table>
      <tbody>
   <Statistic text='hyvä' value={props.good} />
   <Statistic text='neutraali' value={props.neutral} />
   <Statistic text='huono' value={props.bad} />
   <Statistic text='yhteensä' value={all} />
   <Statistic text='keskiarvo' value={keskiarvo} />
   <Statistic text='positiivisia' value={`${100 * props.good / all} %`} />
   </tbody>
   </table>
   </div>
    )
}


const Button = ({handleClick, text}) => (
    <button onClick= {handleClick}>
    {text}
    </button>
)


const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
 
  return (
    <div>
    <h3> Anna palautetta:</h3>  
    <Button 
       handleClick={() => {setGood(good+1)}}
       text="hyvä"    
    />
    <Button 
       handleClick={() => {setNeutral(neutral+1)}}
       text="neutraali"
    />
    <Button 
       handleClick={() => {setBad(bad+1)}}
       text="bad"
    /> 
    <Statistik good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
