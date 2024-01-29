import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        setUsers(data) // Set the fetched data into the users state
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, []) // Empty dependency array to run effect only once on mount

  return (
    <div>
      <h2>Github Users</h2>
      {/* Render the fetched user data */}
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={user.id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FetchData
