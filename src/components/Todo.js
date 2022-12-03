import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { AiFillDelete } from 'react-icons/ai'

const Todo = ({todos, removeTodos}) => {
    return (
        <ListGroup className='mb-2 items'>
            {todos.map((todo, index) => (
                <ListGroupItem key={index} className="mb-2 item">
                    {todo}
                    <span className='float-right' onClick={() => removeTodos(index)}>
                        <AiFillDelete />
                    </span>
                </ListGroupItem>
            ))} 
        </ListGroup>
    )
}

export default Todo