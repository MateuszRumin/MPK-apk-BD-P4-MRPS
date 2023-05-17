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
				id_time:''
			},
		}
	}

	render() {
		const { initialValues } = this.state

		const validationSchema = Yup.object().shape({
			Time_one_two: Yup.string().required('Pole nie może być puste'),
			Time_two_one: Yup.string().required('Pole nie może być puste'),
		})

		const onSubmit = data => {
			axios.post('http://localhost:3001/update/times', data).then(response => {
				console.log(response.data)
			})
		}
		function onObjectChange(props) {
			initialValues.Time_one_two = props.Time_one_two
			initialValues.Time_two_one = props.Time_two_one
			initialValues.stopOne = props.stopOne
			initialValues.stopTwo = props.stopTwo
			initialValues.id_time= props.id_time
		}
		return (
			<section className="sectionConnectChangeTime">
				{/* {this.props.selectLine.street_id && this.getStreetsData (this.props.selectLine)} */}
				{this.props.selectCon.Time_one_two && onObjectChange(this.props.selectCon)}
				{this.props.selectCon.Time_two_one && onObjectChange(this.props.selectCon)}

				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					<Form>
						<div className="headerConnectChangeTime">
							<span>
								Zmień czas dla połączenia:
								<ErrorMessage className="errorMessageChangeTime" component="span" name="id_role" />
							</span>
						</div>

						<section className='contentSectionChangeTime'>
							<label htmlFor="od">
								{initialValues.stopOne.name} ➡ {initialValues.stopTwo.name}
								<br />
							</label>
							<Field type="text" id="od" name="Time_one_two" />
							{/* className="inputFormDataAccount" */}
							<br />
							<ErrorMessage className="errorMessageChangeTime" component="span" name="Time_one_two" />
							<label htmlFor="do">
								<br /> {initialValues.stopTwo.name} ➡ {initialValues.stopOne.name} <br />
							</label>
							<Field type="text" id="do" name="Time_two_one" />
							<br />
								<ErrorMessage className="errorMessageChangeTime" component="span" name="Time_two_one" />
								
							<button className="buttonFormSubmitChangeTime">Zmień czas</button>
						</section>
					</Form>
				</Formik>
			</section>
		)
	}
}
export default SectionConnectChangeTime
