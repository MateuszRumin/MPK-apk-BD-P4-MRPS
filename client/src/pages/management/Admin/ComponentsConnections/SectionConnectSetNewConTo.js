import React, { Component } from 'react'
import axios from 'axios'
import "./css/SectionConnectSetNewConTo.css"
let objStops;
class SectionConnectSetNewConTo extends Component {
	state = {
		freeStopsData: [],
	}

	getStopsFreeForLine = (objStops) => {
	
        axios
          .post('http://localhost:3001/test',objStops)
          .then(response => {
            const freeStopsData = response.data
            // this.setState({ freeStopsData }) ODKOMENTUJ ABY ODPOWIEDZ WRZUCIALA SIE DO TABELKI
            console.log('Pobranie ulic z bazy')
            console.log(freeStopsData)
          })
          .catch(error => {
            console.log(error)
          })
		}

		startLoading = () =>{
			this.getStopsFreeForLine(objStops)
		}

	render() {
		const { freeStopsData } = this.state

		function onObjectChange(props) {
			console.log(props);
			objStops = props
			console.log(objStops);
		}
		return (
			<section className="sectionLinesNewConTo">
				 {this.props.selectStop.id_stop && onObjectChange(this.props.selectStop)}
				

				<div className="headerSectionNewConTo">
					<p>Przystanki do utworzenia połączenia od:</p>
					
				</div>
				{/* Kliknij a sie zaladuje wybrana linia {this.props.selectStop.id_street}: */}
				 

				<section className="contentNewConTo">
					<div className="tbl-header">
						<table className="tableNewConTo" cellPadding="0" cellSpacing="0" border="0">
							<thead>
								<tr>
									<th>Id</th>
									<th>Nazwa przystanku</th>
									<th>id_ulicy</th>
									

									<th className="thirdTd"></th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="tbl-content">
						<table className="tableNewConTo" cellPadding="0" cellSpacing="0" border="0">
							<tbody className="NewConTo">
								{freeStopsData.map(Fstop => (
									<tr key={Fstop.id_stop}>
										<td>
											{Fstop.id_stop}
											<span className="spanKlikLine" onClick={() => this.selectfreeaStop(Fstop)}>
												KLIKNIJ
											</span>
											{/* <span className="spanKlikLine" onClick={() => this.changeRename(user)}>
												ZMIEŃ NAZWE
											</span> */}
										</td>
									
										<td>{Fstop.name}</td>
										<td>{Fstop.id_street}</td>
										

										<td className="thirdTd">
											<button className="test" onClick={() => this.deleteLine(Fstop)}>
												X
											</button>
										</td>
									</tr>
								))}
							</tbody>
							
						</table>
						
					</div>
					<button className='buttonLoadingDataClick' onClick={this.startLoading}>Załaduj przystanki </button>
				</section>
			</section>
		)
	}
}
export default SectionConnectSetNewConTo
