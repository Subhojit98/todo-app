import './App.css';
import AddTask from './Components/AddTask';
import { useState } from 'react'
import ShowTaskList from './Components/ShowTaskList';
import Alerts from './Components/Alerts';
function App() {

  const [storedTask, setToStore] = useState([])
  const [currentTask, setCurrentTask] = useState("")
  const [alert, setAlert] = useState(false)
  const [closeAlrt, handleAlert] = useState("")
  const currentTaskOnchange = (event) => {
    setCurrentTask(event.target.value)
  }

  const addTask = () => {

    if (!currentTask) {
      setAlert(true)
      return
    }
    const addTaskToStore = {
      id: storedTask.length === 0 ? 1 : storedTask.length + 1,
      taskName: currentTask,
      isCompleted: false
    }
    setToStore([...storedTask, addTaskToStore])
  }

  const deleteTask = (deleteId) => {
    const newTaskList = storedTask.filter((id) => {
      return id !== deleteId
    })
    setToStore(newTaskList)
  }

  const TaskDone = (taskId) => {

    setToStore(storedTask.map((task) => {
      if (task === taskId) {
        return { ...task, isCompleted: true }
      }
      return task
    }))

  }
  const closeAlert = () => {
    handleAlert("none")
    setAlert(false)
    handleAlert("flex")
  }

  return (
    <>
      {
        alert === true ? <Alerts closeBtn={closeAlert} closeAlrtSate={closeAlrt} /> : false
      }
      <div className="w-full h-auto flex justify-center">
        <div className="w-8/12 h-screen overflow-x-auto bg-neutral-800 shadow-2xl shadow-neutral-500 rounded-md flex flex-col items-center">
          <AddTask hedaText="What's The Plan For Today" inputOnChange={currentTaskOnchange} addTaskbtn={addTask} />
          <ShowTaskList taskListToShow={storedTask} deleteTaskBtn={deleteTask} taskDoneBtn={TaskDone} />
        </div>
      </div>

    </>
  )
}

export default App;
