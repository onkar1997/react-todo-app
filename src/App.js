import { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container } from 'reactstrap'
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

const getLocalItems = () => {
  let localTodos = localStorage.getItem("todos")

  if (localTodos) {
    return JSON.parse(localStorage.getItem("todos"))
  } else {
    return []
  }
}

const App = () => {

  const [todos, setTodos] = useState(getLocalItems())

  useEffect(() => {
    
  }, [])

  const addTodos = todo => {
    setTodos([...todos, todo])
  }

  useEffect(() => { 
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const removeTodos = id => {
    setTodos(todos.filter((todo, index) => index !== id))
  }

  const removeAll = () => {
    setTodos([])
  }

  return (
    <Container fluid>
      <h1>TODO APP</h1>
      <Todo todos={todos} removeTodos={removeTodos} />
      <TodoForm addTodos={ addTodos } removeAll={ removeAll } />
    </Container>
  );
}

export default App;
