import React, { Component } from 'react'
import LinesList from './LinesList'
import ButtonFetchLines from './ButtonFetchLines'

const API = 'https://randomuser.me/api/'

class DispLines extends Component {
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
				<ButtonFetchLines click={this.handleDataFetch} />
				{users ? <LinesList users={users} /> : users}
			</div>
		)
	}
}
export default DispLines
