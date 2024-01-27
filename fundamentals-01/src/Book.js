import React from 'react'

const Book = (props) => {
  const { img, author, title, getBook, id, number } = props
  console.log(number)
  const getSingleBook = () => {
    getBook(id)
  }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>Click me first method</button>
      <button onClick={() => getBook(id)}>Click me second method</button>
      <h4>{author}</h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  )
}

export default Book
