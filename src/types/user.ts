export interface LoginResponse {
	token: string;
	user: {
		name: string;
		role: 'admin' | string;
		userId: string;
	};
}

export interface IUserData {
	name: string;
	role: 'admin' | string;
	userId: string;
}

export interface UserNumber {
	waPhoneNumber: string;
	waPhoneNumberId: string;
}
