import React, { Component } from 'react'
import UsersList from './UsersList'
import ButtonFetchUsers from './ButtonFetchUsers'

const API = 'https://randomuser.me/api/'

class DispUser extends Component {
	state = {
		users: null,
	}

	handleDataFetch = () => {
		console.log('click')
		fetch(API)
			.then(response => {
				if (response.ok) {
					// console.log(response)
					return response
				}
				throw Error(response.status)
			})
			.then(response => response.json())
			.then(data => {
				this.setState({
					users: data.results,
				})
			})
			.catch(error => console.log(error + 'błąd'))
	}

	render() {
		const users = this.state.users
		return (
			<div>
				<ButtonFetchUsers click={this.handleDataFetch} />
				{users ? <UsersList users={users} /> : users}
			</div>
		)
	}
}
export default DispUser
