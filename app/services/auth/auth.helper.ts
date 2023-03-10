import Cookies from 'js-cookie'

import { IAuthResponse, ITokens } from '@/store/user/user.interface'

export const getAccessToken = async () => {
	const accessToken = Cookies.get(Tokens.ACCESS_TOKEN)
	return accessToken || null
}

export const getUserFromStorage = async () => {
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

export enum Tokens {
	REFRESH_TOKEN = 'refreshToken',
	ACCESS_TOKEN = 'accessToken'
}
