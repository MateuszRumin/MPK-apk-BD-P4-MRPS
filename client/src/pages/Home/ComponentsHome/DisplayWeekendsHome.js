import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-modal'
import "../css/DisplayWeekendsHome.css"
let objStops = 0
let direction = false
const DisplayWeekendsHome = ({ selectLine2 }) => {

	const [weekDays, setWeekDays] = useState([])


	const getStopsFreeForLine = () => {
	
		if (objStops === 0) {
			console.log('brak danych')
		} else {
			

			console.log(objStops)

			let sendObj = {
				day: 'saturday',
				id_line: objStops.id_line,
				id_stop: objStops.id_stop,
				id_route: objStops.id_route,
				direction: direction,
			}



			axios
				// .post('http://localhost:3001/select/departure/onstop', objStops)
				.post('http://localhost:3001/select/departure/onstop', sendObj)
				.then(response => {
					const weekDays = response.data
					setWeekDays(weekDays)
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
	
	const switchDirection = () => {
		console.log(direction);


		if(direction == false){

			direction = true
		}else if(direction == true){

			direction = false

		}
		getStopsFreeForLine()
	
	}

	return (
		<section className="sectionLinesDisplayStreetsT">
			<div className="headerSectionDisplayStreets">
				<span className="switchClass">Soboty</span>
			</div>
			<section className="contentDisplayStreets">
				<div className="tbl-header posr">
							<i onClick={() => switchDirection()} className="ti ti-refresh iconRefreshWeekends"></i>
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
									<td>{user.time.substring(0,2)}</td>
									<td>{user.time.substring(3,5)}</td>
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

export default DisplayWeekendsHome
