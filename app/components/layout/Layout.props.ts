import { ReactNode } from 'react'
import { IMetaProps } from './Meta/Meta.props'

export interface ILayoutProps {
	children: ReactNode
	title: string
	description: string
}
