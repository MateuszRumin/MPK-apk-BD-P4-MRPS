import HomeContent from './HomeContent'
import { Navbar } from './Navbar'
import Login from './Login'
export const Home = () => {
	return (
		<div>
			<Navbar /> 
			{/* To jest nawigacja */}
			

           <HomeContent />
		   {/* To jest główny kontent home */}
        
		</div>

	)
}
