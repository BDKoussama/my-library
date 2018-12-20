import React from 'react'

function FinishedBook(props) {
    const { books , total } = props ;
  return (
    <div className="my-4 border-t pt-4">
        <h3 className="text-indigo-dark font-normal">You have read <strong>{books.length} of {total} books</strong> in 2018</h3>
        <div className="flex flex-wrap -ml-2 justify-start items-center">
        { 
            books && books.map(item => { 
            return(
                <img key={item.id } src={ item.thumbnail ? item.thumbnail : './images/coverNotFound.jpg' }  alt="read" className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block m-2 transition-normal hover:brighter"/>
            )
        })
        }
        </div>
    </div>
  )
}

export default FinishedBook
