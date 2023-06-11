import { Navbar } from './Navbar'
import React, { useState } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
export const SearchStops = ({ onChange }) => {
	const [selectedLine, setSelectedLine] = useState(null)
	const initialValues = {
		name_stop: '',
	}
	const validationSchema = Yup.object().shape({
		name_stop: Yup.string()
	
		.matches(/^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż.\s]+$/, 'Tylko litery i spacje są dozwolone')
		.trim()
		.required('Nie może być pusty')
		.max(30, 'Za długi ciąg')
		.min(3, 'Podaj pełną nazwę'),
	})

	const onSubmit = data => {
		// axios.post('http://localhost:3001/insert/stop', data).then(response => {
		// 	console.log(response.data)
		// 	selectLines(response.data)
		// })
		onChange(data)
	}

	return (
		<div>
			<Navbar />
			<p>Wpisz nazwę przystanku, aby pojawiła się tablica z godzinami odjazdów autobusów.</p>
			<section className="search-table-bus">
				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					<Form>
						<ErrorMessage className="errorMessage" component="span" name="name_stop" />
						<br />

						<label htmlFor="imie"></label>
						<Field className="bus-stop-input" id="imie" name="name_stop" placeholder="Podaj nazwe przystanku" />

						<button type="submit" className="btn-arrow stop-bus">
							<i className="fa-solid fa-arrow-right arrow"></i>
						</button>
					</Form>
				</Formik>
			</section>
		</div>
	)
}
