import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './css/SectionMainLinesRoutesWeekDays.css'
import Modal from 'react-modal'
import { useDrag, useDrop } from 'react-dnd'

let objStops = 0
let iloscwierszy

const ItemTypes = {
	ROW: 'row',
}

const SectionMainLinesRoutesWeekDays = ({ selectLine }) => {
	const [weekDays, setWeekDays] = useState([])
	const [usersData, setUsersData] = useState([])

	const [isOpen, setIsOpen] = useState(false)
	const [confirmDelete, setConfirmDelete] = useState('')
	let [setData, setSetData] = useState([])
	const [serverResponse, setServerResponse] = useState('')

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
				})
				.catch(error => {
					console.log(error)
				})
		}
	}

	useEffect(
		() => {
			axios
				.post('http://localhost:3001/select/stops/all')
				.then(response => {
					const usersData = response.data
					setUsersData(usersData)
					console.log('Pobranie ulic z bazy')
					console.log(usersData)
				})
				.catch(error => {
					console.log(error)
				})

			iloscwierszy = weekDays.length
			function onObjectChange(props) {
				console.log(props)
				objStops = props
				getStopsFreeForLine()
			}
			if (selectLine.id_line) {
				onObjectChange(selectLine)
			}

		},
		[selectLine],
		[weekDays]
	)
	const openModal = () => {
		setIsOpen(true)
		// setConfirmDelete(data.name);
		// setSetData(data);
		// console.log(setData);
	}
	const closeModal = () => {
		setIsOpen(false)
	}

	const handleConfirm = (selectStop) => {
		// const { confirmDelete, setData } = this.state
      // Wybrana linie wcześniej do której dodaję przystnek
      console.log(objStops);
// Wybrany przystanek który dodaje do odpowiedniej lini
      console.log(selectStop);

      // selectLine = line   
      
     let obj = {
      line: objStops,
      stop: selectStop,

     }
      // setData.select_stop = selectStop
			axios.post('http://localhost:3001/insert/routes', obj).then(response => {
				console.log(response.data)

				setServerResponse(response.data) // Zapisz odpowiedź serwera w stanie

				
			})
	
	}
	
	const moveRow = (dragIndex, hoverIndex) => {
		const draggedRow = weekDays[dragIndex]
		const updatedWeekDays = [...weekDays]	 	
		updatedWeekDays.splice(dragIndex, 1)
		updatedWeekDays.splice(hoverIndex, 0, draggedRow)
		updatedWeekDays.forEach(( row,index) => {
			row.order = index+1
		})
		

		setWeekDays(updatedWeekDays)


		// handleButtonClick(); // Wysyłanie danych do serwera po zmianie kolejności
	}

	const Row = ({ weekDay, index }) => {
		
		const [{ isDragging }, drag] = useDrag({
			type: ItemTypes.ROW,
			item: { index },
			collect: monitor => ({
				isDragging: monitor.isDragging(),
			}),
			
		})

		const [, drop] = useDrop({
			accept: ItemTypes.ROW,
			hover(item) {
				const dragIndex = item.index
				const hoverIndex = index

				if (dragIndex === hoverIndex) {
					return
				}
				
				moveRow(dragIndex, hoverIndex)
				item.index = hoverIndex
				
			},
		})
		Modal.setAppElement('#root')
		return (
			<tr ref={node => drag(drop(node))}>
				<td>{weekDay.order}</td>				
				<td>{weekDay.stop.name}</td>
				<td>{weekDay.line.num_line}</td>
			</tr>
		)
	}

	const handleButtonClick = () => {

		axios
			.post('http://localhost:3001/update/routes/order', weekDays)
			.then(response => {
				console.log('Zmieniona kolejność została wysłana na serwer')
			})
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<section className="sectionLinesNewConTo">
			<section className="contentNewConTo">
				<div className="tbl-header">
					<table className="tableNewConToo" cellPadding="0" cellSpacing="0" border="0">
						<thead>
							<tr>
								<th>Kolejność</th>
								<th>Pzrystanek</th>
								<th>Linia</th>							
							</tr>
						</thead>
					</table>
				</div>
				<div className="tbl-contentt">
					<table className="tableNewConToo" cellPadding="0" cellSpacing="0" border="0">
						<tbody className="NewConTo">
							{weekDays.map((weekDay, index) => (
								<Row key={weekDay.id_route} weekDay={weekDay} index={index} />
							))}
						</tbody>
					</table>
				</div>
				<button onClick={handleButtonClick}>Zapisz zmiany</button>
				<button onClick={() => openModal()}>Dodaj przystanek</button>
			</section>

			<div>
				<Modal
					isOpen={isOpen}
					className="custom-modal"
					overlayClassName="custom-overlay"
					// onRequestClose={closeModal}
				>
					<h2>Wybierz przystanek:</h2>

					<span className="closeMod" onClick={closeModal}>
						X
					</span>

					<section className="sectionLinesDisplayStreets section-line urban">
						<div className="tbl-content">
							<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
								<tbody className="DispStreets ">
									{usersData.map(user => (
										<tr key={user.id_stop}>
											<td>
												{user.name}
												<span className="spanKlikLine" onClick={() => handleConfirm(user)}>
													KLIKNIJ
												</span>

												{/* <span className="spanKlikLine" onClick={() => this.changeRename(user)}>
											ZMIEŃ NAZWE
										</span> */}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</section>
					
					{serverResponse && (
								<div className='errorMessage'>
									<p>{serverResponse}</p>
								</div>
							)}
				</Modal>
			</div>
		</section>
	)
}

export default SectionMainLinesRoutesWeekDays
