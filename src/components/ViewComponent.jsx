import { useState } from "react"

function ViewComponent(props){
  //console.log(props);


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
      <td>{ele.taskName}</td>
      <td>{"Edit"}</td>
      <td>{"Delete"}</td>
    </tr>
    )

    )

  }
  </tbody>
</table>
    )

}

export default ViewComponent