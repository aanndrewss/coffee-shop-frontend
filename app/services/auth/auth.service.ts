import axios from 'axios'
import Cookies from 'js-cookie'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

import { getContentType } from '@/api/api.helper'

import { AUTH, Tokens } from './constants/auth.constants'
import { authRequest, saveToStorage } from './helpers/auth.helper'

export const AuthService = {
	async main(type: 'login' | 'register', data: IEmailPassword) {
		const response = await authRequest(type, data)

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	},
	
	async getNewTokens() {
		const refreshToken = Cookies.get(Tokens.REFRESH_TOKEN)

		const response = await axios.post<string, { data: IAuthResponse }>(
			process.env.SERVER_URL + `${AUTH}/login/access-token`,
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) saveToStorage(response.data)
	}
}
