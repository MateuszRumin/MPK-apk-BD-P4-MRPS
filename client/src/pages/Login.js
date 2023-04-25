import React from 'react'
import axios from "axios"
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import pl from 'yup-locale-pl'

Yup.setLocale(pl)

const Login = () => {
	const displayLogin = () => {
		const wrapper = document.querySelector('.wrapper')

		wrapper.classList.toggle('active-popup')
	}

	const initialValues = {
		username:"",
		password:"",
	}
	const validationSchema = Yup.object().shape({
		username:Yup.string().min(4).required("Podaj nazwę użytkownika!"),
		password:Yup.string().min(5).required("Podaj hasło!"),
	})


	const onSubmit= (data) => {
		axios.post("http://localhost:3001/auth/login", data).then((response) =>{
			console.log("wysłano");
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
				<Form >
					<div className="input-box">
						<span className="icon">
							<i className="fa-solid fa-user"></i>
						</span>
						<Field type="text" id="login" name="username" />

						<label for="login">Login:</label>
					</div>
					<ErrorMessage name="username" component="span"/>
					<div className="input-box">
						<span className="icon">
							<i className="fa-solid fa-key"></i>
						</span>
						<Field id="password" type="password" name="password"/>
						<label for="password">Hasło:</label>
					</div>
					<ErrorMessage name="password" component="span"/>
					<div className="remember-forgot">
						<label for="remember-me">
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
