import React, { useState } from 'react'
import Card from './Card'
const Add = () => {
    const [users,setUsers] = useState([
        {   
            name :"mohamed",
            age : "24"

        },
        {   
            name :"nour",
            age : "20"

        },
        {   
            name :"nada",
            age : "21"

        }
    ])

    const addHandler = (newUser) =>{
        setUsers([...users,newUser])
    }



  return (
    <div>
{/*         <Card usersData = {dataHandler} add={addHandler} filter ={filterHandler}/>
 */}    </div>
  )
}

export default Add
