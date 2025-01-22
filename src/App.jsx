import { useState } from 'react'
import './App.css'
import Todos from './components/Todos';
import TodosForm from './components/TodosForm';



function App() {
  const [todos,setTodos] = useState([
  {
    id:1,
    text: 'Criar funcionalidade X',
    category:"Trabalho",
    isCompleted: false,
  },
  {
    id:2,
    text: 'Ir treinar',
    category:"Pessoal",
    isCompleted: false,
  },
  {
    id:3,
    text: 'Estudar react',
    category:"Estudos",
    isCompleted: false,
  },
  ]);

  const addTodo =(text,category) => {
    const newTodos = [...todos, 
      {
        id: Math.floor(Math.random()*10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  
  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {/* {todos.length === 0 && <p>Lista vazia</p>} */}
        {todos.map((todo) => (
          <Todos key={todo.id }todo={todo}/>
        ))}
      </div>
      <TodosForm addTodo={addTodo}/>
    </div>
  )
}

export default App
