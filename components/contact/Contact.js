import React, { useEffect, useRef, useState } from 'react'
import useIntersectionObserver from '../../utils/useIntersectionObserver';
import ClassicButton from '../buttons/ClassicButton';
import SentIcon from '../../assets/sent.svg'
import AlertIcon from '../../assets/alert.svg'
import CloseIcon from '../../assets/close.svg'
import emailjs from '@emailjs/browser';

let SERVICE_ID = process.env.SERVICE_ID
let TEMPLATE_ID = process.env.TEMPLATE_ID
let PUBLIC_KEY = process.env.PUBLIC_KEY

const Contact = () => {
  let [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: ""
  })
  const [showToast, setShowToast] = useState(false)
  const [err, setErr] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const intersectionRef = useRef(null)
  const formRef = useRef(null)
  const toastRef = useRef(null)

  const intersecting = useIntersectionObserver(intersectionRef, {})

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (showToast) return

    if (!disabled) setDisabled(true)

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY).then(
      (res) => {
        setShowToast(true)
        setFormData({
          from_name: "",
          from_email: "",
          message: ""
        })
        setDisabled(false)
      }, (err) => {
        console.log(err);
        setShowToast(true)
        setErr(true)
        setDisabled(false)
      }
    )

  }

  useEffect(() => {
    const toastElem = toastRef.current
    const progressElem = toastElem.querySelector("#progress")

    if (showToast) {
      if (toastElem.classList.contains("opacity-0")) {
        toastElem.classList.remove("opacity-0")
      }
      progressElem.classList.add("animate-progress")
    }

    const handleTransitionEnd = (e) => {
      if (!showToast) {
        toastElem.classList.add("opacity-0")
        progressElem.classList.remove("animate-progress")
      }
    }

    toastElem.addEventListener("transitionend", handleTransitionEnd)

    let timeOut = setTimeout(() => {
      setShowToast(false)
    }, 5600)

    return () => {
      toastElem.removeEventListener("transitionend", handleTransitionEnd)
      clearTimeout(timeOut)
    }
  }, [showToast])

  return (
    <div id="contact" className='w-full h-screen min-h-[600px] relative'>
      {/* snack bar */}
      <div ref={toastRef} className={`fixed top-3 right-5 z-50 w-[21rem] h-24 box-border bg-white rounded-lg border-[1px] border-grey shadow-md overflow-hidden flex justify-center transition-all duration-500 ease-in-out-wobble ${!showToast ? "translate-x-[calc(100%+1.25rem)]" : "translate-x-0"}`}>
        <div className='flex items-center justify-center gap-7'>
          {
            !err ?
              <SentIcon className="w-10 h-10" />
              :
              <AlertIcon className="w-10 h-10" />
          }
          <div className="flex flex-col font-sora text-black">
            <span className='text-base font-medium'>
              {!err ? "Message sent" : "Alert"}
            </span>
            <span className='text-sm'>
              {!err ? "Thanks for your time" : "Something went wrong"}
            </span>
          </div>
          <button
            className='border-none outline-none rounded-full hover:bg-moon p-1 transition-all duration-150'
            onClick={(e) => {
              setShowToast(false)
            }}
          >
            <CloseIcon className="w-7 h-7" />
          </button>
        </div>
        <div id="progress" className={`absolute bottom-0 left-0 w-full h-1 bg-secondary `} style={{ animationDelay: "500ms" }}></div>
      </div>
      {/* snackbar end */}
      <div className="absolute w-11/12 max-w-sm h-[28rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 justify-center items-center
      sm:max-w-md lg:max-w-2xl lg:flex-row xl:max-w-4xl">
        <div className="text-2xl font-rubik font-bold mb-4 text-secondary flex gap-1 lg:flex-col lg:text-7xl lg:basis-1/3 lg:shrink-0 lg:gap-4 xl:text-8xl">
          <h1>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "022ms" }}>S</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "122ms" }}>a</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "222ms" }}>y</span>
          </h1>
          <h1 ref={intersectionRef}>
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

          <form className='flex flex-col gap-2' ref={formRef} onSubmit={handleSubmit}>
            <input
              className='w-full p-4 border-[3px] bg-white border-secondary rounded-md active:outline-none focus-within:outline-none focus-within:shadow-blue transition-all ease-in-out duration-200'
              type="text"
              placeholder='Name'
              required
              name="from_name"
              value={formData.from_name}
              onChange={(e) => {
                setFormData(prev => ({
                  ...prev,
                  from_name: e.target.value
                }))
              }}
            />
            <input
              className='w-full p-4 border-[3px] bg-white border-secondary rounded-md active:outline-none focus-within:outline-none focus-within:shadow-blue transition-all ease-in-out duration-200'
              type="email"
              placeholder='Email'
              required
              name="from_email"
              value={formData.from_email}
              onChange={(e) => {
                setFormData(prev => ({
                  ...prev,
                  from_email: e.target.value
                }))
              }}
            />
            <textarea
              className='w-full p-4 border-[3px] bg-white border-secondary rounded-md focus-within:outline-none resize-none focus-within:shadow-blue transition-all ease-in-out duration-200'
              placeholder='Type something...'
              rows={6}
              required
              name="message"
              value={formData.message}
              onChange={(e) => {
                setFormData(prev => ({
                  ...prev,
                  message: e.target.value
                }))
              }}
            />
            <ClassicButton
              small
              type="submit"
              disabled={disabled}
            >
              Send
            </ClassicButton>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact