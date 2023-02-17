import { FC } from 'react'
import Header from './Header/Header'
import styles from './Layout.module.scss'
import { ILayoutProps } from './Layout.props'
import Meta from './Meta/Meta'

const Layout: FC<ILayoutProps> = ({ children, title, description }) => {
	return (
		<>
			<Meta title={title} description={description} />
			<div className={styles.wrapper}>
				<Header />
				<main>{children}</main>
			</div>
		</>
	)
}

export default Layout
