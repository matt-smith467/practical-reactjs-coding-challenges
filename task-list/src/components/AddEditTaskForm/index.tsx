import classNames from "classnames"
import { ReactComponent as Close } from "../../assets/icons/close.svg"
import Button from "../Button"
import Input from "../Input"
import Modal from "../Modal"
import "./style.scss"
import { useTaskListData } from "../../contexts"
import { useContext } from "react"

interface AddEditTaskFormProps {
  onAddTask: () => void
}

const AddEditTaskForm: React.FC<AddEditTaskFormProps> = ({ onAddTask }) => {
  const tasks = useTaskListData()

  return (
    <Modal>
      <form>
        <div className="add-edit-modal">
          <div className="flx-between">
            <span className="modal-title">Add Task </span>
            <Close className="cp" />
          </div>
          <Input label="Task" placeholder="Type your task here..." onChange={() => {}} name="title" value="" />
          <div className="modal-priority">
            <span>Priority</span>
            <ul className="priority-buttons">
              {["high", "medium", "low"].map((priority) => (
                <li key={priority} className={classNames(`${priority}-selected`, priority)}>
                  {priority}
                </li>
              ))}
            </ul>
          </div>
          <div className="flx-right mt-50">
            <Button title="Add" onClick={onAddTask} />
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default AddEditTaskForm
