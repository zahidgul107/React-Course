import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url)
        if (!resp.ok) {
          setIsError(true)
          isLoading(false)
          return
        }
        const user = await resp.json()
        setUser(user)
        console.log('user== ', user)
      } catch (error) {
        console.log(error)
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchUser()
  }, [])
  if (isLoading) return <h2>Loading...</h2>
  if (isError) return <h2>There is error in loading...</h2>
  const { avatar_url, login, name, company, bio } = user
  return (
    <>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={login}
      />
      <h2>{name}</h2>
      <h4>Works at: {company}</h4>
      <p>{bio}</p>
    </>
  )
}
export default MultipleReturnsFetchData
