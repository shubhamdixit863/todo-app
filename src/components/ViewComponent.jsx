import { useState } from "react"

function ViewComponent(props){
  //console.log(props);
  const [showInput,setShowInput]=useState(false);

  const editHandler=()=>{
    setShowInput(true);

  }

    return(
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {
    props.list.map(ele=>(
        <tr>
      <th scope="row">{ele.id}</th>
      <td>
        {
          showInput ? <input  className="form-control form-control-lg" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example"/>:ele.title

        }
        

        </td>
      <td><button onClick={

     ()=>props.deleteHAndler(ele.id)
     

      } type="button" class="btn btn-danger">Delete</button></td>
      <td><button onClick={editHandler} type="button" class="btn btn-warning">Edit</button></td>
    </tr>
    )

    )
// Rakesh --firstperosn to be showing
  }
  </tbody>
</table>
    )

}

export default ViewComponent