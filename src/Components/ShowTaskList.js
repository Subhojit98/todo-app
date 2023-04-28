import React from 'react'
import cancelIcon from '../icons/icons8-cancel.svg';
import taskDone from '../icons/icons8-done.svg';

export default function ShowTaskList(props) {
  const listBackground = ["#00d5f7", "#ff8400", "#7900FF", "#ff60a8"]
  let backCount = 0
  const setBackground = () => {
    if (backCount >= listBackground.length) backCount = 0
    const chosenBackground = listBackground[backCount]
    backCount++
    return chosenBackground
  }

  return (
    <>
      <div className="w-4/5 h-screen overflow-x-auto flex pt-10 pb-4 flex-col items-center gap-5">
        {
          props.taskListToShow.map((task, key) => {
            return <div className={`w-11/12 h-16 flex justify-between items-center p-3 rounded bg-[${setBackground()}] Shadow-md shadow-neutral-500`}><h3 className={`text-lg font-Raleway text-white pl-6 uppercase ${task.isCompleted === true ? "line-through" : ""}`}>{task.taskName}</h3>
              <div>
                <button className='mr-3' onClick={() => props.deleteTaskBtn(task)}><img src={cancelIcon} alt="Delete" /></button>
                <button className='mr-3' onClick={() => props.taskDoneBtn(task)}><img src={taskDone} alt="Edit" /></button>
              </div>
            </div>
          })
        }
      </div>
    </>
  )
}
