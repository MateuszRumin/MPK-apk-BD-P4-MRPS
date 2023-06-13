import { NavLink } from 'react-router-dom'
import { SectionUsersEditionUsers } from './ComponentsUsers/SectionUsersEditionUsers'
// import { AddLine } from './ModifyAdmin/AddLine'
// import DispUser from './DisUserList/DispUser'
import SectionUsersDisplayUsers from './ComponentsUsers/SectionUsersDisplayUsers'
import '../Admin/ComponentsUsers/css/Users.css'
import SectionUsersAccountRole from './ComponentsUsers/SectionUsersAccountRole'
import SectionUsersAddUsers from './ComponentsUsers/SectionUsersAddUsers'
import SectionUsersAddAccount from './ComponentsUsers/SectionUsersAddAccount'
import News from './News'
import React, { useState } from 'react'

export const Users = props => {
	const [showComponent1, setShowComponent1] = useState(true)
	const [showComponent2, setShowComponent2] = useState(true)
	const [showComponent3, setShowComponent3] = useState(false)
	const [showComponent4, setShowComponent4] = useState(false)

	const [valueUsers, setValueUsers] = useState([])
	let [rolesUsers, setRolesUsers] = useState([])

	let [userEmailAccount, setuserEmailAccount] = useState([])
	let [idAccountUser, setIdAccountUser] = useState([])
	let [idAccountRole, setIdAccountRole] = useState([])

	const methodswitchSection = () => {
		setShowComponent1(!showComponent1)
		setShowComponent2(!showComponent2)
		setShowComponent3(!showComponent3)
		setShowComponent4(!showComponent4)

		console.log('Zmiana komponentów')
	}

	function handleRowClick(valueUsers) {
		if (valueUsers.Usr_emp.id_user) console.log('istnieje id_user')
		else valueUsers.Usr_emp.id_user = 'Brak'

		if (valueUsers.Usr_emp.User) console.log('istnieje konto')
		else
			valueUsers.Usr_emp.User = {
				username: 'Brak',
				email: 'Brak',
			}

		// nazwa roli
		rolesUsers = valueUsers.Usr_emp.Role

		// id konta użytownika
		idAccountUser = valueUsers.Usr_emp
		// nazwa oraz email powiązany z użytkownikiem
		userEmailAccount = valueUsers.Usr_emp.User

		// alert(userEmailAccount.username);

		// id roli którą ma dany użytkownik
		idAccountRole = valueUsers.Usr_emp.id_usr_emp

		setRolesUsers(rolesUsers)
		setIdAccountUser(idAccountUser)
		setuserEmailAccount(userEmailAccount)
		setIdAccountRole(idAccountRole)

		// console.log(idAccountUser);
		console.log(idAccountUser)

		// console.log(userEmailAccount);
		setValueUsers(valueUsers)

		console.log('Przerzucono dane do komponentu SectionUsersEditionUsers')
	}

	return (
		<div>
			<section>
				<header className="navbarUsers">
				<NavLink className="logo" to="/admin">
							<i className="fa-solid fa-bus"></i>
				</NavLink>

					<nav className="navigationUsers">
						<NavLink to="/admin">Main panel</NavLink>
						<NavLink to="/admin/connections">Połączenia</NavLink>
						<NavLink to="/admin/departure">Odjazy</NavLink>
						<NavLink to="/admin/lines">Ulice</NavLink>
						<NavLink to="/admin/mainlines">Linie i trasy</NavLink>
						<NavLink to="/admin/users">Użytkownicy</NavLink>
						<NavLink to="/admin/logout">Wyloguj</NavLink>
						{/* to jest jakby link w przeglądarce to="/info" */}
					</nav>
				</header>
			</section>

			{/* <DispUser /> */}

			<div className="containerUsers">
				{/* Lewa strona */}
				<section className="leftSectionUsers">
					<SectionUsersDisplayUsers onChange={handleRowClick} />
				</section>

				{/* Prawa strona */}
				<section className="rightSectionUsers">
					{/* Prawa strona po lewej */}

					{/* Prawa strona po prawej */}

					{/* <SectionUsersEditionUsers /> */}
					{/* <SectionUsersAccountRole /> */}
					{showComponent1 && <SectionUsersEditionUsers headerTitle={valueUsers} rolesUsers={rolesUsers} />}

					{showComponent2 && (
						<SectionUsersAccountRole
							switchSectionUsers={methodswitchSection}
							rolesUsers={rolesUsers}
							userEmailAccount={userEmailAccount}
							idAccountUser={idAccountUser}
							idAccountRole={idAccountRole}
						/>
					)}

					{showComponent3 && <SectionUsersAddUsers switchSectionUsers={methodswitchSection} />}
					{showComponent4 && <SectionUsersAddAccount />}

					{/* <SectionUsersAddUsers /> */}
					{/* <SectionUsersAddAccount /> */}
				</section>

				<News />
			</div>
		</div>
	)
}
