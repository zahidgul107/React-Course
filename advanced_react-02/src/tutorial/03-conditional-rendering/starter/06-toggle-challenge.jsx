import { useState } from 'react'

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)

  // const toggleAlert = () => {
  //   if (showAlert) return setShowAlert(false)
  //   setShowAlert(true)
  // }
  return (
    <>
      <button
        type="button"
        className="btn"
        onClick={() => setShowAlert(!showAlert)}
      >
        toggle
      </button>
      {showAlert && <Alert />}
    </>
  )
}

const Alert = () => {
  return <div className="alert alert-danger">Hello world</div>
}

export default ToggleChallenge
