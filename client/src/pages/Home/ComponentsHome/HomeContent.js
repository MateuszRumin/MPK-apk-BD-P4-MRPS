import React, { Component } from 'react'
import "../css/HomeContent.css"
class HomeContent extends Component {
	render() {
		return (
			<div className="container">
				<main className="main-content">
					<section className="section-left">
						<section className="line-header">
							<p>ROZKŁAD JAZDY AUTOBUSÓW</p>
							<p>MIEJSKIE:</p>
						</section>

						<section className="section-line urban">
							<div className="square-line normal-line">5</div>
							<div className="square-line new-line">4</div>
							<div className="square-line time-change-line">6</div>
							<div className="square-line night-line">4</div>
						</section>

						<section className="line-header">
							<p>PODMIEJSKIE:</p>
						</section>

						<section className="section-line suburban">
							<div className="square-line normal-line">16</div>
							<div className="square-line new-line">8</div>
							<div className="square-line time-change-line">2</div>
							<div className="square-line night-line">9</div>
						</section>

						<section className="section-legend">
							<span className="header-legend">LEGENDA:</span>

							<p className="legend">
								<i className="fa-solid fa-square legend-new"></i>
								<span className="content-legend">Nowa linia lub linia dla której nastąpiła zmiana rozkładu jazdy</span>
							</p>

							<p className="legend">
								<i className="fa-solid fa-square legend-time-change"></i>
								<span className="content-legend">Linia która czasowo kursuje po zmienionej trasie</span>
							</p>

							<p className="legend">
								<i className="fa-solid fa-square legend-night"></i>
								<span className="content-legend">Linia nocna</span>
							</p>
						</section>
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

