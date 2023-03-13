import cn from 'clsx'
import { ForwardedRef, forwardRef } from 'react'

import styles from './Input.module.scss'
import { InputProps } from './Input.props'

export const Input = forwardRef(
	(
		{ className, error, title, Icon, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<div className={cn(className, styles.inputWrapper)}>
				<label>
					<span>{Icon ? <Icon className='mr-3' /> : null}</span>
					{title ? title : null}
					<input
						className={cn(styles.input, {
							[styles.error]: error
						})}
						ref={ref}
						{...props}
					/>
				</label>

				{error && (
					<span role='alert' className={styles.errorMessage}>
						{error.message}
					</span>
				)}
			</div>
		)
	}
)
