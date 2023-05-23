import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-modal'

const SectionMainLinesDisplayLines = ({ onChange }) => {
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

	const selectLines = line => {
		onChange(line)
	}

	const deleteLine = (user, event) => {
		event.preventDefault() // Zapobiegamy domyślnej akcji (wyświetlanie kontekstowego menu przeglądarki)
		const answer = window.confirm('Na pewno chcesz usunąć linie ?')
		if (answer) {
			console.log(`Usuwam linię o id tutaj konkretna`)
			axios.post('http://localhost:3001/test', user).then(response => {
				console.log(response.user)
			})
		} else {
			console.log('Anulowano usuwanie linii.')
		}
	}

	const changeRename = data => {
		const confirmDelete = window.prompt(`Podaj nową nazwę lini ${data.num_line}: `)
		if (confirmDelete && !/\d/.test(confirmDelete)) {
			console.log(`Zmieniono nazwę`)
			data.rename = confirmDelete
			axios.post('http://localhost:3001/update/street', data).then(response => {
				console.log(response.data)
			})
		} else {
			console.log('nie zmieniono.')
		}
	}

	return (
		<section className="sectionLinesDisplayStreets">
			<section className="sectionLinesDisplayStreets section-line urban">
				{usersData.map(user => (
					<div
						title="L - Wybierz | P - Usuń | Dbclick - Zmień nazwe"
						key={user.id_line}
						className="testtt"
						onClick={() => selectLines(user)}
						onDoubleClick={() => changeRename(user)}
						onContextMenu={event => deleteLine(user, event)}>
						<div className="square-line normal-line">{user.num_line}</div>
					</div>
				))}

				<div>
					<div id="portal"></div>
				</div>
			</section>
		</section>
	)
}

export default SectionMainLinesDisplayLines
