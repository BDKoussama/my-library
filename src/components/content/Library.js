import React from 'react'

const Library = () => {
  return (
    	<div className="hidden px-2 pt-2 md:px-0 flex-wrap order-2 pb-8 js-tab-pane active" id="section-library">
        <div className="flex flex-row sm:flex-col items-center sm:items-start w-full xs:w-1/2 sm:w-1/3 md:w-1/5 p-4 js-book">
            <img src="./images/book-01.jpg" alt="book-01" className="w-1/3 sm:w-full shadow-md transition-normal hover:brighter hover:translate-y-1 hover:shadow-lg hover:border-indigo"/>
            <div className="ml-3 sm:ml-0 w-2/3 sm:w-full">
                <p className="text-sm my-2 font-medium sm:font-normal">apartmento Aug 2018</p>
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
        <div className="flex flex-row sm:flex-col items-center sm:items-start w-full xs:w-1/2 sm:w-1/3 md:w-1/5 p-4">
            <img src="./images/book-02.jpg" alt="book-02" className="w-1/3 sm:w-full shadow-md transition-normal hover:brighter hover:translate-y-1 hover:shadow-lg hover:border-indigo js-book"/>
            <div className="ml-3 sm:ml-0 w-2/3 sm:w-full">
                <p className="text-sm my-2 font-medium sm:font-normal">Popeye Aug 2018</p>
                <p className="block sm:hidden mt-2 mb-3 text-sm leading-medium">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent.</p>
                <label  className="hidden sm:inline-block rounded-full libre-bg-yellow text-white px-2 py-1/2 text-xs">Started</label>
                <div className="block sm:hidden relative">
                    <select className="block appearance-none w-full text-sm bg-white border border-grey-light hover:border-grey pl-3 py-1 pr-8 rounded shadow leading-normal focus:outline-none focus:shadow-outline">
                        <option>Start</option>
                        <option>Loaned</option>
                        <option>Reading</option>
                        <option>Finished</option>
                    </select>
                    <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-row sm:flex-col items-center sm:items-start w-full xs:w-1/2 sm:w-1/3 md:w-1/5 p-4">
            <img src="./images/book-03.jpg" alt="book-03" className="w-1/3 sm:w-full shadow-md transition-normal hover:brighter hover:translate-y-1 hover:shadow-lg hover:border-indigo js-book"/>
            <div className="ml-3 sm:ml-0 w-2/3 sm:w-full">
                <p className="text-sm my-2 font-medium sm:font-normal">Brutus Aug 2018</p>
                <p className="block sm:hidden mt-2 mb-3 text-sm leading-medium">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent.</p>
                <label  className="hidden sm:inline-block rounded-full libre-bg-pink text-white px-2 py-1/2 text-xs">Reading</label>
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
        <div className="flex flex-row sm:flex-col items-center sm:items-start w-full xs:w-1/2 sm:w-1/3 md:w-1/5 p-4">
            <img src="./images/book-04.jpg" alt="book-04" className="w-1/3 sm:w-full shadow-md transition-normal hover:brighter hover:translate-y-1 hover:shadow-lg hover:border-indigo js-book"/>
            <div className="ml-3 sm:ml-0 w-2/3 sm:w-full">
                <p className="text-sm my-2 font-medium sm:font-normal">Harnako Aug 2018</p>
                <p className="block sm:hidden mt-2 mb-3 text-sm leading-medium">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent.</p>
                <label  className="hidden sm:inline-block rounded-full bg-indigo text-white px-2 py-1/2 text-xs">Finished</label>
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
        <div className="flex flex-row sm:flex-col items-center sm:items-start w-full xs:w-1/2 sm:w-1/3 md:w-1/5 p-4">
            <img src="./images/book-05.jpg" alt="book-05" className="w-1/3 sm:w-full shadow-md transition-normal hover:brighter hover:translate-y-1 hover:shadow-lg hover:border-indigo js-book"/>
            <div className="ml-3 sm:ml-0 w-2/3 sm:w-full">
                <p className="text-sm my-2 font-medium sm:font-normal">Premium 2 2018</p>
                <p className="block sm:hidden mt-2 mb-3 text-sm leading-medium">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent.</p>
                <label  className="hidden sm:inline-block rounded-full bg-indigo text-white px-2 py-1/2 text-xs">Finished</label>
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
        <div className="flex flex-row sm:flex-col items-center sm:items-start w-full xs:w-1/2 sm:w-1/3 md:w-1/5 p-4">
            <img src="./images/book-06.jpg" alt="book-06" className="w-1/3 sm:w-full shadow-md transition-normal hover:brighter hover:translate-y-1 hover:shadow-lg hover:border-indigo js-book"/>
            <div className="ml-3 sm:ml-0 w-2/3 sm:w-full">
                <p className="text-sm my-2 font-medium sm:font-normal">Premium 4 2018</p>
                <p className="block sm:hidden mt-2 mb-3 text-sm leading-medium">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent.</p>
                <label className="hidden sm:inline-block rounded-full bg-indigo text-white px-2 py-1/2 text-xs">Finished</label>
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
        <div className="flex flex-row sm:flex-col items-center sm:items-start w-full xs:w-1/2 sm:w-1/3 md:w-1/5 p-4">
            <img src="./images/book-07.jpg" alt="book-07" className="w-1/3 sm:w-full shadow-md transition-normal hover:brighter hover:translate-y-1 hover:shadow-lg hover:border-indigo js-book"/>
            <div className="ml-3 sm:ml-0 w-2/3 sm:w-full">
                <p className="text-sm my-2 font-medium sm:font-normal">Brutus Aug 2018</p>
                <p className="block sm:hidden mt-2 mb-3 text-sm leading-medium">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent.</p>
                <label  className="hidden sm:inline-block rounded-full libre-bg-pink text-white px-2 py-1/2 text-xs">Reading</label>
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
    </div>
  )
}

export default Library
