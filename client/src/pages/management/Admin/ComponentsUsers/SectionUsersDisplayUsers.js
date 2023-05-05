import React, { Component } from 'react'
import './css/SectionUsersDisplayUsers.css'
class SectionUsersDisplayUsers extends Component {
	render() {
		return (
			<section className="sectionUsersDisplayUsers">
				<div className="headerSectionDisplayUsers">
					<p>Pracownicy</p>
				</div>

				<section className="contentDisplayUsers">
					<div className="tbl-header">
						<table className="tableDisplayUser" cellpadding="0" cellspacing="0" border="0">
							<thead>
								<tr>
									<th>Id</th>
									<th>Imie</th>
									<th>Nazwisko</th>
									<th>Pesel</th>
									<th>Adres</th>
									<th>Numer</th>
									<th>Rola</th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="tbl-content">
						<table className="tableDisplayUser" cellpadding="0" cellspacing="0" border="0">
							<tbody>
								<tr>
									<td>1</td>
									<td>Krystian</td>
									<td>Kaczmarczyk</td>
									<td>12312345644</td>
									<td>Kraków 34-459 390A</td>
									<td>123456789</td>
									<td>Kierowca</td>
								</tr>

								<tr>
									<td>2</td>
									<td>Adam</td>
									<td>Kowalski</td>
									<td>12312345644</td>
									<td>Wadowice 34-451 36A</td>
									<td>123456789</td>
									<td>Zarządca</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
				
			</section>
		)
	}
}

export default SectionUsersDisplayUsers
