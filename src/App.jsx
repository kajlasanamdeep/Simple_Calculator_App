import React, { useState } from 'react'
import './App.css'
import Bar from './components/Bar'
import Button from './components/Button'

export default function App() {
  const [output, setOutput] = useState('');
  const calculateResult = ()=>{
    // eslint-disable-next-line
    setOutput(eval(output));
  }
  return (
    <div className='App'>
      <Bar value={output}/>
      <div className='buttons-grid'>
        {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '(', ')'].map((value) => <Button value={value} onClick={()=>setOutput(output+value)}/>)}
        <Button value='÷' onClick={()=>setOutput(output+'/')}/>
        <Button value='×' onClick={()=>setOutput(output+'*')}/>
        <Button value='C' onClick={()=>setOutput('')}/>
        <Button value='=' onClick={calculateResult}/>
        <Button value='⌫' onClick={()=>setOutput(output.toString().slice(0,-1))}/>
      </div>
    </div>
  )
}