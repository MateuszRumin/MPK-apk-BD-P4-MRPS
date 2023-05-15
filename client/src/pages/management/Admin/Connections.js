import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import SectionConnectChangeTime from './ComponentsConnections/SectionConnectChangeTime'
import './ComponentsConnections/css/Connections.css'
import SectionConnectDisplayConnects from './ComponentsConnections/SectionConnectDisplayConnects'
export const Connections = () => {
	let [selectCon, setSelectLine] = useState([])

	function selectConnect(c) {
		// console.log(line);

		selectCon = c
		setSelectLine(selectCon)
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
				</section>

				{/* PRAWA SEKCJA */}
				<section className="rightSectionLines">
					<SectionConnectChangeTime selectCon={selectCon}/>
				</section>
			</div>
		</div>
	)
}
