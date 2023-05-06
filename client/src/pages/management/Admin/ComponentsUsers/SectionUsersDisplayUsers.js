import React, { Component } from 'react'
import axios from 'axios'
import './css/SectionUsersDisplayUsers.css'

class SectionUsersDisplayUsers extends Component {
	state = {
		usersData: [],
	}

	componentDidMount() {
		axios
			.post('http://localhost:3001/select/employees/all')
			.then(response => {
				const usersData = response.data
				this.setState({ usersData })
				console.log(usersData)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { usersData } = this.state
		return (
			<section className="sectionUsersDisplayUsers">
				<div className="headerSectionDisplayUsers">
					<p>Pracownicy</p>
				</div>

				<section className="contentDisplayUsers">
					<div className="tbl-header">
						<table className="tableDisplayUser" cellPadding="0" cellSpacing="0" border="0">
							<thead>
								<tr>
									<th>Id</th>
									<th>Imie</th>
									<th>Nazwisko</th>
									<th>Pesel</th>
									<th>Adres</th>
									<th>Numer</th>
									<th>Rola</th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="tbl-content">
						<table className="tableDisplayUser" cellPadding="0" cellSpacing="0" border="0">
							<tbody>
								{usersData.map(user => (
									<tr key={user.emp_no}>
										<td>{user.emp_no}</td>
										<td>{user.first_name}</td>
										<td>{user.second_name}</td>
										<td>{user.addres}</td>
										<td>{user.pesel}</td>
										<td>{user.tel_num}</td>
										<td>{user.pesel}</td>
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

export default SectionUsersDisplayUsers
