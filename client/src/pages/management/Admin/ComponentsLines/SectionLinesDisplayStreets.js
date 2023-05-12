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
		console.log(user.emp_no)
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

	render() {
		const { usersData } = this.state
		return (
			<section className="sectionLinesDisplayStreets">
				<div className="headerSectionDisplayStreets">
					<p>LISTA ULIC</p>
				</div>
				<section className="contentDisplayStreets">
					<div className="tbl-header">
						<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
							<thead>
								<tr>
									<th>Id</th>
									<th>Nazwa</th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="tbl-content">
						<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
							<tbody>
								{usersData.map(user => (
									<tr key={user.street_id} onClick={() => this.handleRowClick(user)}>
										<td>{user.street_id}</td>
										<td>{user.name}</td>
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
