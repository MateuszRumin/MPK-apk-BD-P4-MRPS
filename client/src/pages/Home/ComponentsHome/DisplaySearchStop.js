import React, { useState, useEffect } from 'react'
import axios from 'axios'
let objStops = 0
const DisplaySearchStop = ({ selectLine2 }) => {
	const [usersData, setUsersData] = useState([])

	const getStopsFreeForLine = () => {
		if (objStops === 0) {
			console.log('brak danych')
		} else {
			const trimmedObjStops = String(objStops.name_stop).trim()

			let obj = {
				name: trimmedObjStops,
			}
			axios
				.post('http://localhost:3001/test', obj)
				.then(response => {
					const weekDays = response.data
					// setUsersData(weekDays)
					// console.log('Pobranie ulic z bazy')
					// console.log(weekDays)
				})
				.catch(error => {
					// console.log(error)
				})
		}
	}

	useEffect(() => {
		function onObjectChange(props) {
			// console.log(props)
			objStops = props
			getStopsFreeForLine()
		}

		if (selectLine2 != null) {
			onObjectChange(selectLine2)
			// alert(selectLine2)
		}
	}, [selectLine2])

	return (
		<section className="sectionLinesDisplayStreetsT">
			<div className="headerSectionDisplayStreets">
				<p>Godziny odjazdów</p>
			</div>
			<section className="contentDisplayStreets">
				<div className="tbl-header">
					<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
						<thead>
							<tr>
								<th>Linia</th>
								<th>Kierunek</th>
								<th>Odjazd</th>
							</tr>
						</thead>
					</table>
				</div>
				<div className="tbl-content">
					<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
						<tbody className="DispStreets">
							{usersData.map(user => (
								<tr key={user.id_street}>
									<td>{user.id_street}</td>
									<td>{user.name}</td>
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

export default DisplaySearchStop
