import Comment from './components/Comment/Comment';
import Header from './components/Header/Header';
import './App.css';
import {useState} from 'react';
import CardsList from './components/CardsList/CardsList';
import Button from './components/Button/Button';
import Add from './components/Mk/MK';


// {
//   id: Math.floor((Math.random() * 800)),
//   name: "Hamada",
//   age: 27,
//   gender: "male",
// },

const App = () =>
{
  const data = [
    {
      id: Math.floor((Math.random() * 800)),
      name: "Sara",
      age: 20,
      gender: "female",
    },
    {
      id: Math.floor((Math.random() * 800)),
      name: "Omar",
      age: 20,
      gender: "male",
    },
    {
      id: Math.floor((Math.random() * 800)),
      name: "Ali",
      age: 20,
      gender: "male",
    },
    {
      id: Math.floor((Math.random() * 800)),
      name: "Salma",
      age: 20,
      gender: "female",
    },
    {
      id: Math.floor((Math.random() * 800)),
      name: "Ahmed",
      age: 20,
      gender: "male",
    },
    {
      id: Math.floor((Math.random() * 800)),
      name: "Farah",
      age: 20,
      gender: "female",
    },
  ]

  const [users, setUsers] = useState(data);

  const addUserHandler = (id, name, age, gender) =>
  {
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

  const deleteHandler = (clickedId) =>
  {
    // let newUsers = users.filter(el => (el.id !== clickedId))
    // setUsers(newUsers);

    setUsers(prevState => (prevState.filter(el => (el.id !== clickedId))))
  }

  return (
    <div className='App'>
      <Add />
{/*       <Header />

      <Button
        className="d-block mx-auto mt-4 bg-success"
        onClick={() => addUserHandler(2000, "Hamada", 27, "male")}
      >
        Add User

      </Button>

      <CardsList data={users} deleteFunc={deleteHandler} /> */}




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

    </div>
  )
}

export default App;