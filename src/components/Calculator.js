import React, { useState, useEffect } from 'react'
import { evaluate } from "mathjs"

function Calculator() {
  const [result, setResult] = useState("");

  const addValueKeyDown = (e) => {
    const { key } = e;
    const isNumber = /[0-9+\-*/.=]/.test(key)

    if (isNumber) {
      setResult(result + key)
    } else if (key === 'Enter') {
      calculateResult()
    } else if (key === 'Backspace') {
      functionC()
    } else if (key === 'Escape') {
      clearResult()
    }
  }

  const addValue = (e) => {
    const value = e.target.name;
    setResult(result + value)
  }

  const calculateResult = () => {
    try {
      const calculatedResult = evaluate(result);
      setResult(calculatedResult.toString());
    } catch (e) {
      setResult("")
    }
  }

  const clearResult = () => {
    setResult("")
  }
  const functionC = () => {
    setResult(result.slice(0, -1))
  }

  return (
    <div className='container'>
      <div className='calculator'>
        <input className='calculator-input' type="text" value={result} readOnly onKeyDown={addValueKeyDown}></input>
        <button className='clear' onClick={clearResult}>Clear</button>
        <button onClick={functionC}>C</button>
        <button name='/' onClick={addValue}>&divide;</button>
        <button name='7' onClick={addValue}>7</button>
        <button name='8' onClick={addValue}>8</button>
        <button name='9' onClick={addValue}>9</button>
        <button name='*' onClick={addValue}>&times;</button>
        <button name='4' onClick={addValue}>4</button>
        <button name='5' onClick={addValue}>5</button>
        <button name='6' onClick={addValue}>6</button>
        <button name='-' onClick={addValue}>&ndash;</button>
        <button name='1' onClick={addValue}>1</button>
        <button name='2' onClick={addValue}>2</button>
        <button name='3' onClick={addValue}>3</button>
        <button name='+' onClick={addValue}>+</button>
        <button name='0' onClick={addValue}>0</button>
        <button name='.' onClick={addValue}>.</button>
        <button className='equal' onClick={calculateResult}>=</button>
      </div>
    </div>
  )
}

export default Calculator