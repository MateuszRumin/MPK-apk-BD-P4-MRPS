import React, { Component } from 'react'
import axios from 'axios'
import './css/SectionLinesDisplayStreets.css'

class SectionLinesDisplayStreets extends Component {
	state = {
		usersData: [],
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

	handleRowClick(user) {
		// console.log(user.emp_no)
		//return <SectionUsersEditionUsers myObject={user} />
		// this.props.onChange(user);
		this.onSubmit(user)
	}
	// Wysyła zapytanie do serwera odnoscnie konkretnej lini i w innym komponencie wyświetli dane
	onSubmit = data => {
		axios.post('http://localhost:3001/auth/login/', data).then(response => {
			console.log(response.data)
		})
	}
	selectLines(line) {
		// console.log(user)
		//return <SectionUsersEditionUsers myObject={user} />
		console.log(line)
		
		this.props.onChange(line)
	}
	deleteLine(data, event) {

		event.preventDefault() // Zapobiegamy domyślnej akcji (wyświetlanie kontekstowego menu przeglądarki)
		const answer = window.confirm(`Na pewno chcesz usunąć linie ${data.name} ?`)
		if (answer) {
		
			axios.post('http://localhost:3001/test', data).then(response => {
				console.log(response.data)
			})
		} else {
			console.log('Anulowano usuwanie linii.')
		}

		console.log(data.id_street)
	}

	changeRename(data) {
		// console.log(data)

		const confirmDelete = window.prompt(`Podaj nową nazwę ulicy ? `)

		if (confirmDelete && !/\d/.test(confirmDelete)) {
			console.log(`Zmieniono nazwę`)
			data.rename = confirmDelete
			axios.post('http://localhost:3001/update/street', data).then(response => {
				console.log(response.data)
			})
		} else {
			console.log('nie zmieniono.')
		}
	}

	render() {
		const { usersData } = this.state
		return (
			<section className="sectionLinesDisplayStreetsT">
				<div className="headerSectionDisplayStreets">
					<p>LISTA ULIC</p>
				</div>
				<section className="contentDisplayStreets">
					<div className="tbl-header">
						<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
							<thead>
								<tr>
									{/* <th>Id</th> */}
									<th>Akcja</th>
									<th>Nazwa</th>
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
											{/* {user.id_street}{' '} */}
											<span className="spanKlikLine" onClick={() => this.selectLines(user)}>
												Wybierz
											</span>
										
										</td>
										<td className="spanKlikLine" onClick={() => this.changeRename(user)}>{user.name}</td>

										<td className="thirdTd">
											<button className="buttonlistDisplayStret" onClick={event => this.deleteLine(user, event)}>
												X
												
											</button>
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
export default SectionLinesDisplayStreets
