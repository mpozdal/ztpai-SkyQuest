import React, { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import DashboardComponent from '../components/DashboardComponent';
import useAuth from '../hook/useAuth';
import DashboardUserComponent from '../components/DashboardUserComponent';

function UserDashboard() {
	const [option, setOption] = useState('flight');
	const user = useAuth();
	return (
		<div className="background">
			<Header />
			<div className="w-100 flex fd-row overflow-scroll">
				<div class="relative flex flex-col bg-clip-border rounded-xl  h-[calc(100vh-100px)] text-gray-700 w-full max-w-[20rem] p-4 bg-black bg-opacity-10">
					<div class="mb-2 p-4">
						<h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white">
							User dashboard
						</h5>
					</div>
					<nav class="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
						<div
							onClick={() => setOption('restaurant-add')}
							role="button"
							tabindex="0"
							class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
						>
							<div class="grid place-items-center mr-4"></div>
							Add restaurant
						</div>

						<div
							onClick={() => setOption('pending')}
							role="button"
							tabindex="0"
							class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
						>
							<div class="grid place-items-center mr-4"></div>
							Pending
						</div>
						<div
							onClick={() => {
								user.setJwt(null);
								localStorage.removeItem('jwt');
							}}
							role="button"
							tabindex="0"
							class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
						>
							<div class="grid place-items-center mr-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
									class="h-5 w-5"
								>
									<path
										fill-rule="evenodd"
										d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
							Log Out
						</div>
					</nav>
				</div>
				<DashboardUserComponent option={option} setOption={setOption} />
			</div>
		</div>
	);
}

export default UserDashboard;
