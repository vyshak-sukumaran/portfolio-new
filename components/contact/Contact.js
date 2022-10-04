import React, { useEffect, useRef, useState } from 'react'
import useIntersectionObserver from '../../utils/useIntersectionObserver';
import SentIcon from '../../assets/sent.svg'
import AlertIcon from '../../assets/alert.svg'
import CloseIcon from '../../assets/close.svg'
import emailjs from '@emailjs/browser';
import Button from '../buttons/Button';

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
    <div id="contact" className='w-full min-h-[700px] relative p-4'>
      {/* snack bar */}
      <div ref={toastRef} className={`fixed top-3 right-5 z-50 w-[21rem] h-24 box-border bg-white rounded-lg border-[1px] border-gray shadow-md overflow-hidden flex justify-center transition-all duration-500 ease-in-out-wobble ${!showToast ? "translate-x-[calc(100%+1.25rem)]" : "translate-x-0"}`}>
        <div className='flex items-center justify-center gap-7'>
          {
            !err ?
              <SentIcon className="w-10 h-10" />
              :
              <AlertIcon className="w-10 h-10" />
          }
          <div className="flex flex-col font-inter text-black">
            <span className='text-base font-medium'>
              {!err ? "Message sent" : "Alert"}
            </span>
            <span className='text-sm'>
              {!err ? "Thanks for your time" : "Something went wrong"}
            </span>
          </div>
          <button
            className='border-none outline-none rounded-full hover:bg-gray-light p-1 transition-all duration-150'
            onClick={(e) => {
              setShowToast(false)
            }}
          >
            <CloseIcon className="w-7 h-7" />
          </button>
        </div>
        <div id="progress" className={`absolute bottom-0 left-0 w-full h-1 bg-primary `} style={{ animationDelay: "500ms" }}></div>
      </div>
      {/* snackbar end */}
      <div className="w-full max-w-5xl h-full mx-auto">
        <header>
          <h1 ref={intersectionRef} className="text-xl text-primary uppercase font-rubik font-bold tracking-wider leading-tight py-3 text-center md:text-2xl lg:text-3xl xl:text-4xl">
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "022ms" }}>C</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "122ms" }}>o</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "222ms" }}>n</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "322ms" }}>t</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "422ms" }}>a</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "522ms" }}>c</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "622ms" }}>t</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "722ms" }}>&nbsp;</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "822ms" }}>M</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "922ms" }}>e</span>
            {/* <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "1022ms" }}>👋</span> */}
          </h1>
          <br />
          <h2 className='text-center text-base text-black font-medium'>Want to work together or have any questions?</h2>
        </header>
        <br /><br />
        <div className='w-full box-border h-fit max-w-2xl mx-auto'>
          <form className='flex flex-col gap-2' ref={formRef} onSubmit={handleSubmit}>
            <div className='flex gap-2'>
              <input
                className='w-full p-4 border-[3px] text-black bg-white border-primary rounded-md active:outline-none focus-within:outline-none'
                type="text"
                placeholder='Full name'
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
                className='w-full p-4 border-[3px] text-black bg-white border-primary rounded-md active:outline-none focus-within:outline-none'
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
            </div>
            <textarea
              className='w-full p-4 border-[3px] text-black bg-white border-primary rounded-md focus-within:outline-none resize-none'
              placeholder='Message'
              rows={8}
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
            <div className='w-full max-w-sm mx-auto'>
              <Button
                fullWidth
                size="large"
                type="submit"
                disabled={disabled}
              >
                Send
              </Button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact