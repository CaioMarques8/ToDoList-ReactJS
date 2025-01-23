import { useState } from 'react'
import './App.css'
import Todos from './components/Todos';
import TodosForm from './components/TodosForm';
import Search from './components/Search';
import Filter from './components/Filter';



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

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [Sort, setSort] = useState('Asc');

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

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
    );

    setTodos(filteredTodos);
  };


  const completeTodo = (id) => {
    const newTodos =[...todos]
    newTodos.map((todo) => 
      todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    );
    setTodos(newTodos);
  }


  
  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      {/* componente de busca */}
      <Search search={search} setSearch={setSearch}/>
      {/* componente de filtro */}
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      {/* listagem das tarefas */}
      <div className="todo-list">
        {todos.length === 0 && <p>Lista vazia</p>}
        {/* Filtrando se a tarefa está completa ou incompleta */}
        {/* Fazendo busca em tempo real */}
        {/* Ordenando as tarefas em Asc e Desc */}
        {/* removendo tarefas ou completando tarefas */}
        {todos.filter((todo) => filter === "All"? true : filter === 'Completed'? todo.isCompleted: !todo.isCompleted )
        .filter((todo) => todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        .sort((a,b) => Sort === "Asc"? a.text.localeCompare(b.text) : b.text.localeCompare(a.text) )
        .map((todo) => (
          <Todos key={todo.id }todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      {/* componente para adiconar nova tarefa */}
      <TodosForm addTodo={addTodo}/>
    </div>
  )
}

export default App
