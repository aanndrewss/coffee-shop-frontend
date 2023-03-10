import { instance } from '@/api/api.interceptor'

import { STATISTICS } from './constants/statistics.constants'
import { IStatistics } from '@/interfaces/statistics.interface'

export const StatisticsService = {
	async getMain() {
		return instance<IStatistics[]>({
			url: `${STATISTICS}/main`,
			method: 'GET'
		})
	}
}
