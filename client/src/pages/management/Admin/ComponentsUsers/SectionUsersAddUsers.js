import React, { Component } from 'react'
import './css/SectionUsersAddUsers.css'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import pl from 'yup-locale-pl'
Yup.setLocale(pl)
class SectionUsersAddUsers extends Component {
	render() {
		const initialValues = {
			first_name: '',
			second_name: '',
			addres: '',
			pesel: '',
			tel_num: '',
			id_role: '',
		}
		const validationSchema = Yup.object().shape({
			first_name: Yup.string().min(5, 'Za krotki').max(20, 'Za dlugi').required('Nie może być pusty'),
			second_name: Yup.string().min(3, 'Za krotki').max(20).required('Nie może być pusty'),
			addres: Yup.string().min(3, 'Za krotki').max(20).required('Nie może być pusty'),
			pesel: Yup.number().typeError('To musi być numer').required('Nie może być pusty'),
			tel_num: Yup.number().typeError('To musi być numer').required('Nie może być pusty'),
			id_role: Yup.string().required('Nie może być pusty'),
		})

		const onSubmit = data => {
			
			axios.post('http://localhost:3001/insert/employee', data).then(response => {
				console.log(response.data)
			})
		}
		const switchSection= () => {
			this.props.switchSectionUsers();
		  };
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
				</section>
			</section>
		)
	}
}

export default SectionUsersAddUsers
