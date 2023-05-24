import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import '../css/DisplayLines.css'

const DisplayLines = () => {
  const [usersData, setUsersData] = useState([])

  useEffect(() => {
    axios
      .post('http://localhost:3001/select/lines/all')
      .then(response => {
        const usersData = response.data
        setUsersData(usersData)
        console.log('Pobranie ulic z bazy')
        console.log(usersData)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const selectLines = user => {
    // Logika obsługi zdarzenia kliknięcia na linii
  }

  return (
    <section className="sectionLinesDisplayStreets section-line urban">
      {usersData.map(user => (
        <NavLink className="decorationNone" to={`/line/${user.id_line}`} key={user.id_line}>
          <div className="square-line normal-line">{user.num_line}</div>
        </NavLink>
      ))}
    </section>
  )
}

export default DisplayLines
