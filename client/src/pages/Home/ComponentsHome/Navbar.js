import { NavLink } from 'react-router-dom'
import Login from './Login'
import '../css/Navbar.css'
export const Navbar = () => {
	const displayLogin = () => {
		const wrapper = document.querySelector('.wrapper')

		wrapper.classList.toggle('active-popup')
	}

	return (
		<div>
			<header>
				<p className="logo">
					<NavLink className="logoNavLink" to="/">
						<i className="fa-solid fa-bus decorationNone"></i>
					</NavLink>
				</p>
				<nav className="navigation">
					<NavLink to="/">Home</NavLink>

					<NavLink to="/info">Info</NavLink>
					<NavLink to="/kontakt">Kontakt</NavLink>

					<button className="btnLogin-popup" onClick={displayLogin}>
						Zaloguj
					</button>
				</nav>
			</header>
			<Login />
		</div>
	)
}
