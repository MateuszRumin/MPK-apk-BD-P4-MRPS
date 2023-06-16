import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-modal'

import './css/SectionDepartureWeekDays.css'
let index = 0
let objStops = 0
let dpd = []
const SectionDepartureWeekDays = ({ selectLine2, onChange }) => {
	const [usersData, setUsersData] = useState([])
	const [isOpen, setIsOpen] = useState(false)
	const [confirmDelete, setConfirmDelete] = useState('')
	const [setData, setSetData] = useState([])
	const [serverResponse, setServerResponse] = useState('')
	const [weekDays, setWeekDays] = useState([])
	const [dest, setDest] = useState([])
	
let direction = true


const DispDept = ( object ) => {

			
			let sendObj = {
				day: 'week',
				id_line: object.id_line,
				id_stop:object.id_stop,
				id_route: object.id_route,
				direction: direction,
			}

			axios
				// .post('http://localhost:3001/select/departure/onstop', objStops)
				.post('http://localhost:3001/select/departure/onstop', sendObj)
				.then(response => {
					//  setDest[0](response.data)

					dpd[index]=response.data
					console.log(response.data);	
					console.log(index);
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
				.post('http://localhost:3001/select/routes/pnpt', objStopss)
				.then(response => {
					const weekDays = response.data
					setWeekDays(weekDays)
					console.log('Pobranie ulic z bazy')
					console.log(weekDays)

					
				
					weekDays.forEach((object) =>{
						console.log("jestem")
						DispDept(object)
						
						


					})





				})
				.catch(error => {
					console.log(error)
				})
		}
	}


	
	useEffect(() => {
		function onObjectChange(props) {
			console.log(props)
			objStops = props
			getStopsFreeForLine()
		}
		if (selectLine2.id_line) {
			onObjectChange(selectLine2)
		}



	}, [selectLine2])

	const openModal = data => {
		setIsOpen(true)
		setConfirmDelete(data.stop.name)
		setSetData(data)
		console.log(setData)
	}

	const closeModal = () => {
		setIsOpen(false)
	}

	const handleInputChange = event => {
		setConfirmDelete(event.target.value)
	}

	const handleConfirm = () => {
		const validFormat = /^\d{2}:\d{2}$/.test(confirmDelete)
		if (confirmDelete && validFormat) {
			console.log(`Zmieniono nazwę`)
			setData.rename = confirmDelete
			axios.post('http://localhost:3001/test', setData).then(response => {
				console.log(response.data)
				setServerResponse(response.data) // Zapisz odpowiedź serwera w stanie
			})
		} else {
			console.log('nie zmieniono.')
			const res = 'Nie przesłano złe dane faza testów napisz np: 18:36'
			setServerResponse(res) // Zapisz odpowiedź serwera w stanie
			// closeModal();
		}
	}

	const deleteLine = data => {
		console.log(data.id_street)
		const confirmDelete = window.prompt(
			`Czy na pewno chcesz usunąć linię ${data.name} ? \nWpisz "TAK", aby potwierdzić.`
		)
		if (confirmDelete === 'TAK') {
			// Wywołanie metody do usunięcia linii
			console.log(`Usuwam linię o id tutaj konkrtetna`)
			axios.post('http://localhost:3001/test', data).then(response => {
				console.log(response.data)
			})
		} else {
			console.log('Anulowano usuwanie linii.')
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
				<span className="switchClass selectSwitch">Robocze</span>
				<span className="switchClass" onClick={() => switchSection('So')}>
					Soboty
				</span>
				<span className="switchClass" onClick={() => switchSection('Nd')}>
					Niedziele i świeta
				</span>
			</div>
			<section className="contentDisplayStreets ">
				<div className="table-container ">
					<table className="table widthh" cellPadding="0" cellSpacing="0" border="0">
						<thead>
							<tr>
								{weekDays.map(order => (
									<th className="etsttttt" key={order.order}>
										{order.stop.name}
									</th>
								))}
							</tr>
						</thead>
						<tbody className="DispStreets tableDisplayStreets widthh">
						{weekDays.map(order => (
								<th className="etsttttt" key={order.order}>
					{dpd.map(test => (	
						<span>
						{test.map(dest => (
								<tr>
								
										{dest.time}
									
								</tr>
							))}
					</span>
							))}
							</th>
						))}
						</tbody>
					</table>
				</div>
				<div>
					<Modal isOpen={isOpen} className="custom-modal" overlayClassName="custom-overlay" onRequestClose={closeModal}>
						<h2>Podaj nowy czas:</h2>
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
			</section>
		</section>
	)
}

export default SectionDepartureWeekDays
