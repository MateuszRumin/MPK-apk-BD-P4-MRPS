import React, { Component } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


import './css/SectionLinesDisplayStreets.css'
let zmienna = "";
let iloscwierszy;
class SectionLinesDisplayStops extends Component {


	state = {
		usersData: [],
	}


	

	getStreetsData = (idstret) => {

		
        
        // const data = { street_id: 3} // zamiast 123, wstaw wartość wybraną przez użytkownika
        // const id_street = { id_street: data.street_id }
		const id_street = {
					id_street: idstret,
			}


        axios
          .post('http://localhost:3001/select/stops/onStreet', id_street)
          .then(response => {
            const usersData = response.data
            this.setState({ usersData })
            console.log('Pobranie ulic z bazy')
            console.log(usersData)
          })
          .catch(error => {
            console.log(error)
          })
      
		}

		test = () =>{


			console.log("klinieto");
				this.getStreetsData(zmienna)
		
			}

	

	handleRowClick(user) {
		// console.log(user.emp_no)
		//return <SectionUsersEditionUsers myObject={user} />
		// this.props.onChange(user);
		this.onSubmit(user)
	}
	// Wysyła zapytanie do serwera odnoscnie konkretnej lini i w innym komponencie wyświetli dane
	onSubmit = data => {
		axios.post('http://localhost:3001/auth/login/', data).then(response => {
			console.log(response.data)
		})
	}

	addNewStops = data => {



		console.log("test");

		// axios.post('http://localhost:3001/auth/login/', data).then(response => {
		// 	console.log(response.data)
		// })
	}



	deleteLine(data) {
		console.log(data.id_street)

		const confirmDelete = window.prompt(
			`Czy na pewno chcesz usunąć linię ${data.name} ? \nWpisz "TAK", aby potwierdzić.`
		)

		if (confirmDelete === 'TAK') {
			// Wywołanie metody do usunięcia linii
			console.log(`Usuwam przystanek o id tutaj konkrtetna`)
			axios.post('http://localhost:3001/test', data).then(response => {
				console.log(response.data)
			})
		} else {
			console.log('Anulowano usuwanie linii.')
		}
	}

	changeRename(data) {
		// console.log(data)

		// console.log(data);
		const confirmDelete = window.prompt(`Podaj nową nazwę przystanku? `)

		if (confirmDelete && !/\d/.test(confirmDelete)) {
			console.log(`Zmieniono nazwę`)
			data.rename = confirmDelete
			axios.post('http://localhost:3001/update/stop', data).then(response => {
				console.log(response.data)
			})
		} else {
			console.log('nie zmieniono.')
		}
	}

	selectStops(line, event, index) {
		// console.log(user)
		//return <SectionUsersEditionUsers myObject={user} />

		// console.log(`ilosc wierszy to ${iloscwierszy}`);
		console.log(line)
		line.order = index+1;
		line.rows = iloscwierszy

		console.log(`Kliknięty element o indeksie: ${index}`);
		this.props.selectStops(line)
	}
	render() {
		const initialValues = {
			name: '',
		}
		const validationSchema = Yup.object().shape({
			name: Yup.string().required('Nie może być pusty'),
		})

		const onSubmit = data => {

		
			data.id_street = zmienna
			data.id_usr_emp = this.props.idAccountRole
			axios.post('http://localhost:3001/insert/stop', data).then(response => {
				console.log(response.data)
			})
		}


		
		const { usersData } = this.state
		
		// function selectSendLine(data) {
		// 	// Tuaj jest cały obiekt z wybranej ulicy

		// 	const id_street = {
		// 		id_street: data.street_id,
		// 	}
		iloscwierszy = usersData.length;
		// 	// TUTAJ WYSYŁA ZAPYTANIE O TO JAKIE PRZYSTANKI MAJĄ BYĆ WYŚWIETLONE
		// 	axios.post('http://localhost:3001/select/stops/onStreet', id_street).then(response => {
		// 		// const usersData = response.data

		// 		const usersData = response.data

		// 		console.log(usersData);
		// 		this.setState( usersData )

		// 		// tutaj bedzie dalszy ciąg
		// 	})
		// }
		

		return (
			<section className="sectionLinesDisplayStreets">


				{/* {this.props.selectLine.street_id && this.getStreetsData (this.props.selectLine)} */}
				




				<div className="headerSectionDisplayStreets">
					<p>Lista Przystanków </p>
				<div className='noDisplay'>{this.props.selectLine.id_street ?  zmienna =  this.props.selectLine.id_street : console.log("nie ma")}</div>


				Wybarłeś ulicę {zmienna} 
				<button onClick={this.test}>Pobierz przystanki</button>




				</div>
				<section className="contentDisplayStreets">
					<div className="tbl-header">
						<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
							<thead>
								<tr>
									<th>Id</th>
									<th>Nazwa</th>
									<th className="thirdTd"></th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="tbl-content">
						<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
							<tbody className="DispStreets ">
								{usersData.map((user, index) => (
									<tr key={user.stop_id}>
										<td>
											{user.stop_id}
											<span className="spanKlikLine" onClick={(event) => this.selectStops(user, event, index)} >
												KLIKNIJ
											</span>
											<span className="spanKlikLine" onClick={() => this.changeRename(user)}>
												ZMIEŃ NAZWE
											</span>
										</td>
										<td>{user.name}</td>

										<td className="thirdTd">
											
											<button className="buttonlistDisplayStret" onClick={() => this.deleteLine(user)}>
												X
											</button>
										</td>
									</tr>
									
								))}
								
							</tbody>
						</table>

					</div>
						
					<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
						<Form>
							<div className="headerRoleInAccount">
								<span>
									{/* Jest to przesyłane z AccountRole */}
									Dodaj przystanek:
									<ErrorMessage className="errorMessage" component="span" name="id_role" />
								</span>
								<span></span>
							</div>

							<section className="formContentDataRoleInAccount">
							<label htmlFor="imie">
									Nazwa użytkownika: <ErrorMessage className="errorMessage" component="span" name="username" />
								</label>
								<Field className="inputFormDataAccount" type="text" id="imie" name="name" />

								<br />

								<button className="buttonFormSubmitChangeRoleInAccount">Dodaj</button>
							</section>
						</Form>
					</Formik>
					
				</section>
			</section>
		)
	}
}
export default SectionLinesDisplayStops
