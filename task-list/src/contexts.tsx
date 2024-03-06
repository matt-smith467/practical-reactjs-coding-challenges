import { taskList } from "./siteData/taskList"
import { createContext } from "react"
import { useContext } from "react"
import { useState } from "react"
import { ReactNode } from "react"

interface TaskListData {
  id: string
  title: string
  priority: string
  status: string
  progress: number
}

interface TaskListDataProviderProps {
  children: ReactNode
  tasks: TaskListData[]
}

const TaskListDataContext = createContext<TaskListData[]>([])

export const TaskListDataProvider: React.FC<TaskListDataProviderProps> = ({ children, tasks }) => {
  return <TaskListDataContext.Provider value={tasks}>{children}</TaskListDataContext.Provider>
}

export const useTaskListData = () => {
  const context = useContext(TaskListDataContext)
  if (!context) {
    throw new Error("useTaskListData must be used within a TaskListDataProvider")
  }
  return context
}
