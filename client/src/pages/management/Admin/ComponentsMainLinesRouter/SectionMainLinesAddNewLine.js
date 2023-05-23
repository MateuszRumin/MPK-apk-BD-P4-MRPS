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
			},
		}
	}

	render() {
		const { initialValues } = this.state

		const validationSchema = Yup.object().shape({
			num_line: Yup.string().required('Pole wymagane'),
		})

		const onSubmit = data => {
			axios.post('http://localhost:3001/insert/line', data).then(response => {
				console.log(response.data)
			})
		}

		return (
			<section className="addlineNew">
				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					<Form>
						<span>
							<ErrorMessage className="errorMessage" component="span" name="id_role" />
						</span>

						<section className="">
							<label htmlFor="od">Dodaj linie:</label>

							<Field type="text" id="od" name="num_line" />

							<ErrorMessage className="errorMessage" component="span" name="num_line" />
							<button>Zatwierdź</button>
						</section>
					</Form>
				</Formik>
			</section>
		)
	}
}
export default SectionMainLinesAddNewLine
