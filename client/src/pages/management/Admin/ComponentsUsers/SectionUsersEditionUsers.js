import React from 'react'
// import React, { Children } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import pl from 'yup-locale-pl'
// import { redirect } from 'react-router-dom'
import './css/SectionUsersEditionUsers.css'
Yup.setLocale(pl)
let selectUser

export class SectionUsersEditionUsers extends React.Component {
	state = {
		first_name: '',
	}
	constructor(props) {
		super(props)

		this.state = {
			initialValues: {
				first_name: '',
				second_name: '',
				addres: '',
				pesel: '',
				tel_num: '',
			},
			serviceErr: {
				error: false,
				responseSer: false,
			},
		}
	}
	handleChange = event => {
		const { value } = event.target
		this.setState({ phoneNumber: value })
	}

	handleKeyUp = event => {
		const { value } = event.target

		if (value.length === 3 || value.length === 7) {
			// Dodajmy myślnik po wpisaniu trzeciej i siódmej cyfry
			this.setState({ phoneNumber: value + '-' })
		}
	}
	render() {
		const { initialValues, error, responseSer } = this.state

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

			pesel: Yup.string()
				.length(11, 'PESEL musi składać się z 11 cyfr')
				.matches(/^\d+$/, 'PESEL może zawierać tylko cyfry')
				.typeError('To musi być numer')
				.required('Nie może być pusty'),

			

			tel_num: Yup.string()
				.max(20)
				.required('To pole jest wymagane')
				.matches(/^[0-9-]+$/, 'Można wprowadzać tylko cyfry i znak "-"'),
		})

		const onSubmit = data => {
			if (
				selectUser.first_name === data.first_name &&
				selectUser.second_name === data.second_name &&
				selectUser.addres === data.addres &&
				selectUser.pesel === data.pesel &&
				selectUser.tel_num === data.tel_num
			) {
				this.setState({ error: true })
			} else {
				this.setState({ error: false })

				console.log(data)

				let emp_no = document.getElementById('userid').innerText
				data.emp_no = emp_no
				axios.post('http://localhost:3001/update/employee', data).then(response => {
					console.log(response.data)
					if (response.data === 'employees') {
						this.setState({ responseSer: true })
					}
				})
			}
		}
		function onObjectChange(props) {
			initialValues.first_name = props.first_name
			initialValues.second_name = props.second_name
			initialValues.addres = props.addres
			initialValues.pesel = props.pesel
			initialValues.tel_num = props.tel_num

			selectUser = props
		}

		return (
			<section className="sectionUsersEditionUsers">
				{/* Przekazywanie z danych o pracowniakch z komponentu SectionUsersDisplayUsers i wrzuca to do funkcji która odświeża komponent i staty  onObjectChange */}
				{this.props.headerTitle.first_name && onObjectChange(this.props.headerTitle)}
				{this.props.headerTitle.second_name && onObjectChange(this.props.headerTitle)}
				{this.props.headerTitle.addres && onObjectChange(this.props.headerTitle)}
				{this.props.headerTitle.first_name && onObjectChange(this.props.headerTitle)}
				{this.props.headerTitle.pesel && onObjectChange(this.props.headerTitle)}
				{this.props.headerTitle.tel_num && onObjectChange(this.props.headerTitle)}

				<div className="headerSectionEditionUsers">
					<p>Edycja:</p>
				</div>
				{/* To jest nawigacja */}
				<section className="formChangeDataUsers">
					<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
						<Form>
							<div className="headerEditionUsers">
								<span>Rola: {this.props.rolesUsers.name}</span>

								<span id="userid">{this.props.headerTitle.emp_no}</span>
							</div>

							<section className="formContentDataUsers">
								<label htmlFor="imie">
									Imię: <span className="userdisplaydata"></span>
									<ErrorMessage className="errorMessage" component="span" name="first_name" />
								</label>
								<Field
									className="inputFormDataUsers"
									type="text"
									id="imie"
									name="first_name"
									placeholder="Zmień dane"
								/>
								<br />
								<label htmlFor="nazwisko">
									Nazwisko: <span className="userdisplaydata"></span>
									<ErrorMessage className="errorMessage" component="span" name="second_name" />
								</label>
								<Field
									className="inputFormDataUsers"
									type="text"
									id="nazwisko"
									name="second_name"
									placeholder="Zmień dane"
								/>
								<br />
								<label htmlFor="adres">
									Adres: <span className="userdisplaydata"></span>
									<ErrorMessage className="errorMessage" component="span" name="addres" />
								</label>
								<Field className="inputFormDataUsers" type="text" id="adres" name="addres" placeholder="Zmień dane" />
								<br />
								<label htmlFor="pesel">
									Pesel: <span className="userdisplaydata"></span>
									<ErrorMessage className="errorMessage" component="span" name="pesel" />
								</label>
								<Field className="inputFormDataUsers" type="text" id="pesel" name="pesel" placeholder="Zmień dane" />
								<br />
								<label htmlFor="tel">
									Telefon: <span className="userdisplaydata"></span>
									<ErrorMessage className="errorMessage" component="span" name="tel_num" />
								</label>
								<Field className="inputFormDataUsers" type="phone" id="tel" name="tel_num" placeholder="Zmień dane" />
								{/* <div onClick={this.handleChangeValues}>dd</div> */}
								<br />
								{error && <span style={{ color: 'red' }}>Te same dane</span>}
								{responseSer && <span style={{ color: 'green' }}>Zmieniono dane</span>}
								<br />

								<button className="buttonFormSubmitChangeUsers">Zatwierdż</button>
							</section>
						</Form>
					</Formik>
					{/* <div onInput={this.valueUsers}>{this.props.headerTitle.first_name}</div> */}
				</section>
			</section>
		)
	}
}
