import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './css/SectionConnectDisplayConnects.css';
let objStops = 0

const SectionConnectDisplayConnects2 = ({ selectLine2 }) => {
  const [usersData, setUsersData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState('');
  const [setData, setSetData] = useState([]);
  const [serverResponse, setServerResponse] = useState('');
  const [weekDays, setWeekDays] = useState([])

  const getStopsFreeForLine = () => {
	if (objStops === 0) {
		console.log('brak danych')
	} else {
		let objStopss = {
			id_line: objStops.id_line,
		}

		console.log(objStopss)

		axios
			.post('http://localhost:3001/select/routeTimes/forLinesdirFalse', objStopss)
			.then(response => {
				const weekDays = response.data
				setWeekDays(weekDays)
				console.log('Pobranie ulic z bazy')
				console.log(weekDays)
			})
			.catch(error => {
				console.log(error)
			})
	}
}







  useEffect(() => {
    



	function onObjectChange(props) {
		console.log(props)
		objStops = props
		getStopsFreeForLine()
	}
	if (selectLine2.id_line) {
		onObjectChange(selectLine2)
	}







  }, [selectLine2]);

  const openModal = (data) => {
    setIsOpen(true);
    setConfirmDelete(data.stop.name);
    setSetData(data);
    console.log(setData);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    setConfirmDelete(event.target.value);
  };

  const handleConfirm = () => {
    const validFormat = /^\d{2}:\d{2}$/.test(confirmDelete);
    if (confirmDelete && validFormat) {
      console.log(`Zmieniono nazwę`);
      setData.rename = confirmDelete;
      axios.post('http://localhost:3001/test', setData).then((response) => {
        console.log(response.data);
        setServerResponse(response.data); // Zapisz odpowiedź serwera w stanie
      });
    } else {
      console.log('nie zmieniono.');
      const res = 'Nie przesłano złe dane faza testów napisz np: 18:36';
      setServerResponse(res); // Zapisz odpowiedź serwera w stanie
      // closeModal();
    }
  };

  

  Modal.setAppElement('#root');

  return (
    <section className="sectionLinesDisplayStreetsT">
      <div className="headerSectionDisplayStreets">
        <p>CZAS PRZEJAZDU - A DO B</p>
      </div>
      <section className="contentDisplayStreets">
        <div className="tbl-header">
          <table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
            <thead>
            <tr>
								<th>Id</th>
								<th>Route_od</th>
								<th>Route_do</th>
								<th>Pn_pt 08:00-11:00</th>
								<th>Pn_pt 11:00-14:00</th>
								<th>Pn_pt od 14:00</th>
								<th>Sb 08:00-11:00</th>
								<th>Sb 11:00-14:00</th>
								<th>Sb od 14:00</th>
								<th>Nd 08:00-11:00</th>
								<th>Nd 11:00-14:00</th>
								<th>Nd od 14:00</th>
								<th className="thirdTd"></th>
							</tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
            <tbody className="DispStreets ">
            {weekDays.map(user => (
								<tr key={user.id_routeTime}>
									
                  <td>{user.id_routeTime}</td>
                  <td>{user.stopOne.stop.name}</td>
                  <td>{user.stopTwo.stop.name}</td>
                  <td>{user.week_mor}</td>
                  <td>{user.week_mid}</td>
                  <td>{user.week_eve}</td>
                  <td>{user.saturday_mor}</td>
                  <td>{user.saturday_mid}</td>
                  <td>{user.saturday_eve}</td>
                  <td>{user.sunday_mor}</td>
                  <td>{user.sunday_mid}</td>
                  <td>{user.sunday_eve}</td>



                    
                    {/* <span className="spanKlikLine" onClick={() => this.selectLines(user)}>
                        KLIKNIJ
                      </span>
                      <span className="spanKlikLine" onClick={() => this.changeRename(user)}>
                        ZMIEŃ NAZWE
                      </span> */}
                  
                 
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <Modal isOpen={isOpen} className="custom-modal" overlayClassName="custom-overlay" onRequestClose={closeModal}>
            <h2>Podaj nowy czas:</h2>
            <input type="text" placeholder="hh:mm" value={confirmDelete} onChange={handleInputChange} />
            <span className="closeMod" onClick={closeModal}>
              X
            </span>
            <button onClick={handleConfirm}>Potwierdź</button>
            {serverResponse && (
              <div>
                <p>{serverResponse}</p>
              </div>
            )}
          </Modal>
        </div>
      </section>
    </section>
  );
};

export default SectionConnectDisplayConnects2;
