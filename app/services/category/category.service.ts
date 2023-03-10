import { instance } from '@/api/api.interceptor'

import { CATEGORIES } from './constants/category.constants'
import { ICategory } from '@/interfaces/category.interface'

export const CategoryService = {
	async getAll() {
		return instance<ICategory[]>({
			url: CATEGORIES,
			method: 'GET'
		})
	},

	async getById(id: string) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return instance<ICategory>({
			url: `${CATEGORIES}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async create(name: string) {
		return instance<ICategory>({
			url: CATEGORIES,
			method: 'POST',
			data: { name }
		})
	},

	async update(id: string, name: string) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},

	async delete(id: string) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'DELETE'
		})
	}
}
