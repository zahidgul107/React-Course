import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)
  return (
    <>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button className="btn" onClick={() => setUser(null)}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={() => setUser({ name: 'Zahid' })}>
            login
          </button>
        </div>
      )}
    </>
  )
}

export default UserChallenge
