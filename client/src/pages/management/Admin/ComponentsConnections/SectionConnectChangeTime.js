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
				Time_one_two: '',
				Time_two_one: '',
				stopOne: '',
				stopTwo: '',
			},
		}
	}

	render() {
		const { initialValues } = this.state

		const validationSchema = Yup.object().shape({
			Time_one_two: Yup.string(),
			Time_two_one: Yup.string(),
		})

		const onSubmit = data => {
			axios.post('http://localhost:3001/test', data).then(response => {
				console.log(response.data)
			})
		}
		function onObjectChange(props) {
			initialValues.Time_one_two = props.Time_one_two
			initialValues.Time_two_one = props.Time_two_one
			initialValues.stopOne = props.stopOne
			initialValues.stopTwo = props.stopTwo
		}
		return (
			<section className="sectionConnectChangeTime">
				{/* {this.props.selectLine.street_id && this.getStreetsData (this.props.selectLine)} */}
				{this.props.selectCon.Time_one_two && onObjectChange(this.props.selectCon)}
				{this.props.selectCon.Time_two_one && onObjectChange(this.props.selectCon)}

				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					<Form>
						<div className="headerRoleInAccount">
							<span>
								Dodaj przystanek:
								<ErrorMessage className="errorMessage" component="span" name="id_role" />
							</span>
						</div>

						<section className="formContentDataRoleInAccount">
							<label htmlFor="od">
								Zmień czas dla połączenia: <br /> (przystanek od) do (przystanek do):{' '}
								<ErrorMessage className="errorMessage" component="span" name="Time_one_two" />
							</label>
							<Field type="text" id="od" name="Time_one_two" />
							{/* className="inputFormDataAccount" */}
							<br />
							<label htmlFor="do">
								<br />
								Zmień czas dla połączenie do : <br /> (przystanek do) do (przystanek od):{' '}
								<ErrorMessage className="errorMessage" component="span" name="Time_two_one" />
							</label>
							<Field type="text" id="do" name="Time_two_one" />
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
