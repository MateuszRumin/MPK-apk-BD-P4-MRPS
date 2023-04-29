import React from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import pl from 'yup-locale-pl'
import { redirect } from 'react-router-dom'
import './AddWorker.css'
export class AddWorker extends React.Component {
	render() {
		const initialValues = {
			first_name: '',
			second_name: '',
			addres: '',
			pesel: '',
			tel_num: '',
			role: '',
		}
		const validationSchema = Yup.object().shape({
			first_name: Yup.string().min(3).max(20).required('test'),
			second_name: Yup.string().min(3).max(20),
			addres: Yup.string().min(3).max(20),
			pesel: Yup.string().min(3).max(20),
			tel_num: Yup.string().min(3).max(20),
			role: Yup.string().max(20),
		})

		const onSubmit = data => {
			axios.post('http://localhost:3001/auth/login/', data).then(response => {
				console.log(response.data)
			})
		}

		return (
			<div>
				<div></div>

				<div className="addWorker">
					{/* To jest nawigacja */}
					<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
						<Form>
							<h1>Dodawanie pracownika:</h1>
							<label htmlFor="imie">Imię:</label>
							<Field type="text" id="imie" name="first_name" />
							<ErrorMessage component="span" name="first_name" />
							<br />
							<label htmlFor="nazwisko">Nazwisko:</label>
							<Field type="text" id="nazwisko" name="second_name" />
							<br />
							<label htmlFor="adres">Adres:</label>
							<Field type="text" id="adres" name="addres" />
							<br />
							<label htmlFor="pesel">PESEL:</label>
							<Field type="text" id="pesel" name="pesel" />
							<br />
							<label htmlFor="tel">Telefon:</label>
							<Field type="tel" id="tel" name="tel_num" />
							<br />
							<Field as="select" name="role">
								<option value="">----</option>
								<option value="Driver">Worker</option>
								<option value="Manager">Manager</option>
							</Field>

							<button>Wyslij</button>
						</Form>
					</Formik>
				</div>
			</div>
		)
	}
}
