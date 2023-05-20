import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'

import SectionMainLinesDisplayLines from './ComponentsMainLinesRouter/SectionMainLinesDisplayLines'
import SectionMainLinesRoutesWeekDays from './ComponentsMainLinesRouter/SectionMainLinesRoutesWeekDays'
import SectionMainLinesRoutesWeekends from './ComponentsMainLinesRouter/SectionMainLinesRoutesWeekends'
import SectionMainLinesHoliday from './ComponentsMainLinesRouter/SectionMainLinesHoliday'
import SectionMainLinesAddNewLine from './ComponentsMainLinesRouter/SectionMainLinesAddNewLine'
import SectionMainLinesChangePostition from './ComponentsMainLinesRouter/SectionMainLinesChangePostition'
import '../Admin/ComponentsLines/css/Lines.css'

export const MainLinesRoutes = () => {
	let [selectLine, setSelectLine] = useState([])


	function selectLines(line) {
		// console.log(line);

		
		selectLine = line
		setSelectLine(selectLine)
		// console.log(selectLine)
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
						<NavLink to="/admin/connections">Połączenia</NavLink>
						<NavLink to="/admin/logout">Wyloguj</NavLink>
					</nav>
				</header>
			</section>

			<div className="containerLines">
				{/* LEWA SEKCJA */}
				<section className="leftSectionLines">
					<SectionMainLinesDisplayLines onChange={selectLines}/>
					<SectionMainLinesAddNewLine />
					{/* <SectionMainLinesChangePostition /> */}
				</section>

				{/* PRAWA SEKCJA */}
				<section className="rightSectionLinesss">
					<SectionMainLinesRoutesWeekDays selectLine={selectLine}/>

					<section>
						<SectionMainLinesRoutesWeekends selectLine={selectLine}/>
						<SectionMainLinesHoliday selectLine={selectLine} />
					</section>
				</section>
			</div>
		</div>
	)
}
