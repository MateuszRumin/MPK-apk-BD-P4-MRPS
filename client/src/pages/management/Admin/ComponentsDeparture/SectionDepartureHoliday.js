import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-modal'

import './css/SectionDepartureWeekDays.css'
let index = 0
let objStops = 0
let dpdd = []
let selectTimeData
let weekDayss = []
const SectionDepartureHoliday = ({ selectLine2, onChange }) => {
	const [usersData, setUsersData] = useState([])
	const [isOpen, setIsOpen] = useState(false)
	const [isOpen2, setIsOpen2] = useState(false)
	const [confirmDelete, setConfirmDelete] = useState('')
	const [confirmDelete2, setConfirmDelete2] = useState('')
	const [setData, setSetData] = useState([])
	const [serverResponse, setServerResponse] = useState('')

	const [refresh, setrefresh] = useState(true)

	let direction = true
	useEffect(() => {
		function onObjectChange(props) {
			console.log(props)
		
			objStops = props
			getStopsFreeForLine()
			
			// selectTimeData = ''
			// weekDayss = []
		}
		if (selectLine2.id_line) {
			onObjectChange(selectLine2)
		}
	}, [selectLine2])

	const delayInSeconds = 1 // Opóźnienie w sekundach

	function delayedMethod() {
		setTimeout(() => {
			setrefresh(!refresh)
		}, 200)
	}

	const DispDept = object => {
		let sendObj = {
			day: 'week',
			id_line: object.id_line,
			id_stop: object.id_stop,
			id_route: object.id_route,
			direction: direction,
		}

		axios
			// .post('http://localhost:3001/select/departure/onstop', objStops)
			.post('http://localhost:3001/select/departure/onstop', sendObj)
			.then(response => {
				//  setDest[0](response.data)
				dpdd[index] = response.data
				console.log(response.data)
				console.log(index)
				index++
			})
			.catch(error => {
				console.log(error)
			})
	}

	const getStopsFreeForLine = () => {
		if (objStops === 0) {
			console.log('brak danych')
		} else {
			let objStopss = {
				id_line: objStops.id_line,
			}

			console.log(objStopss)

			axios
				.post('http://localhost:3001/select/routes/', objStopss)
				.then(response => {
					weekDayss = response.data

					console.log('Pobranie ulic z bazy')
					dpdd = []
					
					weekDayss.forEach(object => {
						console.log('jestem')
						DispDept(object)
					})
					index = 0
					delayedMethod()
					
				})
				.catch(error => {
					console.log(error)
				})

			// setrefresh('c')
		}
	}

	const openModal = data => {
		setIsOpen(true)
		// setConfirmDelete(data.stop.name)
		// setSetData(data)
		selectTimeData = data
		console.log(data)
	}
	const openModal2 = () => {
		setIsOpen2(true)
		// setConfirmDelete(data.stop.name)
		// setSetData(data)
	}
	const closeModal2 = () => {
		setIsOpen2(false)
	}
	const closeModal = () => {
		setIsOpen(false)
	}
	const handleInputChange = event => {
		setConfirmDelete(event.target.value)
	}

	const handleInputChange2 = event => {
		setConfirmDelete2(event.target.value)
	}

	const handleConfirm = () => {
		const validFormat = /^\d{2}:\d{2}:\d{2}$/.test(confirmDelete)
		if (confirmDelete && validFormat) {
			let objdata = {
				new_tile: confirmDelete,
				num_passage: selectTimeData.num_passage,
				id_line: objStops.id_line,
			}

			console.log(objdata)

			axios.post('http://localhost:3001/test', objdata).then(response => {
				console.log(response.data)
				setServerResponse(response.data) // Zapisz odpowiedź serwera w stanie
			})
		} else {
			console.log('nie zmieniono.')
			const res = 'Nie przesłano złe dane faza testów napisz np: 18:36:00'
			setServerResponse(res) // Zapisz odpowiedź serwera w stanie
			// closeModal();
		}
	}

	const handleConfirm2 = () => {
		const validFormat = /^\d{2}:\d{2}:\d{2}$/.test(confirmDelete2)
		if (confirmDelete2 && validFormat) {
			let objdata = {
				time: confirmDelete2,
				id_line: objStops.id_line,
			}

			console.log(objdata)

			axios.post('http://localhost:3001/insert/departure/week', objdata).then(response => {
				console.log(response.data)
				setServerResponse(response.data) // Zapisz odpowiedź serwera w stanie
			})
		} else {
			console.log('nie zmieniono.')
			const res = 'Nie przesłano złe dane faza testów napisz np: 18:36:00'
			setServerResponse(res) // Zapisz odpowiedź serwera w stanie
			// closeModal();
		}
	}

	const deleteLine = (user, event) => {
		event.preventDefault() // Zapobiegamy domyślnej akcji (wyświetlanie kontekstowego menu przeglądarki)

		const answer = window.confirm('Na pewno chcesz usunąć ?')
		if (answer) {
			console.log(user)
			let objdata = {
				num_passage: user.num_passage,
				id_line: objStops.id_line,
			}
			console.log(objdata)

			axios.post('http://localhost:3001/delete/test', objdata).then(response => {
				console.log(response.data)
			})
		} else {
			console.log('Anulowano usuwanie.')
		}
	}

	const switchSection = day => {
		onChange(day)
		// console.log(day)
	}

	Modal.setAppElement('#root')

	return (
		<section className="sectionLinesDisplayStreetsT">
			<div className="headerSectionDisplayStreets">
				<span className="switchClass" onClick={() => switchSection('Rob')}>
					Robocze
				</span>
				<span className="switchClass" onClick={() => switchSection('So')}>
					Soboty
				</span>
				<span className="switchClass selectSwitch">Niedziela i święta</span>
			</div>
			<section className="contentDisplayStreets ">
				<div className="table-container">
					<table className="table widthh" cellPadding="0" cellSpacing="0" border="0">
						<thead className="theadweekdays">
							<tr>
								{weekDayss.map(order => (
									<th className="etsttttt" key={order.order}>
										{order.stop.name}
									</th>
								))}
							</tr>
						</thead>
						<tbody className="thtdtable">
							{dpdd.map((test, index) => (
								<th className="thtdtable" key={index}>
									{test.map((dest, destIndex) => {
										if (index === 0 && destIndex < dpdd[0].length) {
											return (
												<span className="thtdtable3 selectToOpen" onClick={() => openModal(dest)} key={destIndex}>
													<i
														class="ti ti-square-rounded-minus usuntime"
														onContextMenu={event => deleteLine(dest, event)}></i>
													{dest.time}
												</span>
											)
										} else {
											return (
												<span className="thtdtable3" key={destIndex}>
													{dest.time}
													<br />
												</span>
											)
										}
									})}
								</th>
							))}
						</tbody>
					</table>
					<i className="ti ti-home-plus addStopIcon positionincon" onClick={() => openModal2()}></i>
				</div>
				<div>
					<Modal isOpen={isOpen} className="custom-modal" overlayClassName="custom-overlay" onRequestClose={closeModal}>
						<h2>Zmień czas:</h2>
						<input type="text" placeholder="hh:mm" value={confirmDelete} onChange={handleInputChange} />
						<span className="closeMod" onClick={closeModal}>
							X
						</span>
						<button onClick={handleConfirm}>Potwierdź</button>
						{serverResponse && (
							<div>
								<p>{serverResponse}</p>
							</div>
						)}
					</Modal>
				</div>

				<div>
					<Modal
						isOpen={isOpen2}
						className="custom-modal"
						overlayClassName="custom-overlay"
						onRequestClose={closeModal2}>
						<h2>Dodaj nowy czas:</h2>
						<input type="text" placeholder="hh:mm" value={confirmDelete2} onChange={handleInputChange2} />
						<span className="closeMod" onClick={closeModal2}>
							X
						</span>
						<button onClick={handleConfirm2}>Potwierdź</button>
						{serverResponse && (
							<div>
								<p>{serverResponse}</p>
							</div>
						)}
					</Modal>
				</div>
			</section>
		</section>
	)
}

export default SectionDepartureHoliday
