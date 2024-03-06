import Button from "../Button"
import Modal from "../Modal"
import "./style.scss"
import { useTaskListData } from "../../contexts"

interface DeleteModalProps {
  id: string
  onDeleteClick: (id: string) => void
}

const DeleteModal: React.FC<DeleteModalProps> = ({ id, onDeleteClick }) => {
  const tasks = useTaskListData()

  return (
    <Modal>
      <div className="delete-modal">
        <p>Are you sure you want to delete this task?</p>
        <div className="delete-modal__actions">
          <Button title="Delete" onClick={onDeleteClick} />
          <Button title="Cancel" outline onClick={() => {}} />
        </div>
      </div>
    </Modal>
  )
}

export default DeleteModal
