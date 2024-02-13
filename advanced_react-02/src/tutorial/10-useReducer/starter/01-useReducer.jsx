import React, { useReducer } from 'react'
import { data } from '../../../data'
import { CLEAR_LIST, REMOVE_LIST, RESET_LIST } from './actions.js'
import reducer from './reducer.js'

const defaultState = {
  people: data,
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  //const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)
    dispatch({ type: REMOVE_LIST, payload: { id } })
  }

  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }

  const resetList = () => {
    dispatch({ type: RESET_LIST })
  }

  console.log(state)
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {state.people.length ? (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          Reset items
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
