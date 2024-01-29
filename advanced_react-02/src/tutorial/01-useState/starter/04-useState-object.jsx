import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'John Doe',
    age: 30,
    hobby: 'Scream at Computer',
  })

  // const nextPerson = () => {
  //   setPerson((prevPerson) => ({
  //     ...prevPerson,
  //     name: 'Zahid Gul',
  //   }))
  // }

  const nextPerson = () => {
    setPerson((prevPerson) => ({
      name: 'Zahid Gul',
      age: 23,
      hobby: 'cricket',
    }))
  }

  return (
    <>
      <h2>{person.name}</h2>
      <p>Age: {person.age}</p>
      <p>Hobby: {person.hobby}</p>
      <button type="button" className="btn" onClick={nextPerson}>
        Next Person
      </button>
    </>
  )
}

export default UseStateObject
