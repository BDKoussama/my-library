import React from 'react'

const Picks = () => {
  return (
    <div className="hidden flex-wrap order-2 pt-0 md:pt-6 md:pb-8 js-tab-pane active" id="section-picks">
               <div className="flex justify-start items-center p-5 px-6 w-full sm:w-1/2" style={ {backgroundColor: "#FBC164"} }>
                   <img src="./images/pick-1.jpg" alt="pick" className="shadow-md w-1/3"/>
                   <div className="ml-4 mt-1 w-2/3">
                       <p className="font-medium">Popeye Jul 2018</p>
                        <p className="mt-3 text-sm">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent</p>
                       <button className="shadow-md mt-3 bg-grey-lightest hover:bg-white text-indigo-darker text-xs py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add to Wishlist</button>
                   </div>
               </div>
               <div className="flex justify-start items-center p-5 px-6  w-full sm:w-1/2" style={{backgroundColor:'#F1CECD'}}>
                   <img src="./images/pick-2.jpg" alt="pick" className="shadow-md w-1/3"/>
                   <div className="ml-4 mt-1 w-2/3">
                       <p className="font-medium">Brutus Aug 2018</p>
                       <p className="mt-3 text-sm">Sapien eget, fermentum curabitur quis ut pharetra odio id, vitae eros eget maecenas, ullamcorper vitae.</p>
                       <button className="shadow-md mt-3 bg-grey-lightest hover:bg-white text-indigo-darker text-xs py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add to Wishlist</button>
                   </div>
               </div>
               <div className="flex justify-start items-center p-5 px-6  w-full sm:w-1/2" style={{backgroundColor:'#ECE7E9'}}>
                   <img src="./images/pick-3.jpg" alt="pick" className="shadow-md w-1/3"/>
                   <div className="ml-4 mt-1 w-2/3">
                       <p className="font-medium">Casa Aug 2018</p>
                       <p className="mt-3 text-sm">Curabitur quis ut pharetra odio id, vitae eros eget tristique maecenas, ullamcorper vitae.</p>
                       <button className="shadow-md mt-3 bg-grey-lightest hover:bg-white text-indigo-darker text-xs py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add to Wishlist</button>
                   </div>
               </div>
               <div className="flex justify-start items-center p-5 px-6  w-full sm:w-1/2" style={{backgroundColor:'#D0E3E8'}}>
                   <img src="./images/pick-4.jpg" alt="pick" className="shadow-md w-1/3"/>
                   <div className="ml-4 mt-1 w-2/3">
                       <p className="font-medium">SUPER: Jul 2018</p>
                       <p className="mt-3 text-sm">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent</p>
                       <button className="shadow-md mt-3 bg-grey-lightest hover:bg-white text-indigo-darker text-xs py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add to Wishlist</button>
                   </div>
               </div>
           </div>
  )
}

export default Picks;
