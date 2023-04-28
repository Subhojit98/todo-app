import React from 'react'

export default function AddTask(props) {
  return (
    <>
      <div className='w-full h-56 flex flex-col items-center justify-between'>
        <h1 className="font-Dosis text-4xl text-[#ff1f8f] mt-3">{props.hedaText}</h1>
        <div className="text-center">
          <input onChange={props.inputOnChange} type="text" className='px-9 bg-transparent border-2 border-violet-500 text-white py-4 appearance-none outline-none rounded-sm font-Manrope text-sm' autoFocus />
          <button className='bg-violet-500 p-3 ml-3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded' onClick={props.addTaskbtn}>Add Task</button>
        </div>
      </div>
    </>
  )
}
