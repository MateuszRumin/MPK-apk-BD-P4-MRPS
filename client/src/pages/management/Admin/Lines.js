import { NavLink } from 'react-router-dom'
import SectionLinesDisplayStops from './ComponentsLines/SectionLinesDisplayStops'
import SectionLinesDisplayStreets from './ComponentsLines/SectionLinesDisplayStreets'
import SectionLinesModStreets from './ComponentsLines/SectionLinesModStreets'
import '../Admin/ComponentsLines/css/Lines.css'
export const Lines = () => {
	return (
		<div>
			<section>
				<header className="navbarLines">
					<p className="logoLines">
						<i className="fa-solid fa-bus"></i>
					</p>

					<nav className="navigationLines">
						<NavLink to="/admin">Main panel</NavLink>
						<NavLink to="/admin/users">Uzytkownicy</NavLink>
						<NavLink to="/admin/logout">Wyloguj</NavLink>
					</nav>
				</header>
			</section>

			<div className="containerLines">
				{/* LEWA SEKCJA */}
				<section className="leftSectionLines">
					<SectionLinesDisplayStreets />
					<SectionLinesDisplayStops />
				</section>

				{/* PRAWA SEKCJA */}
				<section className="rightSectionLines">
				<SectionLinesModStreets />

				</section>
			</div>
		</div>
	)
}
