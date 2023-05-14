import React, { Component } from 'react'
import './css/SectionLinesModStreets.css'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import pl from 'yup-locale-pl'
Yup.setLocale(pl)
class SectionLinesModStops extends Component {
	render() {
		const initialValues = {
			kolejnosc: '',
		}
		const validationSchema = Yup.object().shape({
			kolejnosc: Yup.string().required('Nie może być pusty'),
		})

		const onSubmit = data => {
			data.id_usr_emp = this.props.idAccountRole
			axios.post('http://localhost:3001/test', data).then(response => {
				console.log(response.data)
			})
		}

		return (
			<section className="sectionUserRoleInAccount">
				<section className="formChangeDataRoleInAccount">
					<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
						<Form>
							<div className="headerRoleInAccount">
								<span>
									{/* Jest to przesyłane z AccountRole */}
									Wybrany przystanek: {this.props.selectStop.name}
									<ErrorMessage className="errorMessage" component="span" name="kolejnosc" />
								</span>
								<span>Ilosc wierszy: {this.props.selectStop.rows}</span>
								<span>W kolejności: {this.props.selectStop.order}</span>
							</div>
							Zmień kolejność:
							<section className="formContentDataRoleInAccount">
								<Field className="inputFormDataRoleInAccount" as="select" name="kolejnosc" id="role">
									<option value="">----</option>
									{[...Array(this.props.selectStop.rows)].map((_, index) => (
										<option key={index} value={index + 1}>
											{index + 1}
										</option>
									))}
								</Field>

								<br />

								<button className="buttonFormSubmitChangeRoleInAccount">Zmień</button>
							</section>
						</Form>
					</Formik>
				</section>
			</section>
		)
	}
}

export default SectionLinesModStops
