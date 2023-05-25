import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-modal'
import './css/SectionConnectDisplayConnects.css'

class SectionConnectDisplayConnects extends Component {
	state = {
		usersData: [],
		isOpen: false,
		confirmDelete: '', // Wartość domyślna
		setData: [],
		serverResponse: '', // Odpowiedź serwera
	}

	componentDidMount() {
		axios
			.post('http://localhost:3001/select/streets/all')
			.then(response => {
				const usersData = response.data
				this.setState({ usersData })
				console.log('Pobranie ulic z bazy')
				console.log(usersData)
			})
			.catch(error => {
				console.log(error)
			})
	}

	openModal = data => {
		this.setState({ isOpen: true, confirmDelete: data.name })
		const setData = data
		this.setState({ setData })
		console.log(setData)
	}

	closeModal = () => {
		this.setState({ isOpen: false })
	}

	handleInputChange = event => {
		this.setState({ confirmDelete: event.target.value })
	}

	handleConfirm = () => {
		const { confirmDelete, setData } = this.state

		const validFormat = /^\d{2}:\d{2}$/.test(confirmDelete)
		if (confirmDelete && validFormat) {
			console.log(`Zmieniono nazwę`)
			setData.rename = confirmDelete
			axios.post('http://localhost:3001/test', setData).then(response => {
				console.log(response.data)

				this.setState({ serverResponse: response.data }) // Zapisz odpowiedź serwera w stanie
			})
		} else {
			console.log('nie zmieniono.')
			const res = 'Nie przesłano złe dane faza testów napisz np: 18:36'
			this.setState({ serverResponse: res }) // Zapisz odpowiedź serwera w stanie
			// this.closeModal()
		}
	}
deleteLine(data) {
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

	render() {
		const { usersData, isOpen, confirmDelete, serverResponse } = this.state
		Modal.setAppElement('#root')
		return (
			<section className="sectionLinesDisplayStreetsT">
				<div className="headerSectionDisplayStreets">
					<p>CZAS PRZEJAZDU - A DO B</p>
				</div>
				<section className="contentDisplayStreets">
					<div className="tbl-header">
						<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
							<thead>
								<tr>
									<th>Id</th>
									<th>Route_od</th>
									<th>Route_do</th>
									<th>Pn</th>
									<th>Sb</th>
									<th>Nd</th>
									<th className="thirdTd"></th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="tbl-content">
						<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
							<tbody className="DispStreets ">
								{usersData.map(user => (
									<tr key={user.id_street}>
										<td>
											{user.id_street}{' '}
											{/* <span className="spanKlikLine" onClick={() => this.selectLines(user)}>
												KLIKNIJ
											</span>
											<span className="spanKlikLine" onClick={() => this.changeRename(user)}>
												ZMIEŃ NAZWE
											</span> */}
										</td>

										<td>{user.name}</td>
										<td>{user.name}</td>
										<td className='onFocusCursor' onClick={() => this.openModal(user)}>
											<b>{user.name}</b>
										</td>
										<td className='onFocusCursor' onClick={() => this.openModal(user)}>
											<b>{user.name}</b>
										</td>
										<td className='onFocusCursor' onClick={() => this.openModal(user)}>
											<b>{user.name}</b>
										</td>

										<td className="thirdTd">
											<button className="buttonlistDisplayStret" onClick={() => this.deleteLine(user)}>
												X
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div>
					

						<Modal
							isOpen={isOpen}
							className="custom-modal"
							overlayClassName="custom-overlay"
							onRequestClose={this.closeModal}>
							<h2>Podaj nowy czas:</h2>
							<input type="text" placeholder="hh:mm" value={confirmDelete} onChange={this.handleInputChange} />

							<span className="closeMod" onClick={this.closeModal}>
								X
							</span>
							<button onClick={this.handleConfirm}>Potwierdź</button>

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
}
export default SectionConnectDisplayConnects
