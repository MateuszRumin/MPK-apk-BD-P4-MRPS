import { NavLink } from 'react-router-dom'
import './ComponentsMainPanel/css/MainPanel.css'

export const MainPanel = () => {
	return (
		<div className="containerMainPanel">
			<section>
				<header>
					<p className="logo">
						<i className="fa-solid fa-bus"></i>
					</p>

					<nav className="navigation">
						<NavLink to="/admin/lines">Linie</NavLink>

						<NavLink to="/admin/users">Uzytkownicy</NavLink>
						<NavLink to="/admin/connections">Połączenia</NavLink>
						<NavLink to="/admin/logout">Wyloguj</NavLink>
						{/* to jest jakby link w przeglądarce to="/info" */}
					</nav>
				</header>
			</section>

			<section>
				{/* Tutaj moża wżuciż komponenty */}
				{/* <AddWorker /> */}
				{/* <AddLine /> */}
				<h1>Główny panel być może tu będą kafelki</h1>
			</section>
		</div>
	)
}
