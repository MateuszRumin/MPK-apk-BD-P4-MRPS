import React from 'react'

const Login = () => {
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

				<form method="post" action="localhost:3001/auth/login">
					<div className="input-box">
						<span className="icon">
							<i className="fa-solid fa-user"></i>
						</span>
						<input type="text" id="login" name="username" required />

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

					<button className="btn">Zaloguj</button>
				</form>
			</div>
		</div>
	)
}

export default Login
