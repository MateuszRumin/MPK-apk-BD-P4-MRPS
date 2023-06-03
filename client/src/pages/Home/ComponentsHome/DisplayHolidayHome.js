import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-modal'
let objStops = 0

const DisplayHolidayHome = ({ selectLine2 }) => {
	const [weekDays, setWeekDays] = useState([])

	const getStopsFreeForLine = () => {
		if (objStops === 0) {
			console.log('brak danych')
		} else {
			// console.log(objStops)

			axios
				.post('http://localhost:3001/select/departure/onstop', objStops)
				.then(response => {
					const weekDays = response.data
					// setWeekDays(weekDays)
					console.log('Pobrano')
					console.log(weekDays)
				})
				.catch(error => {
					console.log(error)
				})
		}
	}

	useEffect(() => {
		function onObjectChange(props) {
			// console.log(props)
			objStops = props
			getStopsFreeForLine()
		}
		if (selectLine2.id_route) {
			onObjectChange(selectLine2)
		}
	}, [selectLine2])

	return (
		<section className="sectionLinesDisplayStreetsT">
			<div className="headerSectionDisplayStreets">
				<span className="switchClass">Niedziele i swieta</span>
			</div>
			<section className="contentDisplayStreets">
				<div className="tbl-header">
					<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
						<thead>
							<tr>
								<th>Godziny</th>
								<th>Minuty</th>
							</tr>
						</thead>
					</table>
				</div>
				<div className="tbl-contenttt">
					<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
						<tbody className="DispStreets ">
							{weekDays.map(user => (
							<tr key={user.num_passage}>
								<td>{user.time}</td>
							</tr>
							))}
						</tbody>
					</table>
				</div>
				<div></div>
			</section>
		</section>
	)
}

export default DisplayHolidayHome
