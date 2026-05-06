import { useEffect, useState } from 'react'
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
    const [apiData,setApiData]=useState([]);

// Source - https://stackoverflow.com/a/1349426
// Posted by csharptest.net, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-06, License - CC BY-SA 4.0

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}



//GetApiData()

console.log(makeid(5));
  const btnClick=()=>{
    console.log("Button clicked")
    // problematic code 
    let newTask={
      id:makeid(10),
      title:task
    }
    let allTasks=[...list,newTask]

    setList(allTasks)


  }
  const deleteHAndler=(id)=>{
    // const newArray=[];
    // for (let i=0;i<list.length;i++){
    //   if (list[i].id != id ){
    //     // We will remove that element
    //     newArray.push(list[i]);
    //   }

    // }
    const newArray=list.filter((ele)=>{
      return  ele.id !=id
    })

    setList(newArray);

   // console.log("delete handler called",id)
  }


     const inputHandler=(event)=>{
    //console.log("Printing from the app compnent",event.target.value)
    setTask(event.target.value);

  }

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
       // console.log(json)
       setApiData(json);
      }).catch(err=>console.log(err))

  },[])
  


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
    <ViewComponent list={list} deleteHAndler={deleteHAndler}/>

  </div>



    <div className='row justify-content-center' style={{marginTop:"100px"}}>
       <h1>-----Api Data--------------</h1>

       <ViewComponent list={apiData} deleteHAndler={deleteHAndler}/>

  </div>
        

    </div>
      
     
     
      
    </>
  )
}

export default App
