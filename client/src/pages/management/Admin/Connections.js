import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import SectionConnectChangeTime from './ComponentsConnections/SectionConnectChangeTime'
import './ComponentsConnections/css/Connections.css'
import SectionConnectDisplayConnects from './ComponentsConnections/SectionConnectDisplayConnects'
import SectionConnectDisplayConnects2 from './ComponentsConnections/SectionConnectDisplayConnects2'
import SectionConnectSetNewConFrom from './ComponentsConnections/SectionConnectSetNewConFrom'
import SectionConnectSetNewConTo from './ComponentsConnections/SectionConnectSetNewConTo'
import SectionConnectAddNewCon from './ComponentsConnections/SectionConnectAddNewCon'

export const Connections = () => {
	let [selectCon, setSelectLine] = useState([])
	let [selectStop, setSelectStop] = useState([])
	let [freeSelectStop, setfreeSelectStop] = useState([])

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
						<NavLink to="/admin/mainlines">Linie i trasy</NavLink>
						<NavLink to="/admin/logout">Wyloguj</NavLink>
						
					</nav>
				</header>
			</section>

			<div className="containerLines">
			
				<section className="leftSectionLines">
					
					<SectionConnectDisplayConnects selectConnect={selectConnect} />
					<SectionConnectDisplayConnects2 selectConnect={selectConnect} />
					{/* <SectionConnectChangeTime selectCon={selectCon} /> */}
				</section>

			
				<section className="rightSectionLines">
					<section className='rightSectionNewCon'>
						{/* <SectionConnectSetNewConFrom setStop={setStop} /> */}
						{/* <SectionConnectSetNewConTo selectStop={selectStop} freeStopCon={FunfreeStopCon}  /> */}
					</section>
					{/* <SectionConnectAddNewCon selectStop={selectStop} freeSelectStop={freeSelectStop} /> */}
				</section>
			</div>
		</div>
	)
}
