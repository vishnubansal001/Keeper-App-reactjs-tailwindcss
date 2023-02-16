import React, { useState } from 'react'

export default function InputBox(props) {
    const [note,setNote] = useState({
        title:"",
        content:""
    });
    function handleChange(event){
        const {name,value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]:value
            };
        });
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }

  return (
    <div>
      <form className='relative w-[480px] m-[30px_auto_20px_auto] bg-white p-[15px] rounded shadow-[0px_1px_5px_gray]'>
        <input className='w-full border-none p-[4px] outline-none text-[1.2rem] resize-none' name='title' onChange={handleChange} value={note.title} placeholder='Title'></input>
        <textarea className='w-full border-none p-[4px] outline-none text-[1.2rem] resize-none' name='content'onChange={handleChange} value={note.content} placeholder='Take a note ...' rows={3}></textarea>
        <button onClick={submitNote} className='absolute right-[18px] bottom-[-18px] bg-[#f5ba13] text-white border-none rounded w-[36px] h-[36px] shadow-[0px_1px_3px_black] cursor-pointer outline-none'>Add</button>
      </form>
    </div>
  )
}
