import React, { useState } from 'react';
import useAuth from './hook/useAuth';
import { Navigate } from 'react-router-dom';
import ajax from './api/ajax';
const PrivateRoute = ({ children }) => {
	const user = useAuth();
	const [isValid, setIsValid] = useState(null);

	if (user && user.jwt) {
		return children;
	} else {
		return <Navigate to="/login" />;
	}
};

export default PrivateRoute;
