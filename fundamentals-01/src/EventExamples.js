import React from 'react'

const EventExamples = () => {
  const handleFormatInput = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    console.log('handle Input submit')
  }

  const handleButtonClick = () => {
    alert('You clicked the button!') // eslint-disable-line no-alert
  }

  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }

  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input type="text" onChange={handleFormatInput} name="example" />
        <button type="submit">Submit</button>
      </form>

      <form>
        <h2>Typical Form</h2>
        <input type="text" onChange={handleFormatInput} name="example" />
        <button type="submit" onClick={handleFormSubmission}>
          Submit
        </button>
      </form>

      <br />
      <button onClick={handleButtonClick}>Click me</button>

      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          onChange={(e) => console.log(e.target.value)}
          name="example"
        />
        <button type="submit">Submit</button>
      </form>

      <br />
      <button onClick={() => console.log('click me')}>Click me</button>
    </section>
  )
}

export default EventExamples
