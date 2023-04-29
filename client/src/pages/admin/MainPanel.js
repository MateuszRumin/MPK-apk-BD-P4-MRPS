import { NavLink } from 'react-router-dom'
import { AddWorker } from './AddWorker'
import "./MainPanel.css"
import { AddLine } from './AddLine'
export const MainPanel = () => {

	return (
		<div>
			<section>
				<header>
					<p className="logo">
						<i className="fa-solid fa-bus"></i>
					</p>
					<nav className="navigation">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/info">Info</NavLink>
						<NavLink to="/kontakt">Kontakt</NavLink>
					</nav>
				</header>
			</section>

			<section className="add-Worker">
				<AddWorker />
                <AddLine />
			</section>
		</div>
	)
}
