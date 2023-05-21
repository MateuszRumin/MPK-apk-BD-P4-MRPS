import React, { Component } from 'react'
import axios from 'axios'

let objStops = 0
class SectionMainLinesRoutesWeekDays extends Component {
	state = {
		freeStopsData: [],
	}

	getStopsFreeForLine = objStops => {
		if (objStops == 0) {
			console.log('brak danych')
		} else {
			axios
				.post('http://localhost:3001/select/routes/pnpt', objStops)
				.then(response => {
					const freeStopsData = response.data
					// this.setState({ freeStopsData })
					console.log('Pobranie ulic z bazy')
					console.log(freeStopsData)
				})
				.catch(error => {
					console.log(error)
				})
		}
	}

	startLoading = () => {
		this.getStopsFreeForLine(objStops)
	}

	selectfreeaStop(fstop) {
		// console.log(user)
		//return <SectionUsersEditionUsers myObject={user} />
		// console.log(line)

		this.props.freeStopCon(fstop)
	}
	render() {
		const { freeStopsData } = this.state

		function onObjectChange(props) {
			// console.log(props)
			objStops = props
			// console.log(objStops)
		}
		return (
			<section className="sectionLinesNewConTo">
				{this.props.selectLine.name && onObjectChange(this.props.selectLine)}

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
								{freeStopsData.map(Fstop => (
									<tr key={Fstop.id_route}>
										<td>
											{Fstop.id_stop}
											<span className="spanKlikLine" onClick={() => this.selectfreeaStop(Fstop)}>
												KLIKNIJ
											</span>
											{/* <span className="spanKlikLine" onClick={() => this.changeRename(user)}>
												ZMIEŃ NAZWE
											</span> */}
										</td>

										<td>{Fstop.order}</td>
										<td>{Fstop.Street.name}</td>
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
export default SectionMainLinesRoutesWeekDays
