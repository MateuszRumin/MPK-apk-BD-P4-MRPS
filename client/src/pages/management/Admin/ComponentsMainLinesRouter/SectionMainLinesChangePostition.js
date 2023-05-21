import React, { Component } from 'react'

import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import pl from 'yup-locale-pl'
Yup.setLocale(pl)

class SectionMainLinesChangePostition extends Component {
	render() {
		const initialValues = {
			newOlder: '',
		}
		const validationSchema = Yup.object().shape({
			newOlder: Yup.string().required('Nie może być pusty'),
		})

		const onSubmit = data => {

			
			data.oldOlder = this.props.selectLineWeekDay.order
			data.id_line = this.props.selectLineWeekDay.id_line
			data.id_route = this.props.selectLineWeekDay.id_route
			axios.post('http://localhost:3001/test', data).then(response => {
				console.log(response.data)
			})
		}
		
		return (
			<section className="sectionUserRoleInAccount">


				
				<section className="formChangeDataRoleInAccount">
					<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
						<Form>
							<div >
								<span>
									{/* Jest to przesyłane z AccountRole */}
									{/* Wybrany przystanek: {this.props.selectStop.name} */}
									<ErrorMessage className="errorMessage" component="span" name="newOlder" />
								</span>
							
								Ilosc wierszy:<b> {this.props.selectLineWeekDay.rows}</b><br/>
								Id lini: <b>{this.props.selectLineWeekDay.id_line}</b><br/>
								Id połączenia:<b> {this.props.selectLineWeekDay.id_route}</b><br/>
								
								W kolejności :<b> {this.props.selectLineWeekDay.order}</b><br/>
								Aktualnie wybrany :<b>{this.props.selectLineWeekDay.selectRow}</b><br/>
								Typ:<b> {this.props.selectLineWeekDay.typ}</b><br/>

								
								{/* <span>W kolejności: {this.props.selectStop.order}</span> */}
							</div>
							Zmień kolejność:
							<section className="formContentDataRoleInAccount">
								<Field className="inputFormDataRoleInAccount" as="select" name="newOlder" id="role">
									<option value="">----</option>
									{[...Array(this.props.selectLineWeekDay.rows)].map((_, index) => (
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

export default SectionMainLinesChangePostition
