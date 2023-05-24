import React, { Component } from 'react'
import DisplayLines from './DisplayLines'
import { WhenToArrive } from './WhenToArrive'
import '../css/HomeContent.css'
import { SearchStops } from './SearchStops'
class HomeContent extends Component {
	render() {
		return (
			<div className="container">
				<main className="main-content">
					<section className="section-left">
						<DisplayLines />
					</section>

					<section className="section-right">
						<section className="search-header">
							<p>WYSZUKIWANIE POŁĄCZEŃ</p>
						</section>

						<section className="bus-table sub-section-right">


							<SearchStops />
							
						</section>

						<section className="search-line sub-section-right">
						<WhenToArrive />
						</section>

						<section className="messages sub-section-right">
							<p>KOMUNIKATY:</p>
						</section>
					</section>
				</main>
			</div>
		)
	}
}

export default HomeContent
