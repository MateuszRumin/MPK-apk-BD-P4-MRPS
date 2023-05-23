import React, { Component } from 'react'
import DisplayLines from './DisplayLines'
import '../css/HomeContent.css'
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
							<p>Wpisz nazwę przystanku, aby pojawiła się tablica z godzinami odjazdów autobusów.</p>

							<section className="search-table-bus">
								<input type="text" className="bus-stop-input" placeholder="Podaj nazwe przystanku" />
								<a href="#">
									<button type="submit" className="btn-arrow stop-bus">
										<i className="fa-solid fa-arrow-right arrow"></i>
									</button>
								</a>
							</section>
						</section>

						<section className="search-line sub-section-right">
							<p>JAK DOJADĘ ?</p>

							<section className="section-how-road">
								<p>
									Wpisz przystanek początkowy i końcowy, aby wyszukać odpowiednie linie zawierające podane przystanki.
								</p>

								<input type="text" className="bus-stop-input" placeholder="Przystanek początkowy" />
								<input type="text" className="bus-stop-input" placeholder="Przystanek końcowy" />
								<input type="date" className="bus-stop-input" placeholder="Podaj nazwe przystanku" />
								<input type="time" className="bus-stop-input" placeholder="Podaj nazwe przystanku" />

								<a href="#">
									<button type="submit" className="btn-arrow how-road">
										ZATWIERDŹ
									</button>
								</a>
							</section>
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
