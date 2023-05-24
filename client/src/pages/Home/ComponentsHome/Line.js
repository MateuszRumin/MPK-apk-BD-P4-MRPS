import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Navbar } from './Navbar'
import axios from 'axios'

const Line = () => {
	const params = useParams()
	const [usersData, setUsersData] = useState([])

	useEffect(() => {
		const selectLine = params.id_line

		const seLine = {
			id_line: selectLine,
		}

		axios
			.post('http://localhost:3001/select/routes/pnpt', seLine)
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

	const selectLines = line => {
		console.log(line)
		// props.selectConnect(line);
	}

	return (
		<div>
			<Navbar />
			<section className="sectionConnectDisplayConnects containerLines">
				<section className="contentDisplayConnects">
					<div className="tbl-header">
						<table className="tableDisplayConnects" cellPadding="0" cellSpacing="0" border="0">
							<thead>
								<tr>
									<th>Kolejno</th>
									<th>Przystanek</th>
									<th>Numer lini</th>
									<th>Wariant</th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="tbl-content">
						<table className="tableDisplayConnects" cellPadding="0" cellSpacing="0" border="0">
							<tbody className="DispConnects">
								{usersData.map(user => (
									<tr key={user.id_route}>
										<td>{user.order}</td>
										<td>{user.stop.name}</td>
										<td>{user.line.num_line}</td>
										<td>{user.type.name}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>
				<div>
					{/* <h1>Strona linii {JSON.stringify(params)}</h1> */}
					{/* Tutaj wyświetlaj zawartość strony */}
				</div>
			</section>
		</div>
	)
}

export default Line
