import React from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
function Login() {
	return (
		<section className="py-26 h-[100vh] background ">
			<Header />
			<div className="container flex justify-content-center h-[100vh]">
				<div className="max-w-lg m-auto py-8 w-full">
					<form action="">
						<div className="mb-6">
							<label className="block mb-2 font-extrabold" for="">
								Email
							</label>
							<input
								className="inline-block w-full p-4 leading-6 text-lg 
                                font-extrabold placeholder-black-900 bg-transparent 
                                shadow border-2 text-white border-white rounded-[50px]"
								type="email"
								placeholder="email"
							/>
						</div>
						<div className="mb-6">
							<label className="block mb-2 font-extrabold" for="">
								Password
							</label>
							<input
								className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-black-900 
                                 shadow border-2 text-white border-white bg-transparent rounded-[50px]"
								type="password"
								placeholder="**********"
							/>
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
