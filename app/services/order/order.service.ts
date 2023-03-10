import { instance } from '@/api/api.interceptor'

import { ORDERS } from './constants/order.constants'
import { IOrder } from '@/interfaces/order.interface'

export const OrderService = {
	async getAll() {
		return instance<IOrder[]>({
			url: ORDERS,
			method: 'GET'
		})
	}
}
