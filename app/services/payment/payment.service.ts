import { instance } from '@/api/api.interceptor'

import { PAYMENT } from './constants/payment.constants'
import { IPaymentResponse } from '@/interfaces/payment.interface'

export const PaymentService = {
	async createPayment(amount: number) {
		return instance.post<IPaymentResponse>(PAYMENT, { amount })
	}
}
