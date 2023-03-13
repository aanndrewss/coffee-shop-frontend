import { FC } from 'react'

import { Meta } from '../shared'

import styles from './Layout.module.scss'
import { ILayoutProps } from './Layout.props'
import Header from './header/Header'

const Layout: FC<ILayoutProps> = ({ children, title, description }) => {
	return (
		<>
			<Meta title={title} description={description}>
				<div className={styles.wrapper}>
					<Header />
					<main>{children}</main>
				</div>
			</Meta>
		</>
	)
}

export default Layout
