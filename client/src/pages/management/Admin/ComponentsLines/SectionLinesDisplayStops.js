import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import './css/SectionLinesDisplayStops.css'

let zmienna = ''
let iloscwierszy

const SectionLinesDisplayStops = props => {
	const [usersData, setUsersData] = useState([])
	const [update, setUpdate] = useState(false)
	const [serviceErr, setServiceEerr] = useState(false)


	const getStreetsData = idstret => {
		const id_street = {
			id_street: idstret,
		}

		axios
			.post('http://localhost:3001/select/stops/onStreet', id_street)
			.then(response => {
				const usersData = response.data
				setUsersData(usersData)
				console.log('Pobranie ulic z bazy')
				console.log(usersData)
			})
			.catch(error => {
				console.log(error)
			})
	}

	useEffect(() => {
		if (props) {
			// zmienna = props.selectLine.id_street

			console.log(zmienna)
			getStreetsData(zmienna)
		}
	}, [props])

	const handleRowClick = user => {
		onSubmit(user)
	}

	const onSubmit = data => {
		axios.post('http://localhost:3001/auth/login/', data).then(response => {
			console.log(response.data)
		})
	}

	const deleteLine = (data, event) => {
		event.preventDefault() // Zapobiegamy domyślnej akcji (wyświetlanie kontekstowego menu przeglądarki)
		const answer = window.confirm('Na pewno chcesz usunąć przystanek ?')
		if (answer) {
			console.log(`Usuwam przystanek o id tutaj konkrtetna`)
			axios.post('http://localhost:3001/delete/stop', data).then(response => {
				console.log(response.data)
			})
		} else {
			console.log('Anulowano usuwanie linii.')
		}

		console.log(data.id_street)
	}

	const changeRename = data => {
		const confirmDelete = window.prompt(`Podaj nową nazwę przystanku? `)

		if (confirmDelete && !/\d/.test(confirmDelete)) {
			console.log(`Zmieniono nazwę`)
			data.rename = confirmDelete
			axios.post('http://localhost:3001/update/stop', data).then(response => {
				console.log(response.data)
			})
		} else {
			console.log('nie zmieniono.')
		}
	}

	const initialValues = {
		name: '',
	}

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Nie może być pusty'),
	})

	const onSubmitForm = data => {
		if (zmienna == '') {
			console.log('pustka')
			setServiceEerr(true)
		} else {
			data.id_street = zmienna
			data.id_usr_emp = props.idAccountRole
			axios.post('http://localhost:3001/insert/stop', data).then(response => {
				console.log(response.data)
				if (response.data == 'Added') {
					setUpdate(true)
				}
			})
		}
	}

	return (
		<section className="sectionLinesDisplayStops">
			<div className="headerSectionDisplayStops">
				<p>Lista Przystanków </p>
				<div className="noDisplay">
					{props.selectLine.id_street ? (zmienna = props.selectLine.id_street) : console.log('nie ma')}
				</div>
			</div>
			<section className="contentDisplayStops">
				<div className="tbl-header">
					<table className="tableDisplayStops" cellPadding="0" cellSpacing="0" border="0">
						<thead>
							<tr>
								{/* <th>Id</th> */}
								<th>Nazwa</th>
								{update}
								<th className="thirdTd"></th>
							</tr>
						</thead>
					</table>
				</div>
				<div className="tbl-content">
					<table className="tableDisplayStops" cellPadding="0" cellSpacing="0" border="0">
						<tbody className="DisplayStops">
							{usersData.map((user, index) => (
								<tr key={user.id_stop}>
									{/* <td>
                    {user.id_stop}
                   
                  
                  </td> */}
									<td className="spanKlikLine" onClick={() => changeRename(user)}>
										{user.name}
									</td>

									<td className="thirdTd">
										<button className="buttonlistDisplayStops" onClick={event => deleteLine(user, event)}>
											X
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<Formik initialValues={initialValues} onSubmit={onSubmitForm} validationSchema={validationSchema}>
					<Form>
						<div className="headerAddStopss">
							<span>Dodaj przystanek:</span>
							<br />
							{serviceErr && <span style={{ color: 'red' }}>Nie wybrano lini</span>}
							{update && <span style={{ color: 'green' }}>Dodano przystanek</span>}
							<span></span>
						</div>

						<section className="formContentDataAddStopss">
							<label htmlFor="imie">Nazwa:</label>
							<Field className="inputFormDataAddStopss" type="text" id="imie" name="name" />

							<br />

							<button className="buttonFormSubmitChangeAddStopss">Dodaj</button>
						</section>
					</Form>
				</Formik>
			</section>
		</section>
	)
}

export default SectionLinesDisplayStops
