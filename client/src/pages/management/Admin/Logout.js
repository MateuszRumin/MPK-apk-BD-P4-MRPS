// import { NavLink } from 'react-router-dom'
import { Home } from '../../Home/ComponentsHome/Home'
export const Logout = () => {


		// Usuwanie danych sesji
		sessionStorage.removeItem('username');
		sessionStorage.removeItem('role');
		sessionStorage.removeItem('login');
	
		// Ustawianie stanu sesji jako nieutworzonej
	
		console.log('Sesja została usunięta.');
	
	return (
		<div>
			<h1>Wylogowano</h1>
			<Home />
		</div>
	)
}
