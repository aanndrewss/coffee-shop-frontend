import { instance } from '@/api/api.interceptor'

import { USER } from './constants/user.constants'
import { IUserData } from './interfaces/user-data.interface'
import { IUser } from '@/interfaces/user.interface'

export const UserService = {
	async getAll() {
		return instance<IUser[]>({
			url: USER,
			method: 'GET'
		})
	},

	async getProfile() {
		return instance<IUser>({
			url: `${USER}/profile`,
			method: 'GET'
		})
	},

	async update(data: IUserData) {
		return instance<IUser>({
			url: `${USER}/profile`,
			method: 'PUT',
			data
		})
	},

	async toggleFavorite(productId: string | number) {
		return instance<IUser>({
			url: `${USER}/profile/favorites/${productId}`,
			method: 'PATCH'
		})
	}
}
