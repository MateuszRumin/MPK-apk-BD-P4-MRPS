import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import './ComponentsDeparture/css/Departure.css'
import SectionDepartureDisplayLine from './ComponentsDeparture/SectionDepartureDisplayLine'
import SectionDepartureWeekend from './ComponentsDeparture/SectionDepartureWeekend'
import SectionDepartureWeekDays from './ComponentsDeparture/SectionDepartureWeekDays'
import SectionDepartureHoliday from './ComponentsDeparture/SectionDepartureHoliday'
export const Departure = () => {
	let [selectCon, setSelectLine] = useState([])
	let [selectStop, setSelectStop] = useState([])
	let [freeSelectStop, setfreeSelectStop] = useState([])

	let [selectLine2, setSelectLine2] = useState([])
	let [selectLineWeekDay, setSelectLineWeekDay] = useState([])

	// W tygodniu
	const [showComponent2, setShowComponent2] = useState(true)

	// Niedziele i swieta
	const [showComponent3, setShowComponent3] = useState(false)

	// Weekendy
	const [showComponent4, setShowComponent4] = useState(false)

	const switchComponents = day => {
		console.log(day)

		if (day == 'So') {
			setShowComponent2(false)
			setShowComponent3(false)
			setShowComponent4(true)
		}

		if (day == 'Nd') {
			setShowComponent2(false)
			setShowComponent4(false)
			setShowComponent3(true)
		}

		if (day == 'Rob') {
			setShowComponent2(true)
			setShowComponent3(false)
			setShowComponent4(false)
		}

		console.log('Zmiana komponentów')
	}

	function selectConnect(c) {
		// console.log(line);

		selectCon = c
		setSelectLine(selectCon)
		// console.log(selectLine)
	}

	function setStop(selectS) {
		selectStop = selectS
		setSelectStop(selectStop)
	}

	function FunfreeStopCon(a) {
		freeSelectStop = a
		setfreeSelectStop(freeSelectStop)
		// console.log(a);
	}

	function selectLines(line) {
		// console.log(line);

		selectLine2 = line
		setSelectLine2(selectLine2)
		console.log(selectLine2)
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
						<NavLink to="/admin/lines">Ulice</NavLink>
						<NavLink to="/admin/connections">Połączenia</NavLink>
						<NavLink to="/admin/mainlines">Linie i trasy</NavLink>
						<NavLink to="/admin/logout">Wyloguj</NavLink>
					</nav>
				</header>
			</section>

			<div className="containerLines">
				<section className="leftSectionLines">
					{/* <SectionConnectDisplayConnects selectLine2={selectLine2} selectConnect={selectConnect} /> */}
					<SectionDepartureDisplayLine onChange={selectLines} />
				</section>

				<section className="rightSectionLines">
					{showComponent2 && (
						<SectionDepartureWeekDays
							onChange={switchComponents}
							selectLine2={selectLine2}
							selectConnect={selectConnect}
						/>
					)}

					{/* <SectionDepartureHoliday selectLine2={selectLine2} selectConnect={selectConnect} /> */}

					{showComponent3 && (
						<SectionDepartureHoliday
							onChange={switchComponents}
							selectLine2={selectLine2}
							selectConnect={selectConnect}
						/>
					)}
					{showComponent4 && (
						<SectionDepartureWeekend
							onChange={switchComponents}
							selectLine2={selectLine2}
							selectConnect={selectConnect}
						/>
					)}
				</section>
			</div>
		</div>
	)
}
