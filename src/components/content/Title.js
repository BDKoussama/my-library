import React from 'react'

const Title = () => {
  return (
    <div className="px-6 md:px-0 flex justify-between items-center -order-1">
		<div>
				<h2 className="font-normal">Art &amp; Design</h2>
				<p className="text-grey-dark mt-2">Interesting Stats</p>
		</div>
		    <button className="bg-indigo-dark hover:bg-indigo-darker text-white text-sm py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add New Book</button>
	</div>
  )
}

export default Title
