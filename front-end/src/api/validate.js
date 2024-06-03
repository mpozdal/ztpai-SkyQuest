import axios from 'axios';

async function isValidJwt(jwt) {
	await axios({
		url: 'http://localhost:8080/api/v1/auth/validate',
		headers: {
			Authorization: 'Bearer ' + jwt,
			'Content-Type': 'application/json',
		},
		params: {
			token: jwt,
		},
		method: 'get',
	}).then((response) => {
		console.log(response);
	});
}

export default isValidJwt;
