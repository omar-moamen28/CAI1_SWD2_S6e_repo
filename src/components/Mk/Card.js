import React, { useState } from "react";

const Card = ({usersData,add}) => {
    const [user,setUser] = useState({
        name :"",
        age:""
    })
    const nameHandler = (e) => {
        setUser({...user,name:e.target.value})
    }    
        
    const ageHandler = (e) => {
        setUser({...user,age:e.target.value})
    }

    const inputHandler = (e) => {
        console.log(e.target.id)
        //let idn = e.target.id
        setUser({...user, [e.target.id] : e.target.value })
        console.log(user)
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(user)
        add(user)
    }
    let [filter,setFilter] = useState("")

    const filterHandler = (e) =>{
        console.log(e.target.value)
        setFilter(e.target.value) 
    }

    const dataHandler = () =>{
        if(filter.length > 0){
            return usersData.filter(user => user.name.includes(filter))
        }else{
            return usersData
        }
    }

    return(
    <div>
        <div>
            <input type="text" placeholder="Filter" onChange={filterHandler}/>
        </div>
        <div>
            {
                dataHandler().map(user => <div style={{backgroundColor : "red",margin: "10px",width:"350px"}}>
                    <h2>{user.name}</h2>
                    <h2>{user.age}</h2>
                </div>
                )
            }
        </div>
        <div>
            <form onSubmit={submitHandler}>
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" onChange={inputHandler}/><br/><br/>
                <label for="age">Age</label>
                <input type="text" id="age" placeholder="Enter your age" onChange={inputHandler}/><br/>

                <input type="submit"/>
            </form>
        </div>
    </div>
    )
}

export default Card;
