import { instance } from '@/api/api.interceptor'

import { PRODUCTS } from './constants/product.constants'
import { IProductData } from './interfaces/product-data.interface'
import { IProductDataFilters } from './interfaces/product-filter.interface'
import { IProduct } from '@/interfaces/product.interface'

export const ProductService = {
	async getAll(queryData = {} as IProductDataFilters) {
		return instance<IProduct[]>({
			url: PRODUCTS,
			method: 'GET',
			params: queryData
		})
	},

	async getSimilar(id: string | number) {
		return instance<IProduct[]>({
			url: `${PRODUCTS}/similar/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return instance<IProduct>({
			url: `${PRODUCTS}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'GET'
		})
	},

	async getByCategory(categorySlug: string) {
		return instance<IProduct[]>({
			url: `${PRODUCTS}/by-category/${categorySlug}`,
			method: 'GET'
		})
	},

	async create(data: IProductData) {
		return instance<IProduct>({
			url: PRODUCTS,
			method: 'POST',
			data
		})
	},

	async update(id: string | number, data: IProductData) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'DELETE'
		})
	}
}
