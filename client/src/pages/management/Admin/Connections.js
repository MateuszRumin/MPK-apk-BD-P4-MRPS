import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import SectionConnectChangeTime from './ComponentsConnections/SectionConnectChangeTime'
import './ComponentsConnections/css/Connections.css'
import SectionConnectDisplayConnects from './ComponentsConnections/SectionConnectDisplayConnects'
import SectionConnectDisplayConnects2 from './ComponentsConnections/SectionConnectDisplayConnects2'
import SectionConnectSetNewConFrom from './ComponentsConnections/SectionConnectSetNewConFrom'
import SectionConnectSetNewConTo from './ComponentsConnections/SectionConnectSetNewConTo'
import SectionConnectAddNewCon from './ComponentsConnections/SectionConnectAddNewCon'
import SectionConnectDisplayCon from './ComponentsConnections/SectionConnectDisplayCon'
export const Connections = () => {
	let [selectCon, setSelectLine] = useState([])
	let [selectStop, setSelectStop] = useState([])
	let [freeSelectStop, setfreeSelectStop] = useState([])

	let [selectLine2, setSelectLine2] = useState([])
	let [selectLineWeekDay, setSelectLineWeekDay] = useState([])

	function selectConnect(c) {
		// console.log(line);

		selectCon = c
		setSelectLine(selectCon)
		// console.log(selectLine)
	}

	function setStop(selectS){
		selectStop = selectS
		setSelectStop(selectStop)


	}

	function FunfreeStopCon(a){

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
						<NavLink to="/admin/departure">Odjazy</NavLink>
						<NavLink to="/admin/lines">Ulice</NavLink>
						<NavLink to="/admin/mainlines">Linie i trasy</NavLink>
						<NavLink to="/admin/logout">Wyloguj</NavLink>
						
					</nav>
				</header>
			</section>

			<div className="containerLines">
			
				<section className="leftSectionLines">
					
					<SectionConnectDisplayConnects selectLine2={selectLine2} selectConnect={selectConnect} />
					<SectionConnectDisplayConnects2 selectLine2={selectLine2} selectConnect={selectConnect} />
					
					{/* <SectionConnectChangeTime selectCon={selectCon} /> */}
				</section>

			
				<section className="rightSectionLines">
					<section className='rightSectionNewCon'>
						<SectionConnectDisplayCon onChange={selectLines} />
						{/* <SectionConnectSetNewConFrom setStop={setStop} /> */}
						{/* <SectionConnectSetNewConTo selectStop={selectStop} freeStopCon={FunfreeStopCon}  /> */}
					</section>
					{/* <SectionConnectAddNewCon selectStop={selectStop} freeSelectStop={freeSelectStop} /> */}
				</section>
			</div>
		</div>
	)
}
