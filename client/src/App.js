
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home} from './pages/Home'
import { Info } from './pages/Info'
import { Kontakt } from './pages/Kontakt'
import {test} from './pages/Login'


function App() {
	return(
    <div className='App'>

    <Router>
      
  
        <Routes>
            
            <Route path="/" element={<Home />}/>
            <Route path="/info" element={<Info />}/>
            <Route path="/kontakt" element={<Kontakt />}/>
            <Route path="/home" element={<Home />} action={test}/>
            <Route path="/*" element={<h1>Nie ma takiej strony</h1>}/>
          
        </Routes>
    </Router>

   




    </div>
    )
}
export default App
