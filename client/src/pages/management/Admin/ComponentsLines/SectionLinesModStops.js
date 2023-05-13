import React, { Component } from 'react'
import './css/SectionLinesModStreets.css'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import pl from 'yup-locale-pl'
Yup.setLocale(pl)
class SectionLinesModStops extends Component {
	state = {
		przystanki: [],
		nowyPrzystanek: '',
		brakZawartosci: false,
	}

	dodajPrzystanek = () => {
		const { przystanki, nowyPrzystanek, linia, brakZawartosci } = this.state

		if (nowyPrzystanek) {
			this.setState({
				przystanki: [...przystanki, nowyPrzystanek],
				nowyPrzystanek: '',
			})
		}
	}

	usunPrzystanek = index => {
		const { przystanki } = this.state
		this.setState({
			przystanki: przystanki.filter((_, i) => i !== index),
		})
	}

	zapiszPrzystanki = () => {
		const { przystanki } = this.state

		fetch('http://localhost:3001/test', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ przystanki }),
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.error(error))
	}

	handleChange = event => {
		this.setState({
			nowyPrzystanek: event.target.value,
		})
	}
	
	render() {
		const { linia, przystanki, nowyPrzystanek, brakZawartosci } = this.state

		return (
			<section className="sectionLinesModStreets">
				<div className="headerSectionModStreets">
					<p>Modyfikacja przystanku:</p>
				</div>

				<section className="formAddModStreets">
					<section>
						<label>Dodaj przystanek:</label>
						<input className="inputformAddModStreets" type="text" value={nowyPrzystanek} onChange={this.handleChange} />
						<br />
						<button className="buttonModStreets" onClick={this.dodajPrzystanek}>
							Dodaj przystanek
						</button>
						<br />
						<button className="buttonModStreets" onClick={this.zapiszPrzystanki}>
							Zatwierdź
						</button>
					</section>
					<section className="listStopsModStreets">
						<label>Aktualna lista przystanków:</label>
						<ol className="ulLiModStreets">
							{przystanki.map((przystanek, index) => (
								<li key={index}>
									{przystanek}

									<button className="buttonlistStopsModStreets" onClick={() => this.usunPrzystanek(index)}>
										X
									</button>
								</li>
							))}
						</ol>
						{brakZawartosci && <p>Brak zawartości</p>}
						<div></div>
					</section>
				</section>
			</section>
		)
	}
}

export default SectionLinesModStops
