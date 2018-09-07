import React from 'react';
import Todo from './Todo'

export default function List(props){

    console.log(props.arr)
    let newArr = []
    newArr = props.arr.map((e,i)=>{
        return <Todo key={i} task={e} />
    })

    console.log(newArr)
    

    return(
        <div>
           {newArr} 
        </div>
        
    )
}
