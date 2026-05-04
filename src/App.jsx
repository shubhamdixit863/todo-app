import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AddComponent from './components/AddComponent'
import ViewComponent from './components/ViewComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    const [list,setList]=useState([
    {
     "id":"1",
     "taskName":"Sleep"
    },{
     "id":"2",
     "taskName":"Sleep"
    },
    {
     "id":"3",
     "taskName":"Sleep"
    }

  ])


  const btnClick=()=>{
    console.log("Button clicked")
  }



  return (
    <>
    <div className='container text-center' style={{ marginTop:"50px" }}>

       <div className="row justify-content-center">
    <div className="col-4">
       <AddComponent/>
    </div>
    <div className="col-4">
         <button onClick={btnClick} type="button" className="btn btn-warning" style={{padding:"12px"}}> Add ToDo</button>

    </div>
  </div>

  <div className='row justify-content-center' style={{marginTop:"100px"}}>
    <ViewComponent list={list}/>

  </div>
        

    </div>
      
     
     
      
    </>
  )
}

export default App
