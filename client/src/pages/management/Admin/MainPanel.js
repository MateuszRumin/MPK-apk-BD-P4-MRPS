import { NavLink } from 'react-router-dom'
import './ComponentsMainPanel/css/MainPanel.css'

export const MainPanel = () => {
	return (
		<div className="containerMainPanel">
			<section>
				<header>
					<p className="logo">
						<NavLink className="logoNavLink" to="/admin">
							<i className="fa-solid fa-bus"></i>
						</NavLink>
					</p>

					<nav className="navigation">
						{/* <NavLink to="/admin/lines">Ulice</NavLink>
						<NavLink to="/admin/users">Uzytkownicy</NavLink>
						<NavLink to="/admin/departure">Odjazy</NavLink>
						<NavLink to="/admin/connections">Połączenia</NavLink>
						<NavLink to="/admin/mainlines">Linie i trasy</NavLink> */}
						<NavLink to="/admin/logout">Wyloguj</NavLink>
						{/* to jest jakby link w przeglądarce to="/info" */}
					</nav>
				</header>
			</section>

			<section className="mainsectionAdmin">
				{/* Tutaj moża wżuciż komponenty */}
				{/* <AddWorker /> */}
				{/* <AddLine /> */}

				<nav className="">
					<NavLink to="/admin/lines">
						<div className="square-line normal-line displayblocknow">Ulice</div>
					</NavLink>

					<NavLink to="/admin/users">
						<div className="square-line normal-line displayblocknow">Uzytkownicy</div>
					</NavLink>

					<NavLink to="/admin/departure">
						<div className="square-line normal-line displayblocknow">Odjazy</div>
					</NavLink>

					<NavLink to="/admin/connections">
						<div className="square-line normal-line displayblocknow">Połączenia</div>
					</NavLink>

					<NavLink to="/admin/mainlines">
						<div className="square-line normal-line displayblocknow">Linie i trasy</div>
					</NavLink>
				</nav>
			</section>
		</div>
	)
}
