import Comment from './components/Comment/Comment';
import Header from './components/Header/Header';
import './App.css';
import React ,{createContext,useEffect,useRef,useState} from 'react';
import CardsList from './components/CardsList/CardsList';
import Button from './components/Button/Button';
import Add from './components/Mk/MK';
import Api from './components/Lesson/Api';
import Effect from './components/Lesson/Effect';


// {
//   id: Math.floor((Math.random() * 800)),
//   name: "Hamada",
//   age: 27,
//   gender: "male",
// },

export const userContext = createContext("helloooooooo") 


const App = () =>
{
  const [users, setUsers] = useState();
  
  const newUser = {
    name:"",
    age:"",
    gender:""
  }

  useEffect(()=>{
    fetch("http://localhost:3004/getUsers")
    .then((res)=> res.json())
    .then((mydata)=> setUsers(mydata))
    
    
  },[])



 
  const deleteHandler = (clickedId) =>
  {
    // let newUsers = users.filter(el => (el.id !== clickedId))
    // setUsers(newUsers);
    fetch("http://localhost:3004/deleteUser",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        id: clickedId,
      })
    })
    .then((res)=>console.log(res))
    setUsers(prevState => (prevState.filter(el => (el.id !== clickedId))))
  }
  const addUserHandler = (id, name, age, gender) =>
  {
    fetch("http://localhost:3004/addUser",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        id: 100,
        name: newUser.name,
        age: newUser.age,
        gender: newUser.gender
      })
    })
    .then((res)=>console.log(res))
    setUsers(prevState => (
      [
        ...prevState,
        {
          id: id,
          name: name,
          age: age,
          gender: gender
        }
      ]
    ))
  }
 
  const inputHandler = (e) =>{
    newUser[e.target.id] = e.target.value
  }
  return (
  <>
    <Header />
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
        {users && <CardsList data={users} deleteFunc={deleteHandler} />}

  </>
        

       

//  </userContext.Provider>
    
  )
}

export default App;


 {/* <Comment /> */}
        {/* <Button
          type="button"
          variant="#00daf6"
          border="none"
          fs="20px"
        >
          Click me
        </Button> */}

        {/* <Button type="button" border="none">new button</Button> */}

        {/* <Counter /> */}

        {/* <StateFoo />
        <Foo /> */}
