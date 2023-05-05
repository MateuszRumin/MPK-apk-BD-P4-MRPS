import { NavLink } from 'react-router-dom'
import { SectionUsersEditionUsers } from './ComponentsUsers/SectionUsersEditionUsers'
import { AddLine } from './ModifyAdmin/AddLine'
import DispUser from './DisUserList/DispUser'
import SectionUsersDisplayUsers from './ComponentsUsers/SectionUsersDisplayUsers'
import '../Admin/ComponentsUsers/css/Users.css'
import SectionUsersAccountRole from './ComponentsUsers/SectionUsersAccountRole'
export const Users = () => {
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
				<section className='leftSectionUsers'>
					<SectionUsersDisplayUsers />
				</section>

				{/* Prawa strona */}
				<section className='rightSectionUsers'>
					{/* Prawa strona po lewej */}


					
					<SectionUsersEditionUsers />

					{/* Prawa strona po prawej */}
					<SectionUsersAccountRole />
					
				</section>
			</div>
		</div>
	)
}
