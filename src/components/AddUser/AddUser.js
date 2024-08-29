import React from "react"
import Button from '../Button/Button'
const AddUser = ({addUserHandler}) =>{

     const newUser = {
          name:null,
          age:null,
          gender:null
        }
      const inputHandler = (e) =>{
          newUser[e.target.id] = e.target.value
        }

     return (
          <form >
          <input type="text" placeholder='Enter your name' id="name"  onChange={inputHandler}/>
          <input type="text" placeholder='Enter your age' id='age' onChange={inputHandler}/>
          <input type="gender" placeholder='Enter your gender' id='gender' onChange={inputHandler}/>
          <Button
            className="d-block mx-auto mt-4 bg-success"
            onClick={() => addUserHandler(2000, newUser.name, newUser.age, newUser.gender)}
          >
            Add User
    
            </Button>
        </form>
     )
}
export default AddUser;