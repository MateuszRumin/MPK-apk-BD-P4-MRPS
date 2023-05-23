import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../css/DisplayLines.css"
const DisplayLines = () => {
	const [usersData, setUsersData] = useState([])

	useEffect(() => {
		axios
			.post('http://localhost:3001/select/lines/all')
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

	const selectLines = user => {
		// Logika obsługi zdarzenia kliknięcia na linii

	}

	return (
		<section className="sectionLinesDisplayStreets section-line urban">
		
					{usersData.map(user => (
						<div key={user.id_line} className='testtt'>
								<div className="square-line normal-line">{user.num_line}</div>								
						</div>
					))}
			
			
		</section>
	)
}

export default DisplayLines
