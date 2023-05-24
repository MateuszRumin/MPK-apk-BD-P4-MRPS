import React from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import pl from 'yup-locale-pl'
import '../css/Login.css'
Yup.setLocale(pl)

const Login = () => {
	const displayLogin = () => {
		const wrapper = document.querySelector('.wrapper')

		wrapper.classList.toggle('active-popup')
	}

	const initialValues = {
		username: '',
		password: '',
	}
	const validationSchema = Yup.object().shape({
		username: Yup.string().min(4, 'Login zbyt krótki').required('Podaj nazwę użytkownika!'),
		password: Yup.string().min(5, 'Nie przyjmuje tak krotkich hasel').required('Podaj hasło!'),
	})

	const onSubmit = data => {
		axios.post('http://localhost:3001/auth/login', data).then(response => {
			console.log(response.data)
		})
	}

	return (
		// active-popup
		<div className="wrapper">
			<span className="icon-close">
				<i className="close fa-solid fa-xmark" onClick={displayLogin}></i>
			</span>

			<div className="form-box login">
				<h2>Logowanie</h2>
				{/* initialValues={} onSubmit={} validationSchema={} */}
				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					<Form>
						<div className="input-box">
							<span className="icon">
								<i className="fa-solid fa-user"></i>
							</span>
							<Field id="login" name="username" />

							<label htmlFor="login">Login:</label>
						</div>
						<ErrorMessage name="username" component="span" />
						<div className="input-box">
							<span className="icon">
								<i className="fa-solid fa-key"></i>
							</span>
							<Field id="password" type="password" name="password" />
							<label htmlFor="password">Hasło:</label>
						</div>
						<ErrorMessage name="password" component="span" />
						<div className="remember-forgot">
							<label htmlFor="remember-me">
								<input id="remember-me" type="checkbox" />
								Zapamiętaj mnie
							</label>
						</div>

						<button className="btn">Zaloguj</button>
					</Form>
				</Formik>
			</div>
		</div>
	)
}

export default Login
