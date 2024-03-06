import "./App.scss"
import { ReactComponent as Add } from "./assets/icons/add.svg"
import AddEditTaskForm from "./components/AddEditTaskForm"
import Button from "./components/Button"
import DeleteModal from "./components/DeleteModal"
import TaskCard from "./components/TaskCard"
import { taskList } from "./siteData/taskList"
import { useContext, useState } from "react"
import { createContext } from "react"
import { TaskListDataProvider } from "./contexts"
import { useTaskListData } from "./contexts"

const App = () => {
  const [tasks, setTasks] = useState(taskList)
  const [showAddEditModal, setAddEditModal] = useState(false)
  // const showAddEditModal = false
  console.log(tasks)
  const onAddTask = () => {
    const newTask = {
      id: "07",
      title: "test",
      priority: "high",
      status: "To Do",
      progress: 20,
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
    setAddEditModal(!showAddEditModal)
  }

  const onRemoveTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  const showDeleteModal = false
  return (
    <TaskListDataProvider tasks={tasks}>
      <div className="container">
        <div className="page-wrapper">
          <div className="top-title">
            <h2>Task List</h2>
            <Button
              title="Add Task"
              icon={<Add />}
              onClick={() => {
                setAddEditModal(!showAddEditModal)
              }}
            />
          </div>
          <div className="task-container">
            {tasks.map((task) => (
              <TaskCard onDeleteClick={onRemoveTask} task={task} />
            ))}
          </div>
        </div>
        {showAddEditModal && <AddEditTaskForm onAddTask={onAddTask} />}
      </div>
    </TaskListDataProvider>
  )
}

export default App
