import {Component} from 'react'
import TodoItems from '../TodoItem'
import './index.css'

const userInitialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    button: 'Delete',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    button: 'Delete',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    button: 'Delete',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    button: 'Delete',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    button: 'Delete',
  },
  {
    id: 6,
    title: 'Fix the production issue',
    button: 'Delete',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    button: 'Delete',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    button: 'Delete',
  },
]

class SimpleTodos extends Component {
  state = {initialTodosList: userInitialTodosList}

  deleteUser = id => {
    const {initialTodosList} = this.state
    const filterTodoList = initialTodosList.filter(each => each.id !== id)

    this.setState({initialTodosList: filterTodoList})
  }

  render() {
    const {initialTodosList} = this.state
    const searchResult = initialTodosList.filter(eachUser => eachUser.title)
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="simple-heading">Simple Todos</h1>
          <div>
            <ul>
              {searchResult.map(each => (
                <TodoItems
                  todoDetails={each}
                  key={each.id}
                  deleteUser={this.deleteUser}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
