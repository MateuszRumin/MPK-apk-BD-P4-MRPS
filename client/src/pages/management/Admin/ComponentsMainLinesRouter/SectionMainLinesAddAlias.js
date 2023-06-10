import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal'
import "./css/SectionMainLinesAddAlias.css"
let objStops = 0
const SectionMainLinesAddAlias = ({ selectLine }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [usersData, setUsersData] = useState([])
	const [serverResponse, setServerResponse] = useState('')
	const [validationErr, setValidationErr] = useState('')


	const getStopsFreeForLine = () => {
		

			axios
				.post('http://localhost:3001/select/streets/all')
				.then(response => {
					const useData = response.data
					setUsersData(useData)
					console.log('Pobranie ulic z bazy')
					console.log(useData)
					
				})
				.catch(error => {
					console.log(error)
				})
		
			}


  const initialValues = {
    num_line: '',
    description: '',
  };

  const validationSchema = Yup.object().shape({
    num_line: Yup.string().required('Pole wymagane'),
    description: Yup.string().required('Pole wymagane'),
  });

  const onSubmit = data => {
    data.id_line = selectLine.id_line;
    axios.post('http://localhost:3001/test', data).then(response => {
      console.log(response.data);
    });
  };


  const closeModal = () => {
	setIsOpen(false)
	
}

const openModal = () => {
	setIsOpen(true)
	getStopsFreeForLine()
}
const handleConfirm = selectStop => {

	console.log(objStops)

	console.log(selectStop)

	

	


	axios.post('http://localhost:3001/test').then(response => {
		console.log(response.data)

		setServerResponse(response.data) // Zapisz odpowiedź serwera w stanie
	})
}

Modal.setAppElement('#root')
  return (
    <section className="addlineNew">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
          <section className="">
            <p>
              <b>Dodaj alias dla lini:</b>
            </p>

            <p>
              Linia: {selectLine.id_line}
              <ErrorMessage className="errorMessage" component="span" name="num_line" />
            </p>

            <Field type="text" name="num_line" placeholder="Alias lini" />
            <Field type="text" name="description" placeholder="Opis" />
            <ErrorMessage className="errorMessage" component="span" name="description" />

            <br />
            <br />

            <button type="submit" className='buttonTypeSubmitAddAlias'>Zatwierdź</button>
	  <i className="ti ti-square-plus addStopIcon iconPosition" onClick={() => openModal()}></i>
	 
          </section>
        </Form>
      </Formik>

				{validationErr && (
					<div className="errorMessage">
						<p>{validationErr}</p>
					</div>
				)}
	  <div>
				<Modal
					isOpen={isOpen}
					className="custom-modal modalWindow"
					overlayClassName="custom-overlay"
					
				>
				<h3>Tutaj nazwa</h3>

					<span className="closeMod " onClick={closeModal}>
						X
					</span>

					<section className="sectionLinesDisplayStreets section-line urban modalWindow2">
						<div className="tbl-content">
							<table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
								<tbody className="DispStreets ">
									{usersData.map(user => (
										<tr key={user.id_street}>
											<td>
												{user.name}
												<span className="spanKlikLine" onClick={() => handleConfirm(user)}>
													Dodaj
												</span>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</section>

					{serverResponse && (
						<div className="errorMessage">
							<p>{serverResponse}</p>
						</div>
					)}
				</Modal>
			</div>
    </section>
  );
};

export default SectionMainLinesAddAlias;
