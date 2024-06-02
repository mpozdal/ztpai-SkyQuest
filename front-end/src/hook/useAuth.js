import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';

function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useUser must be used within a UserProvider');
	}

	return context;
}
export default useAuth;
