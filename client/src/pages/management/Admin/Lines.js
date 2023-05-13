import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import SectionLinesDisplayStops from './ComponentsLines/SectionLinesDisplayStops'
import SectionLinesDisplayStreets from './ComponentsLines/SectionLinesDisplayStreets'
import SectionLinesModStreets from './ComponentsLines/SectionLinesModStreets'
import SectionLinesModStops from './ComponentsLines/SectionLinesModStops'
import '../Admin/ComponentsLines/css/Lines.css'




export const Lines = () => {

	let [selectLine, setSelectLine] = useState([])


	function selectLines(line) {
		// console.log(line);
		selectLine = line
		setSelectLine(selectLine);
		// console.log(selectLine);

	}


	return (
		<div>
			<section>
				<header className="navbarLines">
					<p className="logoLines">
						<i className="fa-solid fa-bus"></i>
					</p>

					<nav className="navigationLines">
						<NavLink to="/admin">Main panel</NavLink>
						<NavLink to="/admin/users">Uzytkownicy</NavLink>
						<NavLink to="/admin/logout">Wyloguj</NavLink>
					</nav>
				</header>
			</section>

			<div className="containerLines">
				{/* LEWA SEKCJA */}
				<section className="leftSectionLines">
					<SectionLinesDisplayStreets onChange={selectLines}/>
					<SectionLinesDisplayStops selectLine={selectLine} />
				</section>

				{/* PRAWA SEKCJA */}
				<section className="rightSectionLines">
				<SectionLinesModStreets />
			{/* <SectionLinesModStops /> */}

				</section>
			</div>
		</div>
	)
}
