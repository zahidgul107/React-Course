import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    // Filter out the person with the given ID.
    const filteredPeople = people.filter((person) => person.id !== id)
    console.log(filteredPeople)
    //  setPeople(filteredPeople)
    setPeople(people.filter((person) => person.id !== id))
  }

  const clearAllItems = () => {
    setPeople([])
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        // console.log(name)
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button type="button" onClick={() => removePerson(id)}>
              Remove Person
            </button>
          </div>
        )
      })}
      <button
        type="button"
        onClick={() => setPeople([])}
        className="btn"
        style={{ marginTop: '2rem' }}
      >
        Clear items
      </button>
    </>
  )
}

export default UseStateArray
