import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AddComponent from './components/AddComponent'
import ViewComponent from './components/ViewComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [task,setTask]=useState("");

    const [list,setList]=useState([])


  const btnClick=()=>{
    console.log("Button clicked")
    // problematic code 
    let newTask={
      id:1,
      taskName:task
    }
    let allTasks=[...list,newTask]

    setList(allTasks)


  }


     const inputHandler=(event)=>{
    //console.log("Printing from the app compnent",event.target.value)
    setTask(event.target.value);

  }


  return (
    <>
    <div className='container text-center' style={{ marginTop:"50px" }}>

       <div className="row justify-content-center">
    <div className="col-4">
       <AddComponent inputHandler={inputHandler}/>
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
