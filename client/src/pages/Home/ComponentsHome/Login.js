
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import pl from 'yup-locale-pl'
import { useNavigate } from 'react-router-dom'
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
		username: Yup.string().min(2, 'Login zbyt krótki').required('Podaj nazwę użytkownika!'),
		password: Yup.string().min(2, 'Nie przyjmuje tak krotkich hasel').required('Podaj hasło!'),
	})

	const navigate = useNavigate();
	const [sessionCreated, setSessionCreated] = useState(false);
	const [username, setUsername] = useState('');
	const [role, setRole] = useState('');
	const [login, setLogin] = useState(false);
  
	const onSubmit = data => {
	  axios
		.post('http://localhost:3001/auth/login', data)
		.then(response => {
		  console.log(response.data);
  
		  response.data = 'ok'

		  if (response.data === 'ok') {
			// Pobieranie username i roli z odpowiedzi serwera
			const { username, role, login } = response.data;
			
			
  
			// Zapisywanie username i roli do sesji
			sessionStorage.setItem('username', username);
			sessionStorage.setItem('role', role);
			sessionStorage.setItem('login', true);

  
			// Ustawianie stanu sesji jako utworzonej
			setSessionCreated(true);
			
			send();
		  } else {
			console.log('Błąd odpowiedzi z serwera.');
			sessionStorage.setItem('login', false);
		  }
		})
		.catch(error => {
		  console.log(error);
		});
		
		
	};
  
	const send = () => {
		navigate('/admin');
		console.log('przezucono');

		 setTimeout(() => {
    window.location.reload();
  }, 500);
	}
  
	// Warunek sprawdzający, czy użytkownik jest zalogowany
	const isUserLoggedIn = sessionCreated;

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
