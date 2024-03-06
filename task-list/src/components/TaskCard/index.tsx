import classNames from "classnames"
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg"
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg"
import CircularProgressBar from "../CircularProgressBar"
import "./style.scss"
import { useState } from "react"
import DeleteModal from "../DeleteModal"

interface TaskCardProps {
  onDeleteClick: (id: string) => void
  task: {
    id: string
    title: string
    priority: string
    status: string
    progress: number
  }
}

const TaskCard: React.FC<TaskCardProps> = ({ onDeleteClick, task }) => {
  const { id, title, priority, status, progress } = task
  const [deleteModal, setDeleteModal] = useState(false)

  return (
    <div className="task-card">
      <div className="flex w-100">
        <span className="task-title">Task</span>
        <span className="task">{title}</span>
      </div>
      <div className="flex">
        <span className="priority-title">Priority</span>
        <span className={classNames(`${priority}-priority`, "priority")}>{priority}</span>
      </div>
      <div className="task-status-wrapper">
        <button className="status">{status}</button>
      </div>
      <div className="progress">
        <CircularProgressBar strokeWidth={2} sqSize={24} percentage={progress} />
      </div>
      <div className="actions">
        <EditIcon className="mr-20 cp" />
        <DeleteIcon className="cp" onClick={() => setDeleteModal(!deleteModal)} />
      </div>
      {deleteModal && <DeleteModal onDeleteClick={onDeleteClick} id={id} />}
    </div>
  )
}

export default TaskCard
