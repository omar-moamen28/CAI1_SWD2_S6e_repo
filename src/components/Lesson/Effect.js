import React, { useState ,useEffect, useContext} from "react";
import { userContext } from "../../App";
const Effect = () =>{
     //Mohamed , 24 , cs
     const [user,setUser] = useState({
          name:"",
          age:"",
          city:""
     })
     const [color,setColor] = useState("gray")
     const [name,setName] = useState("")
     
     useEffect(()=>{
          const newData = {
               name:"Mohamed",
               age:"24",
               city:"Cairo"
          }
          setUser({...user, ...newData })
          console.log("effect")
     },[])

     useEffect(()=>{
          console.log("Color changed")
     },[color])

     useEffect(()=>{
          console.log("rerender")
     })

     console.log(user)
     
     const contextTest = useContext(userContext)
     console.log(contextTest)
     return (
         <div>
         {useContext(useContext)}
                <div style={{backgroundColor : "gray", textAlign: "center",fontSize:25,width:"400px"}}>
               <div>Name :{user.name}</div>
               <div>Age :{user.age}</div>
               <div>City :{user.city}</div>
               </div>
               <input type="text" onChange={(e) => {
                    setColor(e.target.value);
                    console.log(color);
               }
               }/>
               <input type="text" placeholder="name" onChange={(e) => {
                    setName(e.target.value);
               }
               }/>
         </div>
          

     )
}
export default Effect;