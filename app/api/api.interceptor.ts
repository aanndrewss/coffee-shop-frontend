import axios from 'axios'

import { errorCatch, getContentType } from './api.helper'
import { getAccessToken } from '@/services/auth/auth.helper'

const instance = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: getContentType()
})

instance.interceptors.request.use(async config => {
	const accessToken = getAccessToken()
	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

instance.interceptors.response.use(
	async config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true

			try {
				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') console.log()
			}
		}

		throw error
	}
)
