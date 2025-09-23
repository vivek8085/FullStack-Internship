import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addAmount, reset } from './store/counterSlice'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)

  return (
    <div className="app">
      <div className="card">
        <h1>Redux Toolkit Counter</h1>
        <div className="count">{count}</div>
        <div className="controls">
          <button onClick={() => dispatch(decrement())} className="btn">-</button>
          <button onClick={() => dispatch(increment())} className="btn">+</button>
        </div>
        <div className="add">
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <button onClick={() => dispatch(addAmount(amount))} className="btn">Add</button>
        </div>
        <div>
          <button onClick={() => dispatch(reset())} className="btn reset">Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
