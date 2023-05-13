import React, { Component } from 'react'
import axios from 'axios'
import './css/SectionLinesDisplayStops.css'

class SectionLinesDisplayStops extends Component {
	state = {
		usersData: [],
	}

	componentDidMount() {
		axios
			.post('http://localhost:3001/select/employees/allAndRole')
			.then(response => {
				const usersData = response.data
				this.setState({ usersData })
				console.log('Pobranie przystankow z bazy')
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
	// Wysyła zapytanie do serwera odnoscnie konkretnego przystanku
	onSubmit = data => {
		axios.post('http://localhost:3001/auth/login/', data).then(response => {
			console.log(response.data)
		})
	}

	selectSendLine = SelectLine => {
		axios.post('http://localhost:3001/test', SelectLine).then(response => {
			// const usersData = response.data
			// 	this.setState({ usersData })
			console.log(response.data)

			// tutaj bedzie dalszy ciąg
		})
		console.log(SelectLine.name)
	}

	render() {
		const { usersData } = this.state

		return (
			<section className="sectionLinesDisplayStops">
				{this.props.selectLine.street_id && this.selectSendLine(this.props.selectLine)}

				<div className="headerSectionDisplayStops">
					<p>LISTA PRZYSTANKÓW</p>
				</div>
				<section className="contentDisplayStops">
					<div className="tbl-header">
						<table className="tableDisplayStops" cellPadding="0" cellSpacing="0" border="0">
							<thead>
								<tr>
									<th>Id</th>
									<th>Nazwa</th>
									<th>id_lini</th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="tbl-content">
						<table className="tableDisplayStops" cellPadding="0" cellSpacing="0" border="0">
							<tbody>
								{usersData.map(user => (
									<tr key={user.emp_no} onClick={() => this.handleRowClick(user)}>
										<td>{user.emp_no}</td>
										<td>{user.first_name}</td>
										<td>{user.emp_no}</td>
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
export default SectionLinesDisplayStops
