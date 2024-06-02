import React, { useState } from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register() {
	const user = useAuth();

	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	async function createAndLoginUser(e) {
		e.preventDefault();
		const reqBody = {
			email: email,
			username: email,
			password: password,
		};

		try {
			await axios({
				url: 'http://localhost:8080/api/v1/auth/signup',
				//withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'post',
				data: JSON.stringify(reqBody),
			}).then((response) => {
				if (response.status === 200) navigate('/login');
			});
		} catch (e) {
			console.warn(e);
		}
	}
	return (
		<section className=" min-h-[100vh] background ">
			<Header />
			<div className="container flex justify-content-center ">
				<div className="max-w-lg m-auto w-full">
					<form onSubmit={(e) => createAndLoginUser(e)}>
						<div className="mb-6">
							<label
								className="block mb-2 font-extrabold"
								htmlFor=""
							>
								Email
							</label>
							<input
								className="inline-block w-full p-4 leading-6 text-lg 
                                font-extrabold placeholder-black-900 bg-transparent 
                                shadow border-2 text-white border-white rounded-[50px]"
								type="email"
								placeholder="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						{/* <div className="mb-6">
							<label
								className="block mb-2 font-extrabold"
								htmlFor=""
							>
								Username
							</label>
							<input
								className="inline-block w-full p-4 leading-6 text-lg 
                                font-extrabold placeholder-black-900 bg-transparent 
                                shadow border-2 text-white border-white rounded-[50px]"
								type="text"
								placeholder="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div> */}
						<div className="mb-6">
							<label
								className="block mb-2 font-extrabold"
								htmlFor=""
							>
								Password
							</label>
							<input
								className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-black-900 
                                 shadow border-2 text-white border-white bg-transparent rounded-[50px]"
								type="password"
								placeholder="**********"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="flex flex-wrap -mx-4 mb-6 items-center justify-between"></div>
						<button
							className="inline-block
                         w-full py-4 px-6 mb-6 text-center
                          text-lg leading-6 text-white font-extrabold  
                          bg-black
                          hover:bg-black border-3 border-black 
                          shadow rounded-[50px] transition duration-200"
						>
							Sign in
						</button>
						<p className="text-center font-extrabold">
							Alread an user?{' '}
							<NavLink
								className="text-red-500 hover:underline"
								to="/login"
							>
								Sign in
							</NavLink>
						</p>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Register;
