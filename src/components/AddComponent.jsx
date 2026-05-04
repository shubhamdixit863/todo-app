function AddComponent(){

      const inputHandler=(event)=>{
    console.log(event.target.value)

  }

   return <>
    <input onChange={inputHandler}  className="form-control form-control-lg" type="text" placeholder=".form-control-sm" aria-label=".form-control-lg example"/>
    </>

}

export default AddComponent