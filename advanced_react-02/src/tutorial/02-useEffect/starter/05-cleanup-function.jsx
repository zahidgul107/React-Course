import { useEffect, useState } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  console.log('render')
  return (
    <>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {toggle && <RandomComponent />}
    </>
  )
}

const RandomComponent = () => {
  useEffect(() => {
    // console.log('hmm, this is interesting')
    // const intId = setInterval(() => {
    //   console.log('Hello from interval')
    // }, 1000)
    // return () => {
    //   clearInterval(intId)
    // }
    const someFunc = () => {}
    window.addEventListener('scroll', someFunc)
    return window.removeEventListener('scroll', someFunc)
  }, [])
  return <div>Hello there</div>
}

export default CleanupFunction
