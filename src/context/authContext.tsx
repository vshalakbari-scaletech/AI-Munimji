'use client';

import { createContext, useState, useEffect, ReactNode, useContext, useCallback } from 'react';
import { useRouter } from 'next/navigation';

import HttpService from '@/shared/services/http.service';
import authService from '@/shared/services/auth.service';
import { API_PATH } from '@/shared/constants/api';
import { IUserData, LoginResponse } from '@/types/user';

// Define the type for your authentication context value
interface AuthContextValue {
	user: IUserData | null;
	token: string | null;
	login: (credentials: { email: string; password: string }) => Promise<IUserData | null>;
	logout: () => Promise<void>;
}

// Initialize the context with a default value
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<IUserData | null>(null); // Use User type for user state
	const [token, setToken] = useState<string | null>(null); // Use User type for user state
	const router = useRouter();

	const login = useCallback(
		(credentials: { email: string; password: string }) => {
			// You would normally make an API call to authenticate the user
			// For demonstration purposes, let's assume login is successful
			return new Promise<IUserData | null>((resolve, reject) => {
				HttpService.post(`${API_PATH.AUTH.LOGIN}`, credentials)
					.then((res: LoginResponse) => {
						const { token, user } = res;
						// set authentication data into context so it can used app wide
						authService.setAuthData(token);
						authService.setUserData(user);

						setToken(token);
						setUser(user);
						// go to dashboard once authenticated
						router.push('/dashboard');
						resolve(user);
					})
					.catch((err) => {
						setUser(null);
						reject(err.response);
					});
			});
		},
		[router]
	);

	const logout = useCallback(async () => {
		// Remove token from localStorage and reset user state
		authService.removeAuthData();
		setUser(null);
		setToken(null);
		router.push('/login'); // Redirect to login page after logout
	}, [router]);

	useEffect(() => {
		// Check if token exists in localStorage
		const user = authService.getUserData();
		const token = authService.getAccessToken();
		if (!user || !token) {
			// logout();
			// router.push('/login');
		} else {
			if (token) setToken(token);
			if (user) setUser(user);
			// router.push('/dashboard');
		}
	}, [logout, router]);

	const contextValue: AuthContextValue = { user, token, login, logout };

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const authContext = useContext(AuthContext);
	if (!authContext) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return authContext;
};
