
import React from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../css/AddLine.css'
export class AddLine extends React.Component {
	render() {
		const initialValues = {
			street_id: '',
			name: '',
			operation: '',
		}
		const validationSchema = Yup.object().shape({
			street_id: Yup.string().min(3).max(20).required('test'),
			name: Yup.string().min(3).max(20),
		})

		const onSubmit = data => {
			axios.post('http://localhost:3001/auth/login/', data).then(response => {
				console.log(response.data)
			})
		}

		return (
			<div>
				<div></div>

				<div className="addWorker">
					{/* To jest nawigacja */}
					<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
						<Form>
							<h1>Dodawanie lini i usuwanie lini:</h1>

							<br />
							<label htmlFor="street_id">Id lini:</label>
							<Field type="text" id="street_id" name="street_id" />
							<br />
							<label htmlFor="name">nazwa lini:</label>
							<Field type="text" id="name" name="name" />
							<br />

							<Field as="select" name="operation">
								<option value="">----</option>
								<option value="add">Dodaj</option>
								<option value="del">Usun</option>
							</Field>

							<button>Wyslij</button>
						</Form>
					</Formik>
				</div>
			</div>
		)
	}
}
