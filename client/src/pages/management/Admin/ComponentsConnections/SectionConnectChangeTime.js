import React, { Component } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './css/SectionConnectChangeTime.css'

class SectionConnectChangeTime extends Component {
	constructor(props) {
		super(props)

		this.state = {
			initialValues: {
				first_name: '',
				inne: '',
				
			},
		}
	}

	render() {
		const { initialValues } = this.state
		
		const validationSchema = Yup.object().shape({
			username: Yup.string(),
			inne: Yup.string(),
		})

		const onSubmit = data => {
			axios.post('http://localhost:3001/test', data).then(response => {
				console.log(response.data)
			})
		}
		function onObjectChange(props) {
			initialValues.inne = props.name
			initialValues.username = props.street_id
			
		}
		return (
			<section className="sectionConnectChangeTime">
				{/* {this.props.selectLine.street_id && this.getStreetsData (this.props.selectLine)} */}
				{this.props.selectCon.name && onObjectChange(this.props.selectCon)}

			



				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					<Form>
						<div className="headerRoleInAccount">
							<span>
								Dodaj przystanek:
								<ErrorMessage className="errorMessage" component="span" name="id_role" />
							</span>
						</div>

						<section className="formContentDataRoleInAccount">
							<label htmlFor="imie">
								Zmień czas dla połączenia: <br /> (przystanek od) do (przystanek do):{' '}
								<ErrorMessage className="errorMessage" component="span" name="username" />
							</label>
							<Field type="text" id="imie" name="username" />
							{/* className="inputFormDataAccount" */}
							<br />
							<label htmlFor="inne">
								<br />
								Zmień czas dla połączenie do : <br /> (przystanek do) do (przystanek od):{' '}
								<ErrorMessage className="errorMessage" component="span" name="inne" />
							</label>
							<Field type="text" id="inne" name="inne" />
							<br />

							<button className="buttonFormSubmitChangeTime">Zatwierdź</button>
						</section>
					</Form>
				</Formik>
			</section>
		)
	}
}
export default SectionConnectChangeTime
