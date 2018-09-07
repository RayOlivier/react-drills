import React from 'react';

function Todo(props){
    
    let newArr = props.arr.map((e,i,a)=>{
        return <h2 key={i}>{e}</h2>
    })
    console.log(newArr)
    

    return(
        <div>
           {newArr} 
        </div>
        
    )
}



export default Todo;