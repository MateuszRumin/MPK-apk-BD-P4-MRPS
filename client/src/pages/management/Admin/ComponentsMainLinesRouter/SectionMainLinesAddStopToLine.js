import React, { Component } from 'react'
import axios from 'axios'

class SectionMainLinesAddStopToLine extends Component {
	state = {
		usersData: [],
	}

	componentDidMount() {
		axios
			.post('http://localhost:3001/select/times/all')
			.then(response => {
				const usersData = response.data
				this.setState({ usersData })
				console.log('Pobranie ulic z bazy')
				console.log(usersData)
			})
			.catch(error => {
				console.log(error)
			})
	}

	selectLines(line) {
		console.log(line)

		this.props.selectConnect(line)
	}

	render() {
		const { usersData } = this.state
		return (
			<section className="sectionConnectDisplayConnects">
				<section className="contentDisplayConnects">
					<div className="tbl-header">
						<table className="tableDisplayConnects" cellPadding="0" cellSpacing="0" border="0">
							<thead>
								<tr>
									<th>Przystanek</th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="tbl-content">
						<table className="tableDisplayConnects" cellPadding="0" cellSpacing="0" border="0">
							<tbody className="DispConnects ">
								{usersData.map(user => (
									<tr key={user.id_time}>
										<td>
											<span className="spanKlikLine" onClick={() => this.selectLines(user)}>
												KLIKNIJ
											</span>
										</td>
										<td>{user.stopOne.name}</td>
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
export default SectionMainLinesAddStopToLine
