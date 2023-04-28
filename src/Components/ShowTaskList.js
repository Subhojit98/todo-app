import React from 'react'
import cancelIcon from '../icons/icons8-cancel.svg';
import taskDone from '../icons/icons8-done.svg';

export default function ShowTaskList(props) {

  
  return (
   <>
   <div className="w-4/5 h-screen overflow-x-auto flex pt-10 pb-4 flex-col items-center gap-5">
  {
    props.taskListToShow.map((task)=>{   
      return <div className={`w-11/12 h-16 flex justify-between items-center p-3 rounded bg-[${props.bgChange}] Shadow-md shadow-neutral-500`}><h3 className='text-lg font-Raleway text-white pl-6 transition-colors delay-200 ease-in'>{task.taskName}</h3>
      <div>
          <button className='mr-3' onClick={()=> props.deleteTaskBtn(task)}><img src={cancelIcon} alt="Delete" /></button>
    <button className='mr-3'><img src={taskDone} alt="Edit" /></button>
      </div>
    </div>
    })
  }
   </div>
   </>
  )
}
