import './index.css'

const TodoItems = props => {
  const {todoDetails, deleteUser} = props
  const {title, button, id} = todoDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li>
      <p className="heading">{title}</p>
      <button type="button" onClick={onDelete}>
        {button}
      </button>
    </li>
  )
}

export default TodoItems
