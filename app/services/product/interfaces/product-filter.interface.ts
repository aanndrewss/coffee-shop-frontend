import { IPaginationData } from './product-pagination.interface'
import { EnumSortOrder } from './product-sort.enum'

export interface IProductDataFilters extends IPaginationData {
	sort?: EnumSortOrder
	searchTerm?: string
}
