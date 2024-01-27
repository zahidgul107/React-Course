import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { books } from './books'
import Book from './Book'
import EventExamples from './EventExamples'

function BookList() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }
  return (
    <>
      <EventExamples />
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} getBook={getBook} number={index} />
          )
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
