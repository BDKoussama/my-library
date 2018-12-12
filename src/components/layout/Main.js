import React from 'react'

const Main = () => {
  return (
        	<div className="flex flex-1 flex-col md:px-6 pt-10" id="content">
				<div className="px-6 md:px-0 flex justify-between items-center -order-1">
					<div>
						<h2 className="font-normal">Art &amp; Design</h2>
						<p className="text-grey-dark mt-2">Interesting Stats</p>
					</div>
					<button className="bg-indigo-dark hover:bg-indigo-darker text-white text-sm py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add New Book</button>
				</div>
				<div className="hidden px-6 md:px-0 mt-4 md:flex flex-wrap order-1 md:-order-1 md:shadow-md js-tab-pane" id="section-stats">
					<div className="p-4 px-6 w-full md:w-1/2 rounded md:rounded-r-none bg-white shadow-md md:shadow-none">
						<h4>Your favourite authors in this category</h4>
						<table className="mt-4 w-full">
							<thead className="p-2 text-sm leading-loose border-b text-indigo">
								<tr>
									<td>Name</td>
									<td className="text-center">Owned/Wishlist</td>
									<td className="text-right">Nationality</td>
								</tr>
							</thead>
							<tbody className="p-2 leading-loose text-sm">
								<tr className="border-b">
									<td className="py-2">Yohji Yamamoto</td>
									<td className="py-2 text-center">5/4</td>
									<td className="py-2 text-right">Japan</td>
								</tr>
								<tr className="border-b">
									<td className="py-2">Sato Oki</td>
									<td className="py-2 text-center">1/3</td>
									<td className="py-2 text-right">Japan</td>
								</tr>
								<tr>
									<td className="py-2">Amaya Arzuaga</td>
									<td className="py-2 text-center">1/1</td>
									<td className="py-2 text-right">Spain</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="w-full md:w-1/2 p-4 md:pt-12 md:pl-1 mt-4 md:mt-0 lg:pt-12 lg:pl-8 rounded md:rounded-r-none bg-white shadow-md md:shadow-none">
						<div className="flex">
							<div className="w-1/2">
								<p className="text-indigo text-sm p-2">Most read format</p>
								<p className="font-medium text-sm pl-2">Print</p>
							</div>
							<div className="w-1/2">
								<p className="text-indigo text-sm p-2">Total read/own</p>
								<p className="font-medium text-sm pl-2">4/7</p>
							</div>
						</div>
						<div className="pt-6">
							<p className="text-indigo text-sm p-2">Most re-read book</p>
							<p className="font-medium text-sm pl-2 leading-normal">Just My Type: A Book About Fonts
								<br/>
                            <span className="font-normal">by Simon Garfield</span>
                            </p>
						</div>
					</div>
				</div>
				<div className="px-6 md:px-0 flex items-baseline justify-between border-b-2 border-grey-light mt-6 order-0 lg:order-1">
					<h4 className="hidden md:inline-block text-grey-dark font-normal">Books</h4>
					<div>
						<div className="inline-block md:hidden no-underline border-indigo pb-2 px-2 text-sm mr-2 text-indigo-darkest hover:cursor-pointer js-tab relative" data-tab="section-stats">Stats</div>
						<div className="no-underline inline-block border-indigo pb-2 px-2 text-sm mr-2 text-indigo-darkest hover:cursor-pointer js-tab active relative" data-tab="section-library">Library <span className="text-indigo text-xs">(7)</span></div>
						<div className="no-underline inline-block border-indigo pb-2 px-2 text-sm text-indigo-darkest hover:cursor-pointer js-tab relative" data-tab="section-picks">Picks for you</div>
					</div>
				</div>
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
									<option selected>Finished</option>
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
									<option selected>Finished</option>
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
									<option selected>Finished</option>
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
									<option selected>Finished</option>
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
									<option selected>Finished</option>
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
									<option selected>Finished</option>
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
									<option selected>Finished</option>
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
				<div className="hidden flex-wrap order-2 pt-0 md:pt-6 md:pb-8 js-tab-pane" id="section-picks">
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
			</div>
  )
}

export default Main
