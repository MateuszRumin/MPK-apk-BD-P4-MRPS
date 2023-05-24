import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import SectionMainLinesDisplayLines from './ComponentsMainLinesRouter/SectionMainLinesDisplayLines'
import SectionMainLinesRoutesWeekDays from './ComponentsMainLinesRouter/SectionMainLinesRoutesWeekDays'
import SectionMainLinesRoutesWeekends from './ComponentsMainLinesRouter/SectionMainLinesRoutesWeekends'
import SectionMainLinesHoliday from './ComponentsMainLinesRouter/SectionMainLinesHoliday'
import SectionMainLinesAddNewLine from './ComponentsMainLinesRouter/SectionMainLinesAddNewLine'
import SectionMainLinesChangePostition from './ComponentsMainLinesRouter/SectionMainLinesChangePostition'
import SectionMainLinesAddStopToLine from './ComponentsMainLinesRouter/SectionMainLinesAddStopToLine'
import '../Admin/ComponentsMainLinesRouter/css/MainLinesRoutes.css'

export const MainLinesRoutes = () => {
	let [selectLine, setSelectLine] = useState([])
	let [selectLineWeekDay, setSelectLineWeekDay] = useState([])

	function selectLines(line) {
		// console.log(line);

		selectLine = line
		setSelectLine(selectLine)
		// console.log(selectLine)
	}

	function selectLineWeekDays(s) {
		// console.log(s);
		let typ = s.type.name

		selectLineWeekDay = s
		// selectLineWeekDay.type = type
		selectLineWeekDay.typ = typ

		setSelectLineWeekDay(selectLineWeekDay)
		console.log(selectLineWeekDay)
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

			<div className="containerMainPanel">
				{/* LEWA SEKCJA */}
				<section className="mainlinesleftsection">
					{/* Wyswietla linie */}
					<SectionMainLinesDisplayLines onChange={selectLines} />
					{/* Dodaj linie */}
					<SectionMainLinesAddNewLine />
					{/* W kolejnosci przystanki */}
					{/* <SectionMainLinesChangePostition selectLineWeekDay={selectLineWeekDay} /> */}
				</section>

				{/* PRAWA SEKCJA */}
				<section className="rightSe">
					{/* Dni powszednie */}
					{/* Soboty */}
					{/* Niedziele i swieta */}
					ReactDOM.render(
					<React.StrictMode>
						<DndProvider backend={HTML5Backend}>
							<SectionMainLinesRoutesWeekDays selectLine={selectLine} onChangee={selectLineWeekDays} />
							{/* <SectionMainLinesHoliday selectLine={selectLine} onChangee={selectLineWeekDays} /> */}
							{/* <SectionMainLinesRoutesWeekends selectLine={selectLine} onChangee={selectLineWeekDays} /> */}
						</DndProvider>
					</React.StrictMode>
					, document.getElementById('root'), );
				</section>
				<section className="addtolinestops">
					<SectionMainLinesAddStopToLine />
				</section>
			</div>
		</div>
	)
}
