import {useState}from 'react'

const TodosForm = ( { addTodo }) => {

    const [title,setTitle] = useState('');
    const [category,setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title || !category ) return;

        // add todo
        addTodo(title,category);
        // limpar campos
        setTitle('');
        setCategory('');
    };


  return (
    <div className='todo-form'>
       <h2>Criar Tarefa:</h2> 
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder='Digite o título' onChange={(e)=> setTitle(e.target.value)}/>
        <select value={category} onChange={(e)=> setCategory(e.target.value)}> 
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudos">Estudos</option>
            <option value="Pessoal">Pessoal</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  )
};

export default TodosForm;
