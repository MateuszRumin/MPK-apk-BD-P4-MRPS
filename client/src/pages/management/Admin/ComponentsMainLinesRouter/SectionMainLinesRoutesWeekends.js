import React, { useState, useEffect } from 'react'
import axios from 'axios'

let objStops = 0
let iloscwierszy

const SectionMainLinesRoutesWeekends = ({ selectLine }) => {
	const [weekDays, setWeekDays] = useState([])

	const getStopsFreeForLine = () => {
		if (objStops === 0) {
			console.log('brak danych')
		} else {
			axios
				.post('http://localhost:3001/select/routes/sb', objStops)
				.then(response => {
					const weekDays = response.data
					setWeekDays(weekDays)
					console.log('Pobranie ulic z bazy')
					console.log(weekDays)
				})
				.catch(error => {
					console.log(error)
				})
		}
	}

	useEffect(() => {
		iloscwierszy = weekDays.length
		function onObjectChange(props) {
			console.log(props)
			objStops = props
			getStopsFreeForLine()
		}
		if (selectLine.id_line) {
			onObjectChange(selectLine)
		}
	}, [selectLine])

	return (
		<section className="sectionLinesNewConTo sizetab">
			<section className="contentNewConTo">
				<div className="tbl-header">
					<table className="tableNewConToo" cellPadding="0" cellSpacing="0" border="0">
						<thead>
							<div className=""><b>Soboty:</b></div>
							<tr>
								<th>Pzrystanek</th>
								<th>Kolejność</th>
								<th>Linia</th>
								<th>Wriant</th>
								
							</tr>
						</thead>
					</table>
				</div>
				<div className="tbl-contentt">
					<table className="tableNewConToo" cellPadding="0" cellSpacing="0" border="0">
						<tbody className="NewConTo">
							{weekDays.map((weekDay, index) => (
								<tr key={weekDay.id_route}>
									{/* Nazwa przystanku */}
									<td>{weekDay.stop.name}</td>
									{/* kolejnosc */}
									<td>{weekDay.order}</td>
									{/* linia */}
									<td>{weekDay.line.num_line}</td>
									<td>{weekDay.type.name}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</section>
	)
}

export default SectionMainLinesRoutesWeekends
