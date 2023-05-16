import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import SectionConnectChangeTime from './ComponentsConnections/SectionConnectChangeTime'
import './ComponentsConnections/css/Connections.css'
import SectionConnectDisplayConnects from './ComponentsConnections/SectionConnectDisplayConnects'
import SectionConnectSetNewConFrom from './ComponentsConnections/SectionConnectSetNewConFrom'
import SectionConnectSetNewConTo from './ComponentsConnections/SectionConnectSetNewConTo'
import SectionConnectAddNewCon from './ComponentsConnections/SectionConnectAddNewCon'
export const Connections = () => {
	let [selectCon, setSelectLine] = useState([])
	let [selectStop, setSelectStop] = useState([])

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
						<NavLink to="/admin/lines">Linie</NavLink>
						<NavLink to="/admin/logout">Wyloguj</NavLink>
					</nav>
				</header>
			</section>

			<div className="containerLines">
				{/* LEWA SEKCJA */}
				<section className="leftSectionLines">
					{/* <SectionConnectDisplayConnects /> */}
					<SectionConnectDisplayConnects selectConnect={selectConnect} />
					<SectionConnectChangeTime selectCon={selectCon} />
				</section>

				{/* PRAWA SEKCJA */}
				<section className="rightSectionLines">
					<section className='rightSectionNewCon'>
						<SectionConnectSetNewConFrom setStop={setStop} />
						<SectionConnectSetNewConTo selectStop={selectStop} />
					</section>
					<SectionConnectAddNewCon selectStop={selectStop} />
				</section>
			</div>
		</div>
	)
}
