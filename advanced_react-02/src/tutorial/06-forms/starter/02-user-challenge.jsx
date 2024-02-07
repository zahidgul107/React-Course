import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '') return alert('Please enter a name')
    const fakeId = Date.now()
    console.log(fakeId)
    const newUser = { id: fakeId, name }
    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    setName('')
  }

  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id)
    setUsers(updatedUsers)
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h4>Users</h4>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button className="btn" onClick={() => removeUser(user.id)}>
              remove
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
