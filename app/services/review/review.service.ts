import { instance } from '@/api/api.interceptor'

import { REVIEWS } from './constants/review.constants'
import { IReviewData } from './interfaces/review-data.interface'
import { IReview } from '@/interfaces/review.interface'

export const ReviewService = {
	async getAll() {
		return instance<IReview[]>({
			url: REVIEWS,
			method: 'GET'
		})
	},

	async leave(id: string, data: IReviewData) {
		return instance<IReview>({
			url: `${REVIEWS}/leave/${id}`,
			method: 'POST',
			data
		})
	}
}
