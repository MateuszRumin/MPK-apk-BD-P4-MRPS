import React, { Component } from 'react'
import './css/SectionUsersAccountRole.css'
import SectionUsersRoleInAccount from './SectionUsersRoleInAccount'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import pl from 'yup-locale-pl'

Yup.setLocale(pl)
class SectionUsersAccountRole extends Component {
	render() {
		const initialValues = {
			username: '',
			email: '',
		}
		const validationSchema = Yup.object().shape({
			username: Yup.string().min(5, 'Za krotki').max(20, 'Za dlugi').required('Nie może być pusty'),
			email: Yup.string().min(3, 'Za krotki').max(20).required('Nie może być pusty'),
		})

		const onSubmit = data => {
			axios.post('http://localhost:3001/auth/login/', data).then(response => {
				console.log(response.data)
			})
		}

		const switchSection= () => {
			this.props.switchSectionUsers();
		  };
		return (
			<section className="sectionUsersAccountRole">
				<div className="headerSectionAccountRole">
					<p onClick={switchSection}>Dodaj nowe:</p>
				</div>
				<section className="formChangeDataAccount">
					<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
						<Form>
							<div className="headerAccount">
								<span>Konto: </span>
								<span>id: 1</span>
							</div>

							<section className="formContentDataAccount">
								<label htmlFor="imie">
									Nazwa użytkownika: <ErrorMessage className="errorMessage" component="span" name="username" />
								</label>
								<Field className="inputFormDataAccount" type="text" id="imie" name="username" />

								<br />
								<label htmlFor="nazwisko">
									Email: <ErrorMessage className="errorMessage" component="span" name="email" />
								</label>
								<Field className="inputFormDataAccount" type="text" id="nazwisko" name="email" />

								<br />
								<button className="buttonFormSubmitChangeAccount">Zmień</button>
								<span className="spanDeleteAccount">Usuń</span>
							</section>
						</Form>
					</Formik>
				</section>

				<SectionUsersRoleInAccount />
			</section>
		)
	}
}

export default SectionUsersAccountRole
