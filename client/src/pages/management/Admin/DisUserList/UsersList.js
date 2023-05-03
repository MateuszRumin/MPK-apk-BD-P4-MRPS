import React from 'react'

const UsersList = props => {
	console.log(props.users)

	const users = props.users.map(user => (
		<div key={user.id.value}>
			<h4>{`${user.name.title} ${user.name.last}`}</h4>
		</div>
	))

	return <ul>{users}</ul>
}

export default UsersList
