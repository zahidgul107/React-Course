import { useState } from 'react'

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('susan')

  return (
    <>
      <h4>Falsy OR : {text || 'hello world'}</h4>
      <h4>Falsy AND : {text && 'hello world'}</h4>
      <h4>Truthy OR : {text || 'hello world'}</h4>
      <h4>Truthy AND : {text && 'hello world'}</h4>
    </>
  )
}
export default ShortCircuitOverview
