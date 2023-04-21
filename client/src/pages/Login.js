import React from 'react'
import { Form } from "react-router-dom"
const Login = ()=>{
	
		const displayLogin = () => {
			const wrapper = document.querySelector('.wrapper')

			wrapper.classList.toggle('active-popup')
		}

		return (
			// active-popup
			<div className="wrapper">
				<span className="icon-close">
					<i className="close fa-solid fa-xmark" onClick={displayLogin}></i>
				</span>

				<div className="form-box login">
					<h2>Logowanie</h2>

					<Form method="post" action="/home" >
						<div className="input-box">
							<span className="icon">
								<i className="fa-solid fa-user"></i>
							</span>
							<input type="text" id="login" name="login" required />

							<label for="login">Login:</label>
						</div>
						<div className="input-box">
							<span className="icon">
								<i className="fa-solid fa-key"></i>
							</span>
							<input id="password" type="password" name="password" required />
							<label for="password">Hasło:</label>
						</div>
						<div className="remember-forgot">
							<label for="remember-me">
								<input id="remember-me" type="checkbox" />
								Zapamiętaj mnie
							</label>
						</div>

						<button  className="btn">
							Zaloguj
						</button>
					</Form>
				</div>
			</div>
		)
	}

export default Login


export const test = async () =>{

	alert("");
}