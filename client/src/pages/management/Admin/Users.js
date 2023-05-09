import { NavLink } from 'react-router-dom'
import { SectionUsersEditionUsers } from './ComponentsUsers/SectionUsersEditionUsers'
import { AddLine } from './ModifyAdmin/AddLine'
import DispUser from './DisUserList/DispUser'
import SectionUsersDisplayUsers from './ComponentsUsers/SectionUsersDisplayUsers'
import '../Admin/ComponentsUsers/css/Users.css'
import SectionUsersAccountRole from './ComponentsUsers/SectionUsersAccountRole'
import SectionUsersAddUsers from './ComponentsUsers/SectionUsersAddUsers'
import SectionUsersAddAccount from './ComponentsUsers/SectionUsersAddAccount'
import React, { useState } from 'react'

export const Users = (props) => {
	const [showComponent1, setShowComponent1] = useState(true)
	const [showComponent2, setShowComponent2] = useState(true)
	const [showComponent3, setShowComponent3] = useState(false)
	const [showComponent4, setShowComponent4] = useState(false)
	
	const [valueUsers,setValueUsers] = useState([])

	

	const methodswitchSection = () => {
		setShowComponent1(!showComponent1)
		setShowComponent2(!showComponent2)
		setShowComponent3(!showComponent3)
		setShowComponent4(!showComponent4)

		console.log('dziala switch')
	}

	function handleRowClick(valueUsers) {
		setValueUsers(valueUsers);
		console.log("1111111111111");
		console.log(valueUsers.first_name);
		console.log("2222222222222");
		// this.props.dataUsers(valueUsers);
		// this.props.headerTitle(valueUsers);

	  }
	
	return (
		<div>
			
			<section>
				<header className="navbarUsers">
					<p className="logoUsers">
						<i className="fa-solid fa-bus"></i>
					</p>

					<nav className="navigationUsers">
						<NavLink to="/admin">Main panel</NavLink>

						<NavLink to="/admin/lines">Linie</NavLink>
						<NavLink to="/admin/logout">Wyloguj</NavLink>
						{/* to jest jakby link w przeglądarce to="/info" */}
					</nav>
				</header>
			</section>

			{/* <DispUser /> */}

			<div className="containerUsers">
				{/* Lewa strona */}
				<section className="leftSectionUsers">
					<SectionUsersDisplayUsers onChange={handleRowClick}/>
				</section>

				{/* Prawa strona */}
				<section className="rightSectionUsers">
					{/* Prawa strona po lewej */}

					{/* Prawa strona po prawej */}

					{/* <SectionUsersEditionUsers /> */}
					{/* <SectionUsersAccountRole /> */}
					{showComponent1 && <SectionUsersEditionUsers headerTitle={valueUsers}/>}
					{showComponent2 && <SectionUsersAccountRole switchSectionUsers={methodswitchSection} />}

					{showComponent3 && <SectionUsersAddUsers switchSectionUsers={methodswitchSection}  />}
					{showComponent4 && <SectionUsersAddAccount />}

					{/* <SectionUsersAddUsers /> */}
					{/* <SectionUsersAddAccount /> */}
				
				</section>
			</div>
		</div>
	)
}
