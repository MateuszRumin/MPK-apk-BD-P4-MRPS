import React, { Component } from 'react'
import './css/SectionUsersAccountRole.css'
import SectionUsersRoleInAccount from './SectionUsersRoleInAccount'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import pl from 'yup-locale-pl'

Yup.setLocale(pl)
class SectionUsersAccountRole extends Component {
	constructor(props) {
		super(props)

		this.state = {
			initialValues: {
				username: '',
				email: '',			
			},
		}
	}
	render() {
		const { initialValues } = this.state
		// const { test } = this.state

		const validationSchema = Yup.object().shape({
			username: Yup.string().min(5, 'Za krotki').max(20, 'Za dlugi').required('Nie może być pusty'),
			email: Yup.string().min(3, 'Za krotki').max(50).required('Nie może być pusty'),
		})

		const onSubmit = data => {
			data.id_user = this.props.idAccountUser
			axios.post('http://localhost:3001/update/user', data).then(response => {
				console.log(response.data)
			})
		}

		const switchSection = () => {
			this.props.switchSectionUsers()
		}

		//   function onObjectChange(props) {
		// 	// initialValues.first_name = props.first_name
		// 	console.log(props);
		// 	test.role = props

		// 	// console.log(test.role);

		// 	}

		function onObjectChange(props) {
			initialValues.username = props.username
			initialValues.email = props.email
		}
		return (
			// {this.props.headerTitle.first_name && onObjectChange(this.props.headerTitle)}
			<section className="sectionUsersAccountRole">
				{this.props.userEmailAccount.username && onObjectChange(this.props.userEmailAccount)}
				{this.props.userEmailAccount.email && onObjectChange(this.props.userEmailAccount)}

				<div className="headerSectionAccountRole">
					<p onClick={switchSection}>Dodaj nowe:</p>
				</div>
				<section className="formChangeDataAccount">
					<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
						<Form>
							<div className="headerAccount">
								<span>Konto: </span>
								<span>
									id: {this.props.idAccountUser}
									{/* do tego koponentu 
									nazwa oraz email wybranego użytkownika oraz jakie ma id konta
									*/}
									{/* {this.props.userEmailAccount.username} <br />
									{this.props.userEmailAccount.email}
									{this.props.idAccountUser} */}
									{/* to wysyłamy do dziecka SectionUsersRoleInAccount
									id roli które ma  użytkownik,
									nazwa roli które użytkownik posiada
									*/}
									{/* {this.props.idAccountRole}
									{this.props.rolesUsers.name} */}
								</span>
							</div>

							<section className="formContentDataAccount">
								<label htmlFor="imie">
									Nazwa użytkownika: <ErrorMessage className="errorMessage" component="span" name="username" />
								</label>
								<Field className="inputFormDataAccount" type="text" id="imie" name="username" />

								<br />
								<label htmlFor="nazwisko">
									Email: <ErrorMessage className="errorMessage" component="span" name="email" />
								</label>
								<Field className="inputFormDataAccount" type="text" id="nazwisko" name="email" />

								<br />
								<button className="buttonFormSubmitChangeAccount">Zmień</button>
								<span className="spanDeleteAccount">Usuń</span>
								{/* {this.props.idUsers} */}
							</section>
						</Form>
					</Formik>
				</section>

				<SectionUsersRoleInAccount rolesUsers={this.props.rolesUsers.name} idAccountRole={this.props.idAccountRole} />
			</section>
		)
	}
}

export default SectionUsersAccountRole
