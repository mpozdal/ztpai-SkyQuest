import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [jwt, setJwt] = useState(localStorage.getItem('jwt'));
	const [email, setEmail] = useState('');

	useEffect(() => {
		if (jwt) setEmail(jwtDecode(jwt).sub);
	}, [jwt]);

	return (
		<AuthContext.Provider
			value={{
				jwt,
				setJwt,
				email,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
