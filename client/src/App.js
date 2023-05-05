import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

import { Home } from './pages/Home/ComponentsHome/Home'
import { Info } from './pages/Home/ComponentsHome/Info'
import { Kontakt } from './pages/Home/ComponentsHome/Kontakt'
import DispUser from './pages/management/Admin/DisUserList/DispUser'
import { MainPanel } from './pages/management/Admin/MainPanel'
import { Users } from './pages/management/Admin/Users'
import { Lines } from './pages/management/Admin/Lines'
import { Logout } from './pages/management/Admin/Logout'
function App() {
	useEffect(() => {
		//tutaj bedzie cos do sesji
	}, [])
	return (
		<div className="App">
			<Router>
				<Routes>
					{/* Klient */}
					<Route path="/" element={<Home />} />
					<Route path="/info" element={<Info />} />
					<Route path="/kontakt" element={<Kontakt />} />

					{/* Admin */}
					<Route path="/admin/" element={<MainPanel />} />
					<Route path="/admin/disp/" element={<DispUser />} />
					<Route path="/admin/lines/" element={<Lines />} />
					<Route path="/admin/users/" element={<Users />} />
					<Route path="/admin/logout" element={<Logout />} />

					{/* Pozostałe */}
					<Route path="/*" element={<h1>Nie ma takiej strony</h1>} />
				</Routes>
			</Router>
		</div>
	)
}
export default App
