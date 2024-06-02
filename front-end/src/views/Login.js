import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import ajax from '../api/ajax';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import Cookies from 'js-cookie';
import axios from 'axios';
function Login() {
	const user = useAuth();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMsg, setErrorMsg] = useState('');

	useEffect(() => {
		if (user.jwt) navigate('/profile');
	}, [user]);

	async function loginRequest(e) {
		e.preventDefault();
		const reqBody = {
			email: email,
			password: password,
		};

		try {
			await axios({
				url: 'http://localhost:8080/api/v1/auth/login',
				//withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'post',
				data: JSON.stringify(reqBody),
			}).then((response) => {
				localStorage.setItem('jwt', response?.data?.token);
				user.setJwt(response?.data?.token);
				navigate('/');
			});
		} catch (e) {
			console.warn(e);
		}
	}

	return (
		<section className=" h-[100vh] background ">
			<Header />
			<div className="container flex justify-content-center align-items-center ">
				<div className="max-w-lg m-auto w-full">
					<form
						onSubmit={(e) => {
							//sendLoginRequest();
							loginRequest(e);
						}}
					>
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
							<div>{errorMsg}</div>
						</div>
						<div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
							<div className="w-full lg:w-auto px-4  lg:mb-0">
								<label>
									<input type="checkbox" />
									<span className="ml-1 font-extrabold">
										Remember me
									</span>
								</label>
							</div>
							<div className="w-full lg:w-auto px-4">
								<NavLink
									to="/register"
									className="inline-block font-extrabold hover:underline href"
								>
									Forgot your password?
								</NavLink>
							</div>
						</div>
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
							Don&rsquo;t have an account?{' '}
							<NavLink
								className="text-red-500 hover:underline"
								to="/register"
							>
								Sign up
							</NavLink>
						</p>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Login;
