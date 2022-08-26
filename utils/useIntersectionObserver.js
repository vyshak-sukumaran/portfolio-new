import React from 'react'

const useIntersectionObserver = (ref, options) => {
  const [intersecting, setIntersecting] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIntersecting(true)
      // setIntersecting(entry.isIntersecting) "this will trigger multiple times"
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.unobserve(ref.current)
    }
  }, [])
  return intersecting
}

export default useIntersectionObserver