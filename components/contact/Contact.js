import React, { useRef, useState } from 'react'
import useIntersectionObserver from '../../utils/useIntersectionObserver';
import ClassicButton from '../buttons/ClassicButton';

const Contact = () => {
  let [fullname, setFullname] = useState('')
  let [email, setEmail] = useState('')
  let [message, setMessage] = useState('')

  const ref = useRef(null)
  const intersecting = useIntersectionObserver(ref, {})

  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = {
      name: fullname,
      email: email,
      message: message
    }
    console.log(data);
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      },
      method: "POST"
    })
    const { error } = await res.json()
    if (error) {
      console.log(error);
      return
    }
  }

  return (
    <div id="contact" className='w-full h-screen min-h-[600px] relative'>
      <div className="absolute w-11/12 max-w-sm h-[28rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 justify-center items-center
      sm:max-w-md lg:max-w-2xl lg:flex-row xl:max-w-4xl">
        <div className="text-2xl font-rubik font-bold mb-4 text-secondary flex gap-1 lg:flex-col lg:text-7xl lg:basis-1/3 lg:shrink-0 lg:gap-4 xl:text-8xl">
          <h1>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "022ms" }}>S</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "122ms" }}>a</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "222ms" }}>y</span>
          </h1>
          <h1 ref={ref}>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "322ms" }}>H</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "422ms" }}>e</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "522ms" }}>l</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "622ms" }}>l</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "722ms" }}>o</span>
          </h1>
          <h1>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "822ms" }}>👋</span>
          </h1>
        </div>
        <div className="grow w-full xl:max-w-md">
          <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <input
              className='w-full p-4 border-[3px] bg-white border-secondary rounded-md active:outline-none focus-within:outline-none focus-within:shadow-blue transition-all ease-in-out duration-200'
              type="text"
              placeholder='Name'
              required
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value)
              }}
            />
            <input
              className='w-full p-4 border-[3px] bg-white border-secondary rounded-md active:outline-none focus-within:outline-none focus-within:shadow-blue transition-all ease-in-out duration-200'
              type="email"
              placeholder='Email'
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <textarea
              className='w-full p-4 border-[3px] bg-white border-secondary rounded-md focus-within:outline-none resize-none focus-within:shadow-blue transition-all ease-in-out duration-200'
              placeholder='Type something...'
              rows={6}
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
            />
            <ClassicButton small type="submit">Send</ClassicButton>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact