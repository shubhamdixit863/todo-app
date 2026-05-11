import { useState ,useReducer} from "react"

function About(params) {

  function reducer(state, action) {
    debugger;
    //console.log(action);
    switch (action) {
      case "CHANGE_TEXT":
          state="Hi students";
          return state
        
        break;
    
      default:
        break;
    }
  
   }

    //const [state,setState]=useState("Hello World")
      const [state, dispatch] = useReducer(reducer, "Hello World");


    const changeText=()=>{
     // setState("Hi students")
     dispatch("CHANGE_TEXT")
    }


    return <>

    <button onClick={changeText}>
      Change Text
    </button>
    
      <h1>{state}</h1>
    </>
    
}

export default About