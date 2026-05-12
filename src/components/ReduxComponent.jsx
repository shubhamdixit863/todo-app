import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,incrementByAmount} from '../slices/counterSlice'
import { useState } from 'react'


function ReduxComponent(params) {
     const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [state,setState]=useState(0);

  function incrementValue(){
    dispatch(increment())
  }

  function increMEntByNumber(){
    dispatch(incrementByAmount(state))
  }

  function setInput(event){
    setState(parseInt(event.target.value));

  }
    return <>
        <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={incrementValue}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      <input type='text' onChange={setInput}></input>

        <button
          aria-label="Increment value"
          onClick={increMEntByNumber}
        >
          Increment By Number
        </button>
    </div>
    
    </>
    
}

export default ReduxComponent