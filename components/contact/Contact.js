import React, { useRef } from 'react'
import useIntersectionObserver from '../../utils/useIntersectionObserver';
import ClassicButton from '../buttons/ClassicButton';

const Contact = () => {
  const ref = useRef(null)
  const intersecting = useIntersectionObserver(ref, {})
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hello");
  }
  return (
    <div id="contact" className='w-full h-screen min-h-[600px] relative'>
      <div className="absolute w-2/3 h-[28rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
        <div className="grow basis-1/2 pl-5">
          <h1 className='text-8xl font-rubik font-bold mb-4 text-secondary'>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "022ms" }}>S</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "122ms" }}>a</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "222ms" }}>y</span>
          </h1>
          <h1 className='text-8xl font-rubik font-bold mb-4 text-secondary'>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "322ms" }}>H</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "422ms" }}>e</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "522ms" }}>l</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "622ms" }}>l</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "722ms" }}>o</span>
          </h1>
          <h1 ref={ref} className='text-8xl font-rubik font-bold'>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "822ms" }}>👋</span>
          </h1>
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