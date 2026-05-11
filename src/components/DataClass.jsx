import React, { useEffect } from 'react';


// class DataClass extends React.Component {
//   componentDidMount() {
//     console.log('Component mounted');
//   }

//   componentDidUpdate(prevProps) {
//     console.log('Component updated');
//   }

//   componentWillUnmount() {
//     console.log('Component will unmount');
//   }

//   render() {
//     return <h1>Hello, {this.props.name} Class Component </h1>;
//   }
// }

function DataClass(props){

    // useEffect(()=>{
    //     console.log("Component Did mount ran")
    //     return ()=>{
    //         console.log("Component unmounted")
    //     }

    // },[])

    useEffect(()=>{
        console.log("Component updated")

    },[props.name])

    return <>
       <h1>Compoenent for Lifecycle {props.name}</h1>
    </>
}

export default DataClass;