import React from 'react'

const Library = (props) => {
    const { library } = props ; 
  return (
    <div className="hidden px-2 pt-2 md:px-0 flex-wrap order-2 pb-8 js-tab-pane active" id="section-library">
       
       { library && library.map(book => {
            return (
            <div className="flex flex-row sm:flex-col items-center sm:items-start w-full xs:w-1/2 sm:w-1/3 md:w-1/5 p-4 js-book" key={book.id}>
                <img src={ book.thumbnail ? book.thumbnail : './images/coverNotFound.jpg' } className="w-1/3 sm:w-full shadow-md transition-normal hover:brighter hover:translate-y-1 hover:shadow-lg hover:border-indigo"/>
                <div className="ml-3 sm:ml-0 w-2/3 sm:w-full">
                    <p className="text-sm my-2 font-medium sm:font-normal">{ book.title } Aug 2018</p>
                    <p className="block sm:hidden mt-2 mb-3 text-sm leading-medium">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent.</p>
                    <label className="hidden sm:inline-block rounded-full libre-bg-grey text-white px-2 py-1/2 text-xs">Loaned</label>
                    <div className="block sm:hidden relative">
                        <select className="block appearance-none w-full text-sm bg-white border border-grey-light hover:border-grey pl-3 py-1 pr-8 rounded shadow leading-normal focus:outline-none focus:shadow-outline">
                            <option>Start</option>
                            <option>Loaned</option>
                            <option >Finished</option>
                        </select>
                        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            )
       }) }
        
    </div>
  )
}

export default Library
