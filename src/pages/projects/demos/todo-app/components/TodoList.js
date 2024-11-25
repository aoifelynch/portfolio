import { Button, Card, ListGroup } from 'react-bootstrap'
import { useState } from 'react'

// TodoItem uses 'export default', so we don't need curly brackets when importing it
// If it used 'export const', we would need curly brackets
import TodoItem from './TodoItem'

const TodoList = () => {
    const initialValue = [
        {
            text: 'Get milk',
            done: false,
            id: 1
        },
        {
            text: 'Learn react',
            done: false,
            id: 2
        },
        {
            text: 'Go home',
            done: false,
            id: 3
        }
    ]

    // We've seen how we can provide useState with an initial value
    // Sometimes that's been an empty array [], an empty form object {email: '', newsletter: false}, or just a number
    // In this case, we're using an array of objects to start off with
    const [list, setList] = useState(initialValue)


    // Our component hierarchy goes App -> TodoList -> TodoItem
    // In order to notify the TodoList of a change to a TodoItem
    // We'll pass this markAsDone function down into our TodoItem
    // That way, the TodoItem can trigger markAsDone when a click event happens
    const markAsDone = (id) => {
        // Remember state is immutable.
        // We aren't actually modifying the state here, but using the map() function to create an entirely new list with our change made.
        const newList = list.map((item, index) => {
            if (item.id === id) {
                item.done = true;
            }
            return item;
        })

        // We then overwrite the previous list with our new list (which is the same, apart from the one item which has been set to 'done')
        setList(newList)
    }


    const todoItems = list.map((item, index) => {
        // We use a key to uniquely identify each item in our list
        return (
            <TodoItem
                key={item.id}
                id={item.id}                
                text={item.text}
                done={item.done}
                markAsDone={markAsDone}
            />
        )
    });

    return (
        <Card>
            <Card.Header>TodoList</Card.Header>
            <Card.Body>
                <ListGroup variant='flush'>
                    {todoItems}
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <Button variant='primary' className='float-end'>Add</Button>
            </Card.Footer>
        </Card>
    )
}

export default TodoList