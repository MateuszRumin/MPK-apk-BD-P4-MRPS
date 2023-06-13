import React, { useState } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Modal from 'react-modal'
import './css/SectionMainLinesAddAlias.css'
let objStops = 0
const SectionMainLinesAddAlias = ({ selectLine }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [isOpen2, setIsOpen2] = useState(false)
	const [isOpen3, setIsOpen3] = useState(false)
	const [usersData, setUsersData] = useState([])
	const [serverResponse, setServerResponse] = useState('')
	const [validationErr, setValidationErr] = useState('')

	const getStopsFreeForLine = () => {
		axios
			.post('http://localhost:3001/select/aliases/toadd')
			.then(response => {
				const useData = response.data
				setUsersData(useData)
				console.log('Pobranie ulic z bazy')
				console.log(useData)
			})
			.catch(error => {
				console.log(error)
			})
	}


	const getStopsFreeForLine2 = () => {
		axios
			.post('http://localhost:3001/select/aliases/added')
			.then(response => {
				const useData = response.data
				setUsersData(useData)
				console.log('Pobranie ulic z bazy')
				console.log(useData)
			})
			.catch(error => {
				console.log(error)
			})
	}

	const getStopsFreeForLine3 = () => {
		axios
			.post('http://localhost:3001/select/aliases/all')
			.then(response => {
				const useData = response.data
				setUsersData(useData)
				console.log('Pobranie ulic z bazy')
				console.log(useData)
			})
			.catch(error => {
				console.log(error)
			})
	}

	const initialValues = {
		num_line: '',
		description: '',
	}

	const validationSchema = Yup.object().shape({
		num_line: Yup.string().required('Pole wymagane'),
		description: Yup.string().required('Pole wymagane'),
	})

	const onSubmit = data => {
		data.id_line = selectLine.id_line
		axios.post('http://localhost:3001/test', data).then(response => {
			console.log(response.data)
		})
	}

	const closeModal = () => {
		setIsOpen(false)
	}
	const closeModal2 = () => {
		setIsOpen2(false)
	}
	const closeModal3 = () => {
		setIsOpen3(false)
	}


	const openModal = () => {
		setIsOpen(true)
		getStopsFreeForLine()
	}
	const openModal2 = () => {
		setIsOpen2(true)
		getStopsFreeForLine2()
	}
	const openModal3 = () => {
		setIsOpen3(true)
		getStopsFreeForLine3()
	}


	const handleConfirm = selectStop => {
		console.log(objStops)

		console.log(selectStop)

		axios.post('http://localhost:3001/test').then(response => {
			console.log(response.data)

			setServerResponse(response.data) // Zapisz odpowiedź serwera w stanie
		})
	}

	const handleConfirm2 = selectStop => {
		console.log(objStops)

		console.log(selectStop)

		axios.post('http://localhost:3001/test').then(response => {
			console.log(response.data)
			console.log(selectStop);
			console.log(objStops);

			setServerResponse(response.data) // Zapisz odpowiedź serwera w stanie
		})
	}

	const handleConfirm3 = selectStop => {
		console.log(objStops)

		console.log(selectStop)

		axios.post('http://localhost:3001/test').then(response => {
			console.log(response.data)
			console.log(selectStop);
			console.log(objStops);

			setServerResponse(response.data) // Zapisz odpowiedź serwera w stanie
		})
	}

	Modal.setAppElement('#root')
	return (
		<section className="addlineNew">
			<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
				<Form>
					<section className="">
						<p>
							<b>Dodaj alias dla lini:</b>
						</p>

						<p>
							Linia: {selectLine.id_line}
							<ErrorMessage className="errorMessage" component="span" name="num_line" />
						</p>
						<div className="buttonTypeSubmitAddAlias" onClick={() => openModal()}>
							Dodaj alias
						</div>
						<div className="buttonTypeSubmitAddAlias" onClick={() => openModal2()}>
							Aktualne aliasy
						</div>
						<div className="buttonTypeSubmitAddAlias" onClick={() => openModal3()}>
							Wszystkie aliasy
						</div>
						<Field type="text" name="num_line" placeholder="Alias lini" />
						<Field type="text" name="description" placeholder="Opis" />
						<ErrorMessage className="errorMessage" component="span" name="description" />

						<br />
						<br />

						<button type="submit" className="buttonTypeSubmitAddAlias">
							Zatwierdź
						</button>
					</section>
				</Form>
			</Formik>

			{validationErr && (
				<div className="errorMessage">
					<p>{validationErr}</p>
				</div>
			)}
			<div>
				<Modal isOpen={isOpen} className="custom-modal modalWindow" overlayClassName="custom-overlay">
					<h3>Dostępne aliasy</h3>

					<span className="closeMod " onClick={closeModal}>
						X
					</span>

					<section className="sectionLinesDisplayStreets section-line urban modalWindow2">
						<div className="tbl-content">
							<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
								<tbody className="DispStreets ">
								{usersData.map(user => (
										<tr key={user.id_alias}>
											<td>
												{user.short}
											
											
												{user.name}
												<span className="spanKlikLine" onClick={() => handleConfirm(user)}>
													Dodaj
												</span>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</section>

					{serverResponse && (
						<div className="errorMessage">
							<p>{serverResponse}</p>
						</div>
					)}
				</Modal>
			</div>


			<div>
				<Modal isOpen={isOpen2} className="custom-modal modalWindow" overlayClassName="custom-overlay">
					<h3>Aktualne aliasy</h3>

					<span className="closeMod " onClick={closeModal2}>
						X
					</span>

					<section className="sectionLinesDisplayStreets section-line urban modalWindow2">
						<div className="tbl-content">
							<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
								<tbody className="DispStreets ">
								{usersData.map(user => (
										<tr key={user.id_alias}>
											<td>
												{user.short}											
												{user.name}
												<span className="spanKlikLine" onClick={() => handleConfirm2(user)}>
													Usuń
												</span>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</section>

					{serverResponse && (
						<div className="errorMessage">
							<p>{serverResponse}</p>
						</div>
					)}
				</Modal>
			</div>


			<div>
				<Modal isOpen={isOpen3} className="custom-modal modalWindow" overlayClassName="custom-overlay">
					<h3>Wszystkie aliasy</h3>

					<span className="closeMod " onClick={closeModal3}>
						X
					</span>

					<section className="sectionLinesDisplayStreets section-line urban modalWindow2">
						<div className="tbl-content">
							<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
								<tbody className="DispStreets ">
									{usersData.map(user => (
										<tr key={user.id_alias}>
											<td>
												{user.short}
											
											
												{user.name}
												
												
												<span className="spanKlikLine" onClick={() => handleConfirm3(user)}>
													Usuń
												</span>
											</td>
											
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</section>

					{serverResponse && (
						<div className="errorMessage">
							<p>{serverResponse}</p>
						</div>
					)}
				</Modal>
			</div>
		</section>
	)
}

export default SectionMainLinesAddAlias
