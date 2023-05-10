import React, { Children } from 'react'
import axios from 'axios'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import pl from 'yup-locale-pl'
import { redirect } from 'react-router-dom'
import './css/SectionUsersEditionUsers.css'
Yup.setLocale(pl)
// let liczba = ""
// let iduser = document.getElementById("id_user");
// if(iduser.innerHTML != "") iduser.innerHTML=liczba;

export class SectionUsersEditionUsers extends React.Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 	  valueUsers: [],
	// 	};

	// 	this.fetchDataUsers = this.fetchDataUsers.bind(this);
	//   }

	//   fetchDataUsers(props) {
	// 	this.setState(props);
	//   }

	// state = {
	// 	first_name: 'sfdhsfghsdfh',
	// 	second_name: 'dfhdfhdfh',
	// 	addres: 'dfhdfhdf',
	// 	pesel: '435634563456',
	// 	tel_num: '346346',
	// 	id: '4',
	// }

	// valueUsers = () => {
	// 	// console.log(this.props.data);
	// 	alert("xdgh");
	// 	// this.setState({
	// 	// 	first_name: "dfghdh",

	// 	// })
	// }

	// handleChangeValues = (newValues) => {
	// 	this.setState({
	// 	  firstName: newValues.firstName,
	// 	  lastName: newValues.lastName,
	// 	  pesel: newValues.pesel,
	// 	  number: newValues.number,
	// 	});
	//   }

	render() {
		// const { first_name, second_name, addres, pesel, tel_num, id } = this.state
		const initialValues = {
			first_name: '',
			second_name: '',
			addres: '',
			pesel: '',
			tel_num: '',
		}
		const validationSchema = Yup.object().shape({
			first_name: Yup.string().min(5, 'Za krotki').max(20, 'Za dlugi').required('Nie może być pusty'),
			second_name: Yup.string().min(3, 'Za krotki').max(20).required('Nie może być pusty'),
			addres: Yup.string().min(3, 'Za krotki').max(20).required('Nie może być pusty'),
			pesel: Yup.number().typeError('To musi być numer').required('Nie może być pusty'),
			tel_num: Yup.number().typeError('To musi być numer').required('Nie może być pusty'),
		})

		const onSubmit = data => {
			let emp_no = document.getElementById('userid').innerText
			// console.log("cos")
			data.emp_no = emp_no
			axios.post('http://localhost:3001/auth/login/', data).then(response => {
				console.log(response.data)
			})
		}

		return (
			<section className="sectionUsersEditionUsers">
				<div className="headerSectionEditionUsers">
					<p>Edycja:</p>
				</div>
				{/* To jest nawigacja */}
				<section className="formChangeDataUsers">
					<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
						<Form>
							<div className="headerEditionUsers">
								<span>Rola: {this.props.rolesUsers.name}</span>
								
								<span id="userid">
									{this.props.headerTitle.emp_no}
									{/* {this.props.headerTitle.emp_no ? test(this.props.headerTitle.emp_no) : console.log('niema')} */}
								</span>
							</div>

							<section className="formContentDataUsers">
								<label htmlFor="imie">
									Imię: <span className="userdisplaydata">{this.props.headerTitle.first_name}</span>
									<ErrorMessage className="errorMessage" component="span" name="first_name" />
								</label>
								<Field
									className="inputFormDataUsers"
									type="text"
									id="imie"
									name="first_name"
									placeholder="Zmień dane"
								/>
								<br />
								<label htmlFor="nazwisko">
									Nazwisko: <span className="userdisplaydata">{this.props.headerTitle.second_name}</span>
									<ErrorMessage className="errorMessage" component="span" name="second_name" />
								</label>
								<Field
									className="inputFormDataUsers"
									type="text"
									id="nazwisko"
									name="second_name"
									placeholder="Zmień dane"
								/>
								<br />
								<label htmlFor="adres">
									Adres: <span className="userdisplaydata">{this.props.headerTitle.addres}</span>
									<ErrorMessage className="errorMessage" component="span" name="addres" />
								</label>
								<Field className="inputFormDataUsers" type="text" id="adres" name="addres" placeholder="Zmień dane" />
								<br />
								<label htmlFor="pesel">
									Pesel: <span className="userdisplaydata">{this.props.headerTitle.pesel}</span>
									<ErrorMessage className="errorMessage" component="span" name="pesel" />
								</label>
								<Field className="inputFormDataUsers" type="text" id="pesel" name="pesel" placeholder="Zmień dane" />
								<br />
								<label htmlFor="tel">
									Telefon: <span className="userdisplaydata">{this.props.headerTitle.tel_num}</span>
									<ErrorMessage className="errorMessage" component="span" name="tel_num" />
								</label>
								<Field className="inputFormDataUsers" type="phone" id="tel" name="tel_num" placeholder="Zmień dane" />
								{/* <div onClick={this.handleChangeValues}>dd</div> */}

								<br />
								<button className="buttonFormSubmitChangeUsers">Zatwierdż</button>
							</section>
						</Form>
					</Formik>
					{/* <div onInput={this.valueUsers}>{this.props.headerTitle.first_name}</div> */}
				</section>
			</section>
		)
		// 	let cos = document.getElementById('dobre').innerText;
		// console.log(cos);
	}
}
