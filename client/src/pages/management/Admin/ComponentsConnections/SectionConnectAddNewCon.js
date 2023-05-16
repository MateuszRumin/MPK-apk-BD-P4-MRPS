import React, { Component } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './css/SectionConnectAddNewCon.css'

class SectionConnectAddNewCon extends Component {
	constructor(props) {
		super(props)

		this.state = {
			initialValues: {
				Time_one_two: '',
				Time_two_one: '',
				name: '',
				id_stop: '',
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
			// initialValues.Time_one_two = props.Time_one_two
			// initialValues.Time_two_one = props.Time_two_one
			// initialValues.stopOne = props.stopOne
			initialValues.id_stop = props.id_stop
			initialValues.name = props.name

			// console.log(initialValues.id_stop);
		}
		return (
			<section className="sectionConnectAddNewCon">
				{/* {this.props.selectLine.street_id && this.getStreetsData (this.props.selectLine)} */}

				{this.props.selectStop.id_stop && onObjectChange(this.props.selectStop)}

				{/* {this.props.selectCon.Time_two_one && onObjectChange(this.props.selectCon)}  */}
				{/* {console.log(this.props.selectStop)} */}

				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					<Form>
						<div className="headerAddNewCon">
							<span>
								Dodaj połączenie:
								<ErrorMessage className="errorMessage" component="span" name="id_role" />
							</span>
						</div>

						<section className="formContentAddNewCon">
							<label htmlFor="od">
								Przystanek: 1 <br />
								Nazwa: {this.props.selectStop.name}
								<br />
								<ErrorMessage className="errorMessage" component="span" name="Time_one_two" />
							</label>
							Czas od przystanek 1 do 2<br />
							<Field type="text" id="od" name="Time_one_two" />
							{/* className="inputFormDataAccount" */}
							<br />
							<label htmlFor="do">
								<br />
								Przystanek: 2 <br />
								nazwa:
								<br />
								<ErrorMessage className="errorMessage" component="span" name="Time_two_one" />
							</label>
							Czas od przystanek 2 do 1:
							<br />
							<Field type="text" id="do" name="Time_two_one" />
							<br />
							<button className="buttonFormSubmitChangeAddNewCon">Dodaj połaczenie</button>
						</section>
					</Form>
				</Formik>
			</section>
		)
	}
}
export default SectionConnectAddNewCon
