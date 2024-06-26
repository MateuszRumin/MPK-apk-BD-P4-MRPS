import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-modal'


class SectionConnectDisplayConnects2 extends Component {
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


	render() {
		const { usersData, isOpen, confirmDelete, serverResponse } = this.state
		Modal.setAppElement('#root')
		return (
			<section className="sectionLinesDisplayStreetsT">
				<div className="headerSectionDisplayStreets">
					<p>CZAS PRZEJAZDU - B DO A</p>
				</div>
				<section className="contentDisplayStreets">
					<div className="tbl-header">
						<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
							<thead>
								<tr>
								
									<th>Nazwa Przystanku</th>
									
									
									
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
										{user.name}
											{/* <span className="spanKlikLine" onClick={() => this.selectLines(user)}>
												KLIKNIJ
											</span>
											<span className="spanKlikLine" onClick={() => this.changeRename(user)}>
												ZMIEŃ NAZWE
											</span> */}
										</td>

										
										
										

										
									</tr>
								))}
							</tbody>
						</table>
					</div>
					
				</section>
			</section>
		)
	}
}
export default SectionConnectDisplayConnects2
