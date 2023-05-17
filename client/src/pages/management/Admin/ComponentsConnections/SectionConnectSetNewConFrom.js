import React, { Component } from 'react'
import axios from 'axios'
import "./css/SectionConnectSetNewConFrom.css"
class SectionConnectSetNewConFrom extends Component {
	state = {
		usersData: [],
	}

	componentDidMount() {
		axios
			.post('http://localhost:3001/select/stops/allWitchStreet')
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

	// handleRowClick(user) {
	// 	// console.log(user.emp_no)
	// 	//return <SectionUsersEditionUsers myObject={user} />
	// 	// this.props.onChange(user);
	// 	this.onSubmit(user)
	// }
	// // Wysyła zapytanie do serwera odnoscnie konkretnej lini i w innym komponencie wyświetli dane
	// onSubmit = data => {
	// 	axios.post('http://localhost:3001/auth/login/', data).then(response => {
	// 		console.log(response.data)
	// 	})
	// }
	selectLines(line) {
		// console.log(user)
		//return <SectionUsersEditionUsers myObject={user} />
		console.log(line)

		this.props.setStop(line)
	}
	deleteLine(data) {
		console.log(data.street_id)

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

	changeRename(data) {
		// console.log(data)

		const confirmDelete = window.prompt(`Podaj nową nazwę lini ? `)

		if (confirmDelete && !/\d/.test(confirmDelete)) {
			console.log(`Zmieniono nazwę`)
			data.rename = confirmDelete
			axios.post('http://localhost:3001/test', data).then(response => {
				console.log(response.data)
			})
		} else {
			console.log('nie zmieniono.')
		}
	}

	render() {
		const { usersData } = this.state
		return (
			<section className="sectionConnectSetNewConFrom">
				<div className="headerSectionSetNewConFrom">
					<p>Przystanki do utworzenia połączenia od:</p>
				</div>
				<section className="contentSetNewConFrom">
					<div className="tbl-header">
						<table className="tableSetNewConFrom" cellPadding="0" cellSpacing="0" border="0">
							<thead>
								<tr>
									<th>Id</th>
									<th>Nazwa przystanku</th>
									<th>Nazwa ulicy</th>
									

									<th className="thirdTd"></th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="tbl-content">
						<table className="tableSetNewConFrom" cellPadding="0" cellSpacing="0" border="0">
							<tbody className="SetNewConFrom ">
								{usersData.map(user => (
									<tr key={user.id_stop}>
										<td>
											{user.id_stop}
											<span className="spanKlikLine" onClick={() => this.selectLines(user)}>
												KLIKNIJ
											</span>
											{/* <span className="spanKlikLine" onClick={() => this.changeRename(user)}>
												ZMIEŃ NAZWE
											</span> */}
										</td>
									
										<td>{user.name}</td>
										<td>{user.Street.name}</td>
										

										
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
export default SectionConnectSetNewConFrom
