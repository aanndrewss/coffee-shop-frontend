import Head from 'next/head'
import { useRouter } from 'next/router'

import { titleMerge } from './Meta.helper'
import { ISeo } from './Meta.props'

export const Meta = ({
	title,
	description,
	image,
	children
}: ISeo): JSX.Element => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp='headline'>{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp='description'
							name='description'
							content={description}
						/>
						<link rel='canonical' href={currentUrl} />
						<meta property='og:locale' content='en' />
						<meta property='og:title' content={titleMerge(title)} />
						<meta property='og:url' content={currentUrl} />
						<meta property='og:image' content={image || '/favicon.ico'} />
						<meta property='og:description' content={description} />
					</>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
			</Head>
			{children}
		</>
	)
}
