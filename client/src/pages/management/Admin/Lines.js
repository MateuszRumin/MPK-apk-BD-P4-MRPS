import { NavLink } from 'react-router-dom'
import { AddLine } from './ModifyAdmin/AddLine'
import DispLines from './DisLinesList/DispLines'
import "./css/Lines.css"
export const Lines = () => {
	return (
		<div className='containerLines'>
			<section>
				<header>
					<p className="logo">
						<i className="fa-solid fa-bus"></i>
					</p>

					<nav className="navigation">
						<NavLink to="/admin">Main panel</NavLink>

						<NavLink to="/admin/users">Uzytkownicy</NavLink>
						<NavLink to="/admin/logout">Wyloguj</NavLink>
						{/* to jest jakby link w przeglądarce to="/info" */}
					</nav>
				</header>
			</section>

			<section>
				<AddLine />
			</section>

			 <div className="displayTableLines">
				<DispLines />
			</div> 
		</div>
	)
}
