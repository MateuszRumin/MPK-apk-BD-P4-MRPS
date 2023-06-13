import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Home } from './pages/Home/ComponentsHome/Home'
import { Info } from './pages/Home/ComponentsHome/Info'
import { Kontakt } from './pages/Home/ComponentsHome/Kontakt'
import Line from './pages/Home/ComponentsHome/Line'
import { MainPanel } from './pages/management/Admin/MainPanel'
import { Users } from './pages/management/Admin/Users'
import { Lines } from './pages/management/Admin/Lines'
import { Logout } from './pages/management/Admin/Logout'
import { Connections } from './pages/management/Admin/Connections'
import { MainLinesRoutes } from './pages/management/Admin/MainLinesRoutes'
import { Departure } from './pages/management/Admin/Departure'
function App() {
	const [isLoggedIn, setLoggedIn] = useState(false)
	
	
	useEffect(() => {
		let sessionData = sessionStorage.getItem('login')
		//tutaj bedzie cos do sesji
		
		if(sessionData === 'true'){
			

			setLoggedIn(sessionData)
			
		}
		
	},)
	
	

	
	
	return (
		<div className="App">
			<Router>
				<Routes>
					{/* Klient */}
					<Route path="/" element={<Home />} />
					<Route path="/info" element={<Info />} />
					<Route path="/kontakt" element={<Kontakt />} />

					{/* Admin */}

			  {/* Admin */}
			  {isLoggedIn && <Route path="/admin/*" element={<MainPanel />} />}
				{!isLoggedIn && <Route path="/*" element={<Home />} />}



		 

					{/* <Route path="/admin/" element={<MainPanel />} /> */}

					{isLoggedIn && <Route path="/admin/lines/" element={<Lines />} />}
					{isLoggedIn && <Route path="/admin/users/" element={<Users />} />}
					{isLoggedIn && <Route path="/admin/departure/" element={<Departure />} />}
					{isLoggedIn && <Route path="/admin/connections/" element={<Connections />} />}
					{isLoggedIn && <Route path="/admin/mainlines/" element={<MainLinesRoutes />} />}
					<Route path="/line/:id_line" element={<Line />} />

					<Route path="/admin/logout" element={<Logout />} />

					{/* Pozostałe */}
					<Route path="/*" element={<h1>Nie ma takiej strony</h1>} />
				</Routes>
			</Router>
			
		</div>
	)
}
export default App
