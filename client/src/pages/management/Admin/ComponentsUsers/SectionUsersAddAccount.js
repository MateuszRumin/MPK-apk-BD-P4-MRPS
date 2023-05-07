import React, { Component } from 'react'
import './css/SectionUsersAddAccount.css'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import pl from 'yup-locale-pl'
Yup.setLocale(pl)
class SectionUsersAddAccount extends Component {
	render() {
		const initialValues = {
			name_account: '',
			email: '',
			password: '',
			rePassword: '',
		}
		const validationSchema = Yup.object().shape({
			name_account: Yup.string().min(5, 'Za krotki').max(20, 'Za dlugi').required('Nie może być pusty'),
			email: Yup.string().min(3, 'Za krotki').max(20).email('zły adres email').required('Nie może być pusty'),
			password: Yup.string()
				.max(20)
				.required('Nie może być pusty')
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
					'Musi zawierać 8 znaków, jeden znak wielki, jeden mały, cyfre i znak specjalny'
				),
			rePassword: Yup.string()
				.min(8, 'Za krotki')
				.max(20)
				.required('Nie może być pusty')
				.oneOf([Yup.ref('password'), null], 'Hało musi być takie same'),
		})

		const onSubmit = data => {
			axios.post('http://localhost:3001/auth/login/', data).then(response => {
				console.log(response.data)
			})
		}

		return (
			<section className="sectionUserAddAccount">
				<div className="headerSectionAddAccount">
					<p>Dodaj nowe:</p>
				</div>
				<section className="formChangeDataAddAccount">
					<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
						<Form>
							<div className="headerAddAccount">
								<span>Dodaj Konto:</span>
							</div>

							<section className="formContentAddAccount">
								<label htmlFor="name_account">
									Nazwa: <ErrorMessage className="errorMessage" component="span" name="name_account" />
								</label>
								<Field className="inputFormAddAccount" type="text" id="name_account" name="name_account" />

								<br />
								<label htmlFor="email">
									Email: <ErrorMessage className="errorMessage" component="span" name="email" />
								</label>
								<Field className="inputFormAddAccount" type="text" id="email" name="email" />

								<br />
								<label htmlFor="password">
									Hasło: <ErrorMessage className="errorMessage" component="span" name="password" />
								</label>
								<Field className="inputFormAddAccount" type="password" id="password" name="password" />

								<br />
								<label htmlFor="rePassword">
									Powtórz hasło: <ErrorMessage className="errorMessage" component="span" name="rePassword" />
								</label>
								<Field className="inputFormAddAccount" type="password" id="rePassword" name="rePassword" />

								<br />
								<button className="buttonFormSubmitChangeAddAccount">Zatwierdż</button>
							</section>
						</Form>
					</Formik>
				</section>
			</section>
		)
	}
}

export default SectionUsersAddAccount
