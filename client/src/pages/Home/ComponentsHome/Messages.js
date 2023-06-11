import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../css/Messages.css"
const Messages = () => {
	const [usersData, setUsersData] = useState([])

	useEffect(() => {
		axios
			.post('http://localhost:3001/select/streets/all')
			.then(response => {
				const usersData = response.data
				setUsersData(usersData)
				console.log('Pobranie ulic z bazy')
				console.log(usersData)
			})
			.catch(error => {
				console.log(error)
			})
	}, [])

	return (
        <section className="messages sub-section-right komunikat">
			<p>KOMUNIKATY:</p>


			<div>
				<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
					<thead>
						<tr>
							<th>Data</th>
							<th>Opis</th>
						</tr>
					</thead>
				</table>
			</div>
			<div className="tbl-content contentTable">
				<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
					<tbody className="DispStreets ">
						{usersData.map(user => (
							<tr key={user.id_street}>
								<td>{user.id_street}</td>
								<td>{user.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	)
}

export default Messages
