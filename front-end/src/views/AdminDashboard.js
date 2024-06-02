import React, { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import DashboardComponent from '../components/DashboardComponent';

function AdminDashboard() {
	const [option, setOption] = useState('flight');
	return (
		<div className="background">
			<Header />
			<div className="w-100 flex fd-row overflow-scroll">
				<SideBar setOption={setOption} />
				<DashboardComponent option={option} setOption={setOption} />
			</div>
		</div>
	);
}

export default AdminDashboard;
