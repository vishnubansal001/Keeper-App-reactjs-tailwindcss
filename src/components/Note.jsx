import React from 'react'

export default function Note(props) {
    function handleClick(){
        props.onDelete(props.id);
    }
  return (
    <div className='bg-white rounded shadow-[0px_2px_5px_#ccc] p-[10px] w-[240px] m-[16px] float-left'>
      <h1 className='text-[1.1rem] mb-[6px]'>{props.title}</h1>
      <p className='text-[1.1rem] mb-[10px] whitespace-pre-wrap break-words'>{props.content}</p>
      <button className='relative float-right mr-[10px] text-[#f5ba13] border-none width-[36px] h-[36px] cursor-pointer outline-none' onClick={handleClick}>Delete</button>
    </div>
  )
}
