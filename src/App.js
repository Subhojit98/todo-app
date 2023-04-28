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
      taskName: currentTask
    }
    setToStore([...storedTask, addTaskToStore])
  }

  const deleteTask = (deleteId) => {
    const newTaskList = storedTask.filter((id) => {
      return id !== deleteId
    })
    setToStore(newTaskList)
  }

  const TaskDone = ()=>{
    
  }

  const listBackground = ["#00d5f7", "#ff8400", "#7900FF", "#ff60a8"]
  let backCount = 0
  const setBackground = () => {
    if (backCount >= listBackground.length) backCount = 0

    const chosenBackground = listBackground[backCount]
    backCount++
    return chosenBackground
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
          <ShowTaskList taskListToShow={storedTask} deleteTaskBtn={deleteTask} bgChange={setBackground()} />
        </div>
      </div>

    </>
  )
}

export default App;
