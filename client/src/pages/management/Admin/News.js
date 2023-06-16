import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-modal'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../../Home/css/News.css'
let objStops = 0

const News = () => {
	const [newsData, setNewsData] = useState([])
	const [isOpen, setIsOpen] = useState(false)
	const [isOpen2, setIsOpen2] = useState(false)
	const [serverResponse, setServerResponse] = useState('')
	const [usersData, setUsersData] = useState([])

	// Pobieranie ogłoszeń aktualnych
	const getStopsFreeForLine2 = () => {
		axios
			.post('http://localhost:3001/select/streets/all')
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

	// Usuwanie ogłoszenia
	const handleConfirm2 = selectStop => {
		console.log(objStops)
console.log('test');
		console.log(selectStop)
		console.log('koniec testu');

		axios.post('http://localhost:3001/test' ).then(response => {
			console.log(response.data)

			setServerResponse(response.data) // Zapisz odpowiedź serwera w stanie
		})
	}

	const openModal = () => {
		setIsOpen(true)
	}
	const openModal2 = () => {
		setIsOpen2(true)
		getStopsFreeForLine2()
	}

	const closeModal = () => {
		setIsOpen(false)
	}
	const closeModal2 = () => {
		setIsOpen2(false)
	}

	const initialValues = {
		title: '',
		text: '',
	}

	const validationSchema = Yup.object().shape({
		title: Yup.string().required('Pole wymagane'),
		text: Yup.string().required('Pole wymagane'),
	})

	// Dodawanie nowego ogłoszenia
	const onSubmit = data => {
		console.log(data)
		axios.post('http://localhost:3001/test', data).then(response => {
			console.log(response.data)
		})
	}

	Modal.setAppElement('#root')

	return (
		<section className="sectionLinesDisplayStreetsT">
			<i class="ti ti-info-square addStopIcon newsicon" onClick={() => openModal()}></i>
			<i class="ti ti-info-square-filled addStopIcon newsicon2" onClick={() => openModal2()}></i>

			<div>
				<Modal
					isOpen={isOpen}
					className="custom-modal modalnews"
					overlayClassName="custom-overlay"
					onRequestClose={closeModal}>
					<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
						<Form>
							<section className="">
								<p>
									<b>Podaj nazwe i treść ogłoszenia:</b>
								</p>
								<span className="closeMod " onClick={closeModal}>
									X
								</span>

								<ErrorMessage className="errorMessage" component="span" name="title" />

								<br />
								<Field type="text" name="title" placeholder="title" />
								<br />
								<ErrorMessage className="errorMessage" component="span" name="text" />
								<br />
								<Field type="text" name="text" placeholder="Opis" />

								<br />
								<br />

								<button type="submit" className="buttonTypeSubmitAddAlias">
									Zatwierdź
								</button>
							</section>
						</Form>
					</Formik>
				</Modal>
			</div>
			<div>
				<Modal isOpen={isOpen2} className="custom-modal modalWindow" overlayClassName="custom-overlay">
					<h3>Ogłoszenia</h3>

					<span className="closeMod " onClick={closeModal2}>
						X
					</span>

					<section className="sectionLinesDisplayStreets section-line urban modalWindow2">
						<div className="tbl-content">
							<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
								<tbody className="DispStreets ">
									{usersData.map(user => (
										<tr key={user.id_info}>
											<td>
												{user.title}
												{user.text}

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
		</section>
	)
}

export default News
