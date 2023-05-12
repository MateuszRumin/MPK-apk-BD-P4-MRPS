import React, { Component } from 'react'
import './css/SectionUsersRoleInAccount.css'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import pl from 'yup-locale-pl'
Yup.setLocale(pl)

class SectionUsersRoleInAccount extends Component {
	render() {
		const initialValues = {
			role_id: '',
		}
		const validationSchema = Yup.object().shape({
			role_id: Yup.string().required('Nie może być pusty'),
		})

		const onSubmit = data => {
			data.id_usr_emp = this.props.idAccountRole
			axios.post('http://localhost:3001/auth/login/', data).then(response => {
				console.log(response.data)
			})
		}

		return (
			<section className="sectionUserRoleInAccount">
				<section className="formChangeDataRoleInAccount">
					<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
						<Form>
							<div className="headerRoleInAccount">
								<span>
									{/* Jest to przesyłane z AccountRole */}
									Rola: {this.props.rolesUsers}
									<ErrorMessage className="errorMessage" component="span" name="role_id" />
								</span>
								<span>id: {this.props.idAccountRole}</span>
							</div>

							<section className="formContentDataRoleInAccount">
								<Field className="inputFormDataRoleInAccount" as="select" name="role_id" id="role">
									<option value="">----</option>
									<option value="1">Admin</option>
									<option value="2">Manager</option>
									<option value="3">Worker</option>
								</Field>

								<br />

								<button className="buttonFormSubmitChangeRoleInAccount">Zmień</button>
							</section>
						</Form>
					</Formik>
				</section>
			</section>
		)
	}
}

export default SectionUsersRoleInAccount
