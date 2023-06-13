import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import SectionLinesDisplayStops from './ComponentsLines/SectionLinesDisplayStops'
import SectionLinesDisplayStreets from './ComponentsLines/SectionLinesDisplayStreets'
import SectionLinesModStreets from './ComponentsLines/SectionLinesModStreets'
import SectionLinesModStops from './ComponentsLines/SectionLinesModStops'
import News from './News'
import '../Admin/ComponentsLines/css/Lines.css'

export const Lines = () => {
	let [selectLine, setSelectLine] = useState([])
	let [selectStop, setSelectStop] = useState([])

	function selectLines(line) {
		// console.log(line);

		selectLine = line
		setSelectLine(selectLine)
		// console.log(selectLine)
	}

	function selectStops(stops) {
		selectStop = stops
		setSelectStop(selectStop)
	}

	return (
		<div>
			<section>
				<header className="navbarLines">
					<NavLink className="logo" to="/admin">
						<i className="fa-solid fa-bus"></i>
					</NavLink>

					<nav className="navigationLines">
						<NavLink to="/admin">Main panel</NavLink>
						<NavLink to="/admin/connections">Połączenia</NavLink>
						<NavLink to="/admin/departure">Odjazy</NavLink>
						<NavLink to="/admin/lines">Ulice</NavLink>
						<NavLink to="/admin/mainlines">Linie i trasy</NavLink>
						<NavLink to="/admin/users">Użytkownicy</NavLink>
						<NavLink to="/admin/logout">Wyloguj</NavLink>
					</nav>
				</header>
			</section>

			<div className="containerLines">
				{/* LEWA SEKCJA */}
				<section className="leftSectionLines">
					<SectionLinesDisplayStreets onChange={selectLines} />
				</section>

				{/* PRAWA SEKCJA */}
				<section className="rightSectionLinesss">
					<SectionLinesDisplayStops selectStops={selectStops} selectLine={selectLine} />
					<SectionLinesModStreets />
					{/* <SectionLinesModStops  selectStop={selectStop}/> */}
				</section>
			</div>
			<News />
		</div>
	)
}
