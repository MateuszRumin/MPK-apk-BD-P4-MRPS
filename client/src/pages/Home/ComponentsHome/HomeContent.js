import React, { useState } from 'react'
import DisplayLines from './DisplayLines'
import { WhenToArrive } from './WhenToArrive'
import '../css/HomeContent.css'
import { SearchStops } from './SearchStops'
import DisplaySearchStop from './DisplaySearchStop'
import Messages from './Messages'
const HomeContent = () => {
	let [selectLine2, setSelectLine2] = useState(null)

	function selectLines(line) {
		// console.log(line);

		selectLine2 = line
		setSelectLine2(selectLine2)
		console.log(selectLine2)
	}


	return (
		<div className="container">
			<main className="main-content">
				<section className="section-left">
					<DisplayLines />
					<Messages />
				</section>
				<section className="section-right">
					<section className="search-header">
						<p>WYSZUKIWANIE POŁĄCZEŃ</p>
					</section>

					<section className="bus-table sub-section-right">
						<SearchStops onChange={selectLines}/>
					</section>

					<section className="search-line sub-section-right">
						<DisplaySearchStop selectLine2={selectLine2}/>
					</section>

					{/* <Messages /> */}
				</section>
			</main>
		</div>
	)
}

export default HomeContent
