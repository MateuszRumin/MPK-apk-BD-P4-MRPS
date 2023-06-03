import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Navbar } from './Navbar'
import axios from 'axios'
import DisplayWeekDayHome from './DisplayWeekDayHome'
import DisplayHolidayHome from './DisplayHolidayHome'
import DisplayWeekendsHome from './DisplayWeekendsHome'
import '../css/Line.css'
let displayLine = ''
const Line = () => {
	const params = useParams()
	const [usersData, setUsersData] = useState([])
	let [selectLine2, setSelectLine2] = useState([])

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
				console.log(`Pobranie przystanków dla lini ${displayLine}`)
			})
			.catch(error => {
				console.log(error)
			})
	}, [])

	const selectLines = line => {
		console.log(line)
		selectLine2 = line
		console.log(selectLine2);
		setSelectLine2(selectLine2)
	}

	return (
		<div className="structureSection">
			<Navbar />
			<section className="sectionHomeLine containerDisplayLins">
				<section className="contentDisLines">
					<p>Linia: {displayLine}</p>
					<div className="tbl-headerrr">
						<table className="tableDisplayConnects" cellPadding="0" cellSpacing="0" border="0">
							<thead>
								<tr>
									<th>Przystanek</th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="tbl-contenttt">
						<table className="tableDisplayConnectsts" cellPadding="0" cellSpacing="0" border="0">
							<tbody className="DispConnecccts">
								{usersData.map(user => (
									<tr key={user.id_route} onClick={() => selectLines(user)}>
										<td>{user.stop.name}</td>
										<td className="noDisplayy">{(displayLine = user.line.num_line)}</td>
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

			<section className="rightSectionLine">
				<DisplayWeekDayHome selectLine2={selectLine2} />
				<DisplayWeekendsHome selectLine2={selectLine2} />
				<DisplayHolidayHome selectLine2={selectLine2} />
			</section>
		</div>
	)
}

export default Line
