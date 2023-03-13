import cn from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { BiSearch } from 'react-icons/bi'

import styles from './Input.module.scss'
import { InputProps } from './Input.props'

export const Input = forwardRef(
	(
		{ className, error, search = false, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<div className={cn(className, styles.inputWrapper)}>
				{search ? <BiSearch className={styles.searchIcon} /> : null}
				<input
					className={cn(styles.input, {
						[styles.error]: error
					})}
					ref={ref}
					{...props}
				/>
				{error && (
					<span role='alert' className={styles.errorMessage}>
						{error.message}
					</span>
				)}
			</div>
		)
	}
)
