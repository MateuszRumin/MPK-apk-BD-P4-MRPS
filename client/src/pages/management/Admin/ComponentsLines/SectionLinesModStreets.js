import React, { Component } from 'react'
import './css/SectionLinesModStreets.css'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import pl from 'yup-locale-pl'
Yup.setLocale(pl)
class SectionLinesModStreets extends Component {
	state = {
		linia: 'tak',
		przystanki: ['Przystanek 1', 'Przystanek 2', 'Przystanek 3'],
		nowyPrzystanek: '',
	}

	dodajPrzystanek = () => {
		const { przystanki, nowyPrzystanek } = this.state
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
		const { przystanki, linia } = this.state
		fetch('http://localhost:3001/auth/login/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ przystanki, linia }),
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
	handleLiniaChange = event => {
		this.setState({
			linia: event.target.value,
		})
	}
	render() {
		const { linia, przystanki, nowyPrzystanek } = this.state
		// const initialValues = {
		// 	role_id: '',
		// }
		// const validationSchema = Yup.object().shape({
		// 	role_id: Yup.string().required('Nie może być pusty'),
		// })

		// const onSubmit = data => {
		// 	axios.post('http://localhost:3001/auth/login/', data).then(response => {
		// 		console.log(response.data)
		// 	})
		// }

		return (
			<section className="sectionUserRoleInAccount">
				{/* <div className="headerSectionDisplayStops">
					<p>Modyfikacja ulicy nr: </p>
				</div>
				<section className="formChangeDataRoleInAccount">
					<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
						<Form>
							<div className="headerRoleInAccount">
								<span>
									Ulica: <ErrorMessage className="errorMessage" component="span" name="role_id" />
								</span>
								<span>id: </span>
							</div>


							<label htmlFor="deleteLines">
								Zmień nazwę: <span className="userdisplaydata"></span>
								<ErrorMessage className="errorMessage" component="span" name="deleteLinfjes" />
							</label>
							<Field className="inputFormDataUsers" type="text" id="adres" name="deleteLines" placeholder="Zmień dane" />
							<br />

                            	<label htmlFor="deleteLines">
								Dodaj przystanki: <span className="userdisplaydata"></span>
								<ErrorMessage className="errorMessage" component="span" name="deleteLinfjes" />
							</label>
							<Field className="inputFormDataUsers" type="text" id="adres" name="deleteLines" placeholder="Zmień dane" />
							<br />
            
                            



							<section className="formContentDataRoleInAccount">
								<Field className="inputFormDataRoleInAccount" as="select" name="role_id" id="role">
									<option value="">----</option>
									<option value="1">Admin</option>
									<option value="2">Manager</option>
									<option value="3">Worker</option>
								</Field>

								<br />

								<button className="buttonFormSubmitChangeRoleInAccount">Zmień</button>
							</section>
						</Form>
					</Formik>
				</section> */}
				<div>
					Linia:
					<input type="text" value={linia} onChange={this.handleLiniaChange} />
				</div>
				<div>
					<h2>Lista przystanków</h2>
					<ul>
						{przystanki.map((przystanek, index) => (
							<li key={index}>
								{przystanek}
								<button onClick={() => this.usunPrzystanek(index)}>Usuń</button>
							</li>
						))}
					</ul>
					<div>
						<input type="text" value={nowyPrzystanek} onChange={this.handleChange} />
						<button onClick={this.dodajPrzystanek}>Dodaj przystanek</button>
						<button onClick={this.zapiszPrzystanki}>Zatwierdź</button>
					</div>
				</div>
			</section>
		)
	}
}

export default SectionLinesModStreets
