import { Navbar } from './Navbar'
import React from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
export const WhenToArrive = () => {
	const initialValues = {
		fromStop: '',
		ToStop: '',
		dateTime: '',
		WhenDate: '',
	}
	const validationSchema = Yup.object().shape({
		fromStop: Yup.string().required('Nie może być pusty'),
		ToStop: Yup.string().required('Nie może być pusty'),
		dateTime: Yup.string().required('Nie może być pusty'),
		WhenDate: Yup.string().required('Nie może być pusty'),
	})

	const onSubmit = data => {
		axios.post('http://localhost:3001/test', data).then(response => {
			console.log(response.data)
		})
	}

	return (
		<div>
			<Navbar />
			<p>JAK DOJADĘ ?</p>
			<p>Wpisz przystanek początkowy i końcowy, aby wyszukać odpowiednie linie zawierające podane przystanki.</p>
			<section className="section-how-road">
				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					<Form>
						
						
						

						<label htmlFor="imie"></label>
						<ErrorMessage className="errorMessage" component="span" name="fromStop" /><br/>
						<Field className="bus-stop-input" name="fromStop" placeholder="Przystanek początkowy" /><br/>
                        <ErrorMessage className="errorMessage" component="span" name="ToStop" /><br/>
						<Field className="bus-stop-input" name="ToStop" placeholder="Przystanek końcowy" /><br />
                        <ErrorMessage className="errorMessage" component="span" name="dateTime" /><br/>
						<Field className="bus-stop-input" type="time" name="dateTime" placeholder="Podaj nazwe przystanku" /><br/>
						<ErrorMessage className="errorMessage" component="span" name="WhenDate" /><br/>
						<Field className="bus-stop-input" type="date" name="WhenDate" placeholder="Podaj nazwe przystanku" />
						<button type="submit" className="btn-arrow how-road">
							ZATWIERDŹ
						</button>
					</Form>
				</Formik>
			</section>
		</div>
	)
}
