import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/SectionLinesDisplayStreets.css';

const SectionLinesDisplayStreets = ({ onChange }) => {
  const [usersData, setUsersData] = useState([]);


  useEffect(() => {
    axios
      .post('http://localhost:3001/select/streets/all')
      .then(response => {
        const usersData = response.data;
        setUsersData(usersData);
        console.log('Pobranie ulic z bazy');
        console.log(usersData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleRowClick = user => {
    onSubmit(user);
  };

  const onSubmit = data => {
    axios.post('http://localhost:3001/auth/login/', data).then(response => {
      console.log(response.data);
    });
  };

  const selectLines = line => {
    console.log(line);
    onChange(line);
  };

  const deleteLine = (data, event) => {
    event.preventDefault();
    const answer = window.confirm(`Na pewno chcesz usunąć linie ${data.name} ?`);
    if (answer) {
      axios.post('http://localhost:3001/delete/street', data).then(response => {
        console.log(response.data);
      });
    } else {
      console.log('Anulowano usuwanie linii.');
    }
    console.log(data.id_street);
  };

  const changeRename = data => {
    const confirmDelete = window.prompt(`Podaj nową nazwę ulicy ? `);
    if (confirmDelete && !/\d/.test(confirmDelete)) {
      console.log(`Zmieniono nazwę`);
      data.rename = confirmDelete;
      axios.post('http://localhost:3001/update/street', data).then(response => {
        console.log(response.data);
      });
	//   res = 'true'
	//   setRes(res);
	//   console.log(res);
	// data.name


    } else {
      console.log('nie zmieniono.');
    }
  };

  return (
    <section className="sectionLinesDisplayStreetsT">
      <div className="headerSectionDisplayStreets">
        <p>LISTA ULIC</p>
      </div>
      <section className="contentDisplayStreets">
        <div className="tbl-header">
          <table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
            <thead>
              <tr>
                <th>Akcja</th>
                <th>Nazwa</th>
                <th className="thirdTd"></th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table className="tableDisplayStreets" cellPadding="0" cellSpacing="0" border="0">
            <tbody className="DispStreets ">
              {usersData.map(user => (
                <tr key={user.id_street}>
                  <td>
                    <span className="spanKlikLine" onClick={() => selectLines(user)}>
                      Wybierz
                    </span>
                  </td>
                  <td className="spanKlikLine" onClick={() => changeRename(user)}>
                    {user.name}
                  </td>
                  <td className="thirdTd">
                    <button className="buttonlistDisplayStret" onClick={event => deleteLine(user, event)}>
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default SectionLinesDisplayStreets;
