import React from 'react'
import Title from '../content/Title';
import Desktopstats from '../content/Desktopstats';
import Library from '../content/Library';
import Picks from '../content/Picks';
import Tabs from '../Tabs/Tabs';

const Main = () => {
  return (
    <div className="flex flex-1 flex-col md:px-6 pt-10" id="content">
            {/* --- Title ---*/}
				<Title/>
            {/* Desktop Stats*/}
				<Desktopstats/>
            { /* Tabs */ }
        <Tabs>
          <div label="Library">
            <Library/>
          </div>
          <div label="Picks for you">
            <Picks/>
          </div>
        </Tabs>
		</div>
  )
}

export default Main
