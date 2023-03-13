import cn from 'clsx'

import styles from './Button.module.scss'
import { ButtonProps } from './Button.props'

export const Button = ({
	children,
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button className={cn(styles.button, className)} {...props}>
			{children}
		</button>
	)
}
