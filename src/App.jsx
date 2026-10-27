import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementby5,reset,incrementbyAmount } from './features/Counter'


const App = () => {

  const dispatch= useDispatch()
  const count = useSelector((state)=>state.counter.value)
  const [num,setNum]= useState(0)

  return (
    <div className='text-6xl m-10'>
      <h1 className='bg-amber-400 mb-10'>This is counter from Redux tooltite</h1>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())  } className='px-4 py-1 bg-blue-400 m-2'>+</button>
      
      <button onClick={()=>dispatch(decrement()) } className='px-4 py-1 bg-blue-400'>-</button>

      <button onClick={()=>dispatch(incrementby5()) } className='px-4 py-1 m-2 bg-blue-400'>
        +5
      </button>

      <button onClick={()=>dispatch(reset()) } className='px-4 py-1 m-2 bg-blue-400'>
        Reset
      </button>
      <input type="number" className='border-2 ' value={num} onChange={ (e)=>setNum(e.target.value)} />
      <button onClick={()=>dispatch(incrementbyAmount(Number(num))) } className='px-4 py-1 m-2 bg-blue-400'>
        incrementbyAmount
      </button>
    </div>
  )
}

export default App
