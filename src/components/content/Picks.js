import React from 'react'

const Picks = (props) => {
    const {picks} = props ;   
    const randomPicks = picks
    .map(x => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(a => a.x)
    .slice(0, 10);
  return (
    <div className="hidden flex-wrap order-2 pt-0 md:pt-6 md:pb-8 js-tab-pane active" id="section-picks">
               { randomPicks && randomPicks.map((book , i) => {
                   return (
                    <div className="flex justify-start items-center p-5 px-6 w-full sm:w-1/2" style={ {backgroundColor:  i%2==0 ? '#D0E3E8' :  "#ECE7E9" } } key={book.id}>
                        <div className='book-thumbnail-picks'>
                            <img src={ book.thumbnail ? book.thumbnail : './images/coverNotFound.jpg' } alt=""/>
                        </div>
                        <div className="ml-4 mt-1 w-2/3">
                            <p className="font-medium">{book.title}</p>
                                <p className="mt-3 text-sm">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent</p>
                            <button className="shadow-md mt-3 bg-grey-lightest hover:bg-white text-indigo-darker text-xs py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add to Wishlist</button>
                        </div>
                    </div>
                   )
               })}
    </div>
  )
}

export default Picks;
