import React from 'react'
import axios from 'axios'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import pl from 'yup-locale-pl'
import { redirect } from 'react-router-dom'
import './css/SectionUsersEditionUsers.css'
Yup.setLocale(pl)
export class SectionUsersEditionUsers extends React.Component {
	state = {
		first_name: 'a',
		second_name: 'b',
		addres: 'c',
		pesel: 'd',
		tel_num: 'e',
		
	}






	handleChangeValues = props => {
		// console.log(this.props.data);
		this.setState({
			first_name: 'test',
			second_name: 'b',
			addres: 'c',
			pesel: 'd',
			tel_num: 'e',
		})
	}

	// handleChangeValues = (newValues) => {
	// 	this.setState({
	// 	  firstName: newValues.firstName,
	// 	  lastName: newValues.lastName,
	// 	  pesel: newValues.pesel,
	// 	  number: newValues.number,
	// 	});
	//   }

	render() {
		
		const { first_name, second_name, addres, pesel, tel_num } = this.state
		const initialValues = {
			first_name: '',
			second_name: '',
			addres: '',
			pesel: '',
			tel_num: '',
		}
		const validationSchema = Yup.object().shape({
			first_name: Yup.string().min(5, 'Za krotki').max(20, 'Za dlugi').required('Nie może być pusty'),
			second_name: Yup.string().min(3, 'Za krotki').max(20).required('Nie może być pusty'),
			addres: Yup.string().min(3, 'Za krotki').max(20).email('zły adres email').required('Nie może być pusty'),
			pesel: Yup.number().typeError('To musi być numer').required('Nie może być pusty'),
			tel_num: Yup.number().typeError('To musi być numer').required('Nie może być pusty'),
		})

		const onSubmit = data => {
			axios.post('http://localhost:3001/auth/login/', data).then(response => {
				console.log(response.data)
			})
		}

		return (
			<section className="sectionUsersEditionUsers">
				<div className="headerSectionEditionUsers">
					<p>Edycja:</p>
				</div>
				{/* To jest nawigacja */}
				<section className="formChangeDataUsers">
					<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
						<Form>
							<div className="headerEditionUsers">
								<span>Pracownik: </span>
								<span>id: 1</span>
							</div>

							<section className="formContentDataUsers">
								<label htmlFor="imie">
									Imię: <ErrorMessage className="errorMessage" component="span" name="first_name" />
								</label>
								<Field className="inputFormDataUsers" type="text" id="imie" name="first_name" value={first_name} />

								<br />
								<label htmlFor="nazwisko">
									Nazwisko: <ErrorMessage className="errorMessage" component="span" name="second_name" />
								</label>
								<Field
									className="inputFormDataUsers"
									type="text"
									id="nazwisko"
									name="second_name"
									value={second_name}
								/>

								<br />
								<label htmlFor="adres">
									Adres: <ErrorMessage className="errorMessage" component="span" name="addres" />
								</label>
								<Field className="inputFormDataUsers" type="text" id="adres" name="addres" value={addres} />

								<br />
								<label htmlFor="pesel">
									Pesel: <ErrorMessage className="errorMessage" component="span" name="pesel" />
								</label>
								<Field className="inputFormDataUsers" type="text" id="pesel" name="pesel" value={pesel} />

								<br />
								<label htmlFor="tel">
									Telefon: <ErrorMessage className="errorMessage" component="span" name="tel_num" />
								</label>
								<Field className="inputFormDataUsers" type="phone" id="tel" name="tel_num" value={tel_num} />
								<div onClick={this.handleChangeValues}>dd</div>
							
								<br />
								<button className="buttonFormSubmitChangeUsers">Zatwierdż</button>
							</section>
						</Form>
					</Formik>
				</section>
			</section>
		)
	}
}
