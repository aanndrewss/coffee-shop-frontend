import Cookies from 'js-cookie'

import {
	IAuthResponse,
	IEmailPassword,
	ITokens
} from '@/store/user/user.interface'

import { instance } from '@/api/api.interceptor'

import { AUTH, Tokens } from '../constants/auth.constants'

export const getAccessToken = () => {
	const accessToken = Cookies.get(Tokens.ACCESS_TOKEN)
	return accessToken || null
}

export const getRefreshToken = () => {
	const refreshToken = Cookies.get(Tokens.REFRESH_TOKEN)
	return refreshToken || null
}

export const getUserFromStorage = () => {
	return JSON.parse(localStorage.getItem('user') || '{}')
}

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set(Tokens.ACCESS_TOKEN, data.accessToken)
	Cookies.set(Tokens.REFRESH_TOKEN, data.refreshToken)
}

export const removeFromStorage = () => {
	Cookies.remove(Tokens.ACCESS_TOKEN)
	Cookies.remove(Tokens.REFRESH_TOKEN)
	localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}

export const authRequest = (type: string, data: IEmailPassword) => {
	return instance<IAuthResponse>({
		url: `${AUTH}/${type}`,
		method: 'POST',
		data
	})
}
