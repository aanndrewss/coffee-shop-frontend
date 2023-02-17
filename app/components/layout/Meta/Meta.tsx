import Head from 'next/head'
import { FC } from 'react'
import { IMetaProps } from './Meta.props'

const Meta: FC<IMetaProps> = ({ title, description }): JSX.Element => {
	return (
		<Head>
			<title>{title}</title>
			<link rel='icon' href='/favicon.ico' />
			<meta name='description' content={description} />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
		</Head>
	)
}

export default Meta
