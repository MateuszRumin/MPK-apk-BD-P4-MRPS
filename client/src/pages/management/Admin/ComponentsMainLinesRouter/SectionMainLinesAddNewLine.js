import React, { Component } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

class SectionMainLinesAddNewLine extends Component {
	constructor(props) {
		super(props)

		this.state = {
			initialValues: {
				nameLine: '',
				fromStop: '',
				toStop: '',
			},
		}
	}

	render() {
		const { initialValues } = this.state

		const validationSchema = Yup.object().shape({
			nameLine: Yup.string().required('Pole wymagane'),
			fromStop: Yup.string().required('Pole wymagane'),
			toStop: Yup.string().required('Pole wymagane'),
		})

		const onSubmit = data => {
			axios.post('http://localhost:3001/test', data).then(response => {
				console.log(response.data)
			})
		}

		return (
			<section className="sectionConnectAddNewCon">
				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					<Form>
						<div className="headerAddNewCon">
							<span>
								Dodaj linie:
								<ErrorMessage className="errorMessage" component="span" name="id_role" />
							</span>
						</div>

						<section className="formContentAddNewCon">
							<label htmlFor="od"></label>
							Numer lini: <br />
							<Field type="text" id="od" name="nameLine" />
							<br />
							<ErrorMessage className="errorMessage" component="span" name="nameLine" />
							<label htmlFor="do"></label>
							Od:
							<ErrorMessage className="errorMessage" component="span" name="fromStop" /> <br />
							<Field type="text" id="do" name="fromStop" />
							<br />
							Do:
							<ErrorMessage className="errorMessage" component="span" name="toStop" /> <br />
							<Field type="text" id="do" name="toStop" />
							<br />
							<button className="buttonFormSubmitChangeAddNewCon">Zatwierdź</button>
						</section>
					</Form>
				</Formik>
			</section>
		)
	}
}
export default SectionMainLinesAddNewLine
