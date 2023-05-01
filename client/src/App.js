import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { Home } from './pages/Home'
import { Info } from './pages/Info'
import { Kontakt } from './pages/Kontakt'
import DispUser from './pages/admin/displaydata/DispUser'
import { MainPanel } from './pages/admin/MainPanel'
function App() {
	useEffect(() => {
		//tutaj bedzie cos do sesji
	}, [])
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/info" element={<Info />} />
					<Route path="/kontakt" element={<Kontakt />} />

					<Route path="/admin/" element={<MainPanel />} />
					<Route path="/admin/disp/" element={<DispUser />} />

					<Route path="/*" element={<h1>Nie ma takiej strony</h1>} />
				</Routes>
			</Router>
		</div>
	)
}
export default App
