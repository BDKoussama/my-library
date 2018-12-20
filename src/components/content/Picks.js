import React from 'react'
import PickItem from '../content/PickItem';

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
                            <PickItem book = {book} key={book.id} index={i} />
                   )
               })}
    </div>
  )
}

export default Picks;
