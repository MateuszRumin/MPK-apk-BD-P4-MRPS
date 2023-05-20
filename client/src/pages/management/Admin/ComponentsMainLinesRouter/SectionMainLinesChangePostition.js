import React, { Component } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


class SectionMainLinesChangePostition extends Component {
	constructor(props) {
		super(props)

		this.state = {
			initialValues: {
				Time_one_two: '',
				Time_two_one: '',
				nameOne: '',
				nameTwo: '',
				id_stopOne: '',
				id_stopTwo: '',
			},
		}
	}

	render() {
		const { initialValues } = this.state

		const validationSchema = Yup.object().shape({
			Time_one_two: Yup.string().required('Pole wymagane'),
			Time_two_one: Yup.string().required('Pole wymagane'),
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
			initialValues.id_stopOne = props.id_stop
			initialValues.nameOne = props.name

			// console.log(initialValues.id_stop);
		}
		function onObjectChange2(props) {
			// initialValues.Time_one_two = props.Time_one_two
			// initialValues.Time_two_one = props.Time_two_one
			// initialValues.stopOne = props.stopOne

			initialValues.id_stopTwo = props.id_stop
			initialValues.nameTwo = props.name

			// console.log(initialValues.id_stop);
		}

		return (
			<section className="sectionConnectAddNewCon">
				{/* {this.props.selectLine.street_id && this.getStreetsData (this.props.selectLine)} */}

				{/* {this.props.selectStop.id_stop && onObjectChange(this.props.selectStop)} */}
				{/* {this.props.freeSelectStop.id_stop && onObjectChange2(this.props.freeSelectStop)} */}

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
								Przystanek: 
								<br />
								Nazwa:
								<br />
							</label>
							Czas od przystanek 1 do 2<br />
							<Field type="text" id="od" name="Time_one_two" />
							{/* className="inputFormDataAccount" */}
							<br />
							<ErrorMessage className="errorMessage" component="span" name="Time_one_two" />
							<label htmlFor="do">
								<br />
								Przystanek:  <br />
								nazwa: 
								<br />
							</label>
							Czas od przystanek 2 do 1:
							<br />
							<ErrorMessage className="errorMessage" component="span" name="Time_two_one" /> <br />
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
export default SectionMainLinesChangePostition
