import React, { Component } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './css/SectionMainLinesAddNewLine.css'
import * as Yup from 'yup'

class SectionMainLinesAddNewLine extends Component {
	constructor(props) {
		super(props)

		this.state = {
			initialValues: {
				num_line: '',
				stop_from: '',
				stop_to: '',
			},
		}
	}

	render() {
		const { initialValues } = this.state

		const validationSchema = Yup.object().shape({
			num_line: Yup.string().required('Pole wymagane'),
			stop_from: Yup.string().required('Pole wymagane'),
			stop_to: Yup.string().required('Pole wymagane'),
		})

		const onSubmit = data => {
			axios.post('http://localhost:3001/test', data).then(response => {
				console.log(response.data)
			})
		}

		return (
			<section className="addlineNew">
				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					<Form>
						<section className="">
							<label htmlFor="od">
								<p>
									<b>Dodaj linie:</b>
								</p>
							</label>

							<p>
								Linia:
								<ErrorMessage className="errorMessage" component="span" name="num_line" />
							</p>

							<Field type="text" id="od" name="num_line" placeholder="numer lini" />
							<p>
								Od:
								<ErrorMessage className="errorMessage" component="span" name="stop_from" />
							</p>
							<Field type="text" id="od" name="stop_from" placeholder="przystanek od" />

							<br />
							<p>
								Do:
								<ErrorMessage className="errorMessage" component="span" name="stop_to" />
							</p>
							<Field type="text" id="od" name="stop_to" placeholder="przystanek do" />

							<br />
							<br />

							<button type="submit">Zatwierdź</button>
						</section>
					</Form>
				</Formik>
			</section>
		)
	}
}
export default SectionMainLinesAddNewLine
