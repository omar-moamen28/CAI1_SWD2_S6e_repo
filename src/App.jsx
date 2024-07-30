import './App.css';
import Button from './components/Button/Button';
import Comment from './components/Comment/Comment';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';

const App = () =>
{

  return (
    <div className='App'>
      <Header />
      <Comment />
      <Button
        type="button"
        variant="#00daf6"
        border="none"
        fs="20px"
      >
        Click me
      </Button>
      <Button type="button" border="none">new button</Button>

      <Counter />

    </div>
  )
}

export default App;