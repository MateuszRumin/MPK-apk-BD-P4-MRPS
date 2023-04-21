import { NavLink } from 'react-router-dom'
import Login from './Login'
import "./Navbar.css"
export const Navbar = () => {
	

	const displayLogin = () => {
		
		const wrapper = document.querySelector('.wrapper')
	

		wrapper.classList.toggle('active-popup')
		
	}

	return (
		<div>
			
			<header>
				<p className="logo">
					<i className="fa-solid fa-bus"></i>
				</p>
				<nav className="navigation">
					<NavLink to="/" >Home</NavLink>
					<NavLink to="/info">Info</NavLink>
					<NavLink to="/kontakt">Kontakt</NavLink>
					
					<button className="btnLogin-popup"  onClick={displayLogin}>
						Zaloguj
					</button>
				</nav>
			</header>
			<Login />
		</div>
	)
}


