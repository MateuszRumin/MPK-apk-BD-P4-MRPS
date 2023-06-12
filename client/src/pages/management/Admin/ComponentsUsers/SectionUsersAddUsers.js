import React, { Component } from 'react'
import './css/SectionUsersAddUsers.css'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import pl from 'yup-locale-pl'
Yup.setLocale(pl)
class SectionUsersAddUsers extends Component {

	constructor(props) {
		super(props)

		this.state = {
			initialValues: {
				first_name: '',
			second_name: '',
			addres: '',
			pesel: '',
			tel_num: '',
			id_role: '',
			},
			serviceErr: {
				error: false,
				responseSer: false,
				content: '',
			},
		}
	}

	render() {
		const { initialValues } = this.state
		const { content, error, responseSer } = this.state
		const validationSchema = Yup.object().shape({
			first_name: Yup.string()
				.matches(/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*$/, 'Tylko litery, musi zaczynać się od dużej litery')
				.min(3, 'Za krótki')
				.max(20, 'Za długi')
				.required('Nie może być pusty'),

			second_name: Yup.string()
				.matches(/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*$/, 'Tylko litery, musi zaczynać się od dużej litery')
				.min(3, 'Za krótki')
				.max(20, 'Za długi')
				.required('Nie może być pusty'),
			addres: Yup.string().min(3, 'Za krotki').max(30).required('Nie może być pusty'),
			pesel: Yup.number().typeError('To musi być numer').required('Nie może być pusty'),

			// pesel: Yup.string()
			// 	.required('Nie może być pusty')
			// 	.test('valid-pesel', 'Nieprawidłowy numer PESEL', value => {
			// 		if (!value) return true // Jeśli wartość jest pusta, walidacja przechodzi (inną walidację pokryje już required())

			// 		const peselRegex = /^[0-9]{11}$/
			// 		if (!peselRegex.test(value)) return false // Jeśli numer PESEL nie ma 11 cyfr, walidacja nie przechodzi

			// 		// Sprawdzenie poprawności cyfry kontrolnej
			// 		const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3]
			// 		const digits = value.split('').map(Number)
			// 		const controlSum = digits.slice(0, 10).reduce((sum, digit, index) => sum + digit * weights[index], 0)
			// 		const controlDigit = (10 - (controlSum % 10)) % 10

			// 		return controlDigit === digits[10] // Walidacja przechodzi, jeśli cyfra kontrolna jest poprawna
			// 	})
			// 	.typeError('To musi być numer'),

			// tel_num: Yup.string()
			// 	.max(20)
			// 	.required('To pole jest wymagane')
			// 	.matches(/^\d{3}-\d{3}-\d{3}$/, 'Format "111-222-333"'),

			tel_num: Yup.string()
				.max(20)
				.required('To pole jest wymagane')
				.matches(/^[0-9-]+$/, 'Można wprowadzać tylko cyfry i znak "-"'),

			id_role: Yup.string().required('Nie może być pusty'),
		})

		const onSubmit = data => {
			axios.post('http://localhost:3001/insert/employee', data).then(response => {
				console.log(response.data)
				if(response.data == 'Addedd'){
				this.setState({ content: response.data })
				this.setState({responseSer: true })
				}else {
					this.setState({ content: response.data })
					this.setState({error: true })
				}


			})
		}
		const switchSection = () => {
			this.props.switchSectionUsers()
		}
		return (
			<section className="sectionUserAddUsers">
				<div className="headerSectionAddUsers">
					<p onClick={switchSection}>Edycja:</p>
				</div>
				<section className="formChangeDataAddUsers">
					<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
						<Form>
							<div className="headerAddUsers">
								<span>Dodaj Usera:</span>
							</div>

							<section className="formContentAddUsers">
								<label htmlFor="imie">
									Imię: <ErrorMessage className="errorMessage" component="span" name="first_name" />
								</label>
								<Field className="inputFormAddUsers" type="text" id="imie" name="first_name" />

								<br />
								<label htmlFor="nazwisko">
									Nazwisko: <ErrorMessage className="errorMessage" component="span" name="second_name" />
								</label>
								<Field className="inputFormAddUsers" type="text" id="nazwisko" name="second_name" />

								<br />
								<label htmlFor="adres">
									Adres: <ErrorMessage className="errorMessage" component="span" name="addres" />
								</label>
								<Field className="inputFormAddUsers" type="text" id="adres" name="addres" />

								<br />
								<label htmlFor="pesel">
									Pesel: <ErrorMessage className="errorMessage" component="span" name="pesel" />
								</label>
								<Field className="inputFormAddUsers" type="text" id="pesel" name="pesel" />

								<br />
								<label htmlFor="tel">
									Telefon: <ErrorMessage className="errorMessage" component="span" name="tel_num" />
								</label>
								<Field className="inputFormAddUsers" type="phone" id="tel" name="tel_num" />

								<label htmlFor="role">
									Rola: <ErrorMessage className="errorMessage" component="span" name="id_role" />
								</label>

								<Field className="inputFormAddUsers" as="select" name="id_role" id="role">
									<option value="1">Admin</option>
									<option value="2">Worker</option>
									<option value="3">Manager</option>
								</Field>

								<br />
								<button className="buttonFormSubmitChangeAddUsers">Zatwierdż</button>
							</section>
						</Form>
					</Formik>
					{error && <span style={{ color: 'red' }}>{content}</span>}
								{responseSer && <span style={{ color: 'green' }}>{content}</span>}
				</section>
			</section>
		)
	}
}

export default SectionUsersAddUsers
