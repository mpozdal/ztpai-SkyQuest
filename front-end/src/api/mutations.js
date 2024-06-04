import axios from 'axios';
import useAuth from '../hook/useAuth';
export async function removeItem(type, id, jwt) {
	try {
		await axios({
			url: 'http://localhost:8080/api/v1/' + type + '/' + id,
			headers: {
				Authorization: `Bearer ${jwt}`,
				'Content-Type': 'application/json',
			},

			method: 'delete',
		}).then((response) => {
			console.log(response);
		});
	} catch (e) {
		console.log(e);
	}
}

export async function updateStatus(data, id, jwt) {
	data.status = 'ACCEPTED';
	console.log(data);
	try {
		await axios({
			url: 'http://localhost:8080/api/v1/restaurant/' + id,
			headers: {
				Authorization: `Bearer ${jwt}`,
				'Content-Type': 'application/json',
			},
			data: JSON.stringify(data),
			method: 'put',
		}).then((response) => {
			console.log(response);
		});
	} catch (e) {
		console.log(e);
	}
}
