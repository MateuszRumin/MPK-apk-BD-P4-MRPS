import React, { Component } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import * as Yup from 'yup'

class SectionMainLinesAddAlias extends Component {
	constructor(props) {
		super(props)

		this.state = {
			initialValues: {
				num_line: '',
                description: '',	
			},
		}
	}

	render() {
		const { initialValues } = this.state

		const validationSchema = Yup.object().shape({
			num_line: Yup.string().required('Pole wymagane'),
			description: Yup.string().required('Pole wymagane'),
			
		})

		const onSubmit = data => {


       
           data.id_line = this.props.selectLine.id_line
			axios.post('http://localhost:3001/test', data).then(response => {
				console.log(response.data)
			})
		}

		return (
			<section className="addlineNew">
				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					<Form>
						<section className="">
							<p>
								<b>Dodaj alias dla lini:</b>
							</p>

							<p>
								Linia:{this.props.selectLine.id_line}
								<ErrorMessage className="errorMessage" component="span" name="num_line" />
							</p>

							<Field type="text" name="num_line" placeholder="Alias lini" />
							<Field type="text" name="description" placeholder="Opis" />
                            <ErrorMessage className="errorMessage" component="span" name="description" />
							
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
export default SectionMainLinesAddAlias
