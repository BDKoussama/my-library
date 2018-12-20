import React from 'react'

function ReadingBook(props) {
    const {books} = props; 
  return (
    <div className="mt-6">
        <p className="text-grey-dark mt-1 text-sm">Currently Reading</p>
        {books && books.map(item => {
            return (
                <div className="flex items-start mt-2" key={item.id}>
                    <img src={ item.thumbnail ? item.thumbnail : './images/coverNotFound.jpg' }  alt="read" className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block m-2 transition-normal hover:brighter"/>
                    <div className="ml-3">
                            <p className="mt-1 leading-normal">{item.title}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ReadingBook
