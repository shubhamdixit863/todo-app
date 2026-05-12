import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slices/counterSlice'


function ReduxComponent(params) {
     const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function incrementValue(){
    dispatch(increment())
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
    </div>
    
    </>
    
}

export default ReduxComponent