import React from 'react'

const Desktopstats = () => {
  return (
    		<div className="px-6 md:px-0 mt-4 md:flex flex-wrap order-1 md:-order-1 md:shadow-md js-tab-pane" id="section-stats">
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
  )
}

export default Desktopstats
