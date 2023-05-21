import React, { Component } from 'react'
import axios from 'axios'

let objStops = 0
let iloscwierszy
class SectionMainLinesRoutesWeekends extends Component {
	state = {
		weekDays: [],
	}

	getStopsFreeForLine = objStops => {
		if (objStops == 0) {
			console.log('brak danych')
		} else {
			axios
				.post('http://localhost:3001/select/routes/sb', objStops)
				.then(response => {
					const weekDays = response.data
					this.setState({ weekDays })
					console.log('Pobranie ulic z bazy')
					console.log(weekDays)
				})
				.catch(error => {
					console.log(error)
				})
		}
	}



	// selectLines(line) {
	// 	// console.log(user)
	// 	//return <SectionUsersEditionUsers myObject={user} />
	// 	// console.log(objStops);
	// 	line.id_line = objStops.id_line
	// 	console.log(line)

	// 	this.props.onChangee(line)
	// }

	selectStops(line, event, index) {
		// console.log(user)
		//return <SectionUsersEditionUsers myObject={user} />

		console.log(line)
		line.selectRow = index + 1
		line.rows = iloscwierszy
		
		console.log(`ilosc wierszy to ${iloscwierszy}`);
		console.log(`Kliknięty element o indeksie: ${index}`)
		// this.props.selectStops(line)



		line.id_line = objStops.id_line
		console.log(line)

		this.props.onChangee(line)




	}



	deleteLine(data) {
		console.log(data.id_street)

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



	startLoading = () => {
		this.getStopsFreeForLine(objStops)
	}

	selectfreeaStop(weekDay) {
		// console.log(user)
		//return <SectionUsersEditionUsers myObject={user} />
		// console.log(line)

		this.props.freeStopCon(weekDay)
	}
	render() {
		const { weekDays } = this.state
		iloscwierszy = weekDays.length
		function onObjectChange(props) {
			// console.log(props)
			objStops = props
			// console.log(objStops)
		}
		return (
			<section className="sectionLinesNewConTo">
				{this.props.selectLine.id_line && onObjectChange(this.props.selectLine)}

				<div className="headerSectionNewConTo">
					<p>Powszednie:</p>
				</div>
				{/* Kliknij a sie zaladuje wybrana linia {this.props.selectStop.id_street}: */}

				<section className="contentNewConTo">
					<div className="tbl-header">
						<table className="tableNewConTo" cellPadding="0" cellSpacing="0" border="0">
							<thead>
								<tr>
									<th>Id</th>
									<th>Pzrystanek</th>
									<th>Kolejność</th>
									<th>Linia</th>
									<th>Wriant</th>

									<th className="thirdTd"></th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="tbl-content">
						<table className="tableNewConTo" cellPadding="0" cellSpacing="0" border="0">
							<tbody className="NewConTo">
								{weekDays.map((weekDay, index) => (
									<tr key={weekDay.id_route}>
										<td>
											{weekDay.id_route}
											<span className="spanKlikLine" onClick={event => this.selectStops(weekDay, event, index)}>
												KLIKNIJ
											</span>
											{/* <span className="spanKlikLine" onClick={() => this.changeRename(weekDay)}>
												ZMIEŃ NAZWE
											</span> */}
										</td>

										

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
					<button className="buttonLoadingDataClick" onClick={this.startLoading}>
						Załaduj przystanki{' '}
					</button>
				</section>
			</section>
		)
	}
}
export default SectionMainLinesRoutesWeekends
