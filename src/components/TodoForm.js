import React, {useState} from 'react'

const TodoForm = ({addTodos, removeAll}) => {

    const [todoString, setTodoString] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (todoString === "") {
            return alert('Empty TODO! Please enter a TODO.')
        }

        addTodos(todoString)

        setTodoString("")
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input type="text" name='todo' id='todo' className="form-control" placeholder="Enter a TODO..." aria-label="todo" value={todoString} onChange={e => setTodoString(e.target.value)} />

                <button type="submit" className="btn btn-primary">ADD</button>
            </div>
        </form>   
        
            <div>
                <button onClick={removeAll} className="clear-all-btn">Clear All</button>
        </div>
            
        </>
    )
}


export default TodoForm