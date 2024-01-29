import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  // const handleClick = () => {
  //   // The following line will cause a gotcha in the react devtools.
  //   setValue((currentState) => {
  //     const newState = currentState + 1
  //     console.log('new state', newState)
  //     return newState
  //   })
  // }

  const handleClick = () => {
    // The following line will cause a gotcha in the react devtools.
    setTimeout(() => {
      setValue((currentState) => {
        const newState = currentState + 1
        console.log('new state', newState)
        return newState
      })
    }, 3000)
  }
  return (
    <>
      <h2>{value}</h2>
      <button onClick={handleClick} className="btn">
        Increment
      </button>
    </>
  )
}

export default UseStateGotcha
