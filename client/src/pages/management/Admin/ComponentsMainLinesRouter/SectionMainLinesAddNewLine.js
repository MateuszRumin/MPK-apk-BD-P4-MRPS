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
			axios.post('http://localhost:3001/insert/lines', data).then(response => {
				console.log(response.data)
			})
		}

		return (
			<section className="addlineNew">
				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					<Form>
						<section className="">
							<p>
								<b>Dodaj linie:</b>
							</p>

							<p>
								Linia:
								<ErrorMessage className="errorMessage" component="span" name="num_line" />
							</p>

							<Field type="text" name="num_line" placeholder="numer lini" />
							
							<br />
							<br />
							

							<button type="submit" className='buttonTypeSubmitAddAlias'>Zatwierdź</button>
						</section>
					</Form>
				</Formik>
			</section>
		)
	}
}
export default SectionMainLinesAddNewLine
