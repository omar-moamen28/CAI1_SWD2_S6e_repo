import React, { useEffect, useState } from 'react'
import Clean2 from './Clean2'


const arrayOfIds = [0]

function Clean(props) {
     const [data,setData] = useState("")
     const [d2,setD2] = useState("")

     useEffect(()=>{
          fetch("http://localhost:3004/user").then((d)=>{
          return d.json()
     }).then((data)=>{console.log(data)})
     .catch((e)=>{
               console.log(e)
          })
     },[])

     const inputHandler = (e) =>{
          setData(e.target.value)
          
         // console.log("from input handler")
          let id = setTimeout(()=>{
               console.log(data)
          },3000)

          arrayOfIds.push(id)
          //console.log(arrayOfIds)
          
          clearTimeout(arrayOfIds[0])
          arrayOfIds.splice(0,1)
          //console.log(arrayOfIds)
     }


     const secInputHandler = (e) =>{
          setD2(e.target.value)
     }


     return (
    <div>
      <input type = "text" onChange={inputHandler}/> 
      <input type="text" onChange ={secInputHandler} />
<Clean2 user = {props.user}/>
    </div>
  )
}

export default Clean
