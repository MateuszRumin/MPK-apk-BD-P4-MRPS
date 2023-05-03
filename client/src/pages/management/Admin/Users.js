import { NavLink } from 'react-router-dom'
import { AddWorker } from './ModifyAdmin/AddUsers'
import { AddLine } from './ModifyAdmin/AddLine'
import DispUser from './DisUserList/DispUser'
import './css/Users.css'
export const Users = () => {
	return (
		<div className='containerUsers'>
			<section>
				<header>
					<p className="logo">
						<i className="fa-solid fa-bus"></i>
					</p>

					<nav className="navigation">
						<NavLink to="/admin">Main panel</NavLink>

						<NavLink to="/admin/lines">Linie</NavLink>
						<NavLink to="/admin/logout">Wyloguj</NavLink>
						{/* to jest jakby link w przeglądarce to="/info" */}
					</nav>
				</header>
			</section>

			<section className="add-Worker">
				<AddWorker />
				<DispUser />
			</section>
		</div>
	)
}
