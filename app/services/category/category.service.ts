import { instance } from '@/api/api.interceptor'

import { CATEGORY } from './category.constants'
import { ICategory } from '@/interfaces/category.interface'

export const CategoryService = {
	async getAll() {
		return instance<ICategory[]>({
			url: CATEGORY,
			method: 'GET'
		})
	},
	async getById(id: string) {
		return instance<ICategory>({
			url: `${CATEGORY}/${id}`,
			method: 'GET'
		})
	},
	async getBySlug(slug: string) {
		return instance<ICategory>({
			url: `${CATEGORY}/by-slug/${slug}`,
			method: 'GET'
		})
	},
	async create(name: string) {
		return instance<ICategory>({
			url: CATEGORY,
			method: 'POST',
			data: { name }
		})
	},
	async update(id: string, name: string) {
		return instance<ICategory>({
			url: `${CATEGORY}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},
	async delete(id: string) {
		return instance<ICategory>({
			url: `${CATEGORY}/${id}`,
			method: 'DELETE'
		})
	}
}
