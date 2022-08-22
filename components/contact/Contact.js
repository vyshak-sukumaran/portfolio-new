import React from 'react'
import ClassicButton from '../buttons/ClassicButton';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hello");
  }
  return (
    <div id="contact" className='w-full h-screen min-h-[600px] relative'>
      <div className="absolute w-2/3 h-[28rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
        <div className="grow basis-1/2 pl-5">
          <h1 className='text-8xl font-rubik font-bold mb-4 text-secondary'>Say</h1>
          <h1 className='text-8xl font-rubik font-bold mb-4 text-secondary'>Hello</h1>
          <h1 className='text-8xl font-rubik font-bold'>👋</h1>
        </div>
        <div className="basis-1/2">
          <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <input
              className='w-full p-4 border-[3px] border-secondary rounded-md active:outline-none focus-within:outline-none focus-within:shadow-blue transition-all ease-in-out duration-200'
              type="text"
              placeholder='Name'
            />
            <input
              className='w-full p-4 border-[3px] border-secondary rounded-md active:outline-none focus-within:outline-none focus-within:shadow-blue transition-all ease-in-out duration-200'
              type="text"
              placeholder='Email'
            />
            <textarea
              className='w-full p-4 border-[3px] border-secondary rounded-md focus-within:outline-none resize-none focus-within:shadow-blue transition-all ease-in-out duration-200'
              placeholder='Type something...'
              rows={6}
            />
            <ClassicButton small type="submit">Send</ClassicButton>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact