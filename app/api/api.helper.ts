import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

import { instance } from './api.interceptor'

export const getContentType = () => ({
	'Content-Type': 'application/json'
})

export const errorCatch = (error: any): string => {
	const message = error?.response?.data?.message

	return message
		? typeof error.response.data.message === 'object'
			? message[0]
			: message
		: error.message
}

export const authRequest = (type: string, data: IEmailPassword) => {
	return instance<IAuthResponse>({
		url: `/auth/${type}`,
		method: 'POST',
		data
	})
}
