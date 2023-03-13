import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button, Input } from '@/components/shared'

import { IEmailPassword } from '@/store/user/user.interface'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { AuthProps } from './Auth.props'
import { validEmail } from './validators/valid-email'

const Auth: FC<AuthProps> = ({ isOpen, setIsOpen }) => {
	const { isLoading } = useAuth()

	const { login, register } = useActions()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') login(data)
		else register(data)

		reset()
	}
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as='div'
					className='relative z-10'
					onClose={() => setIsOpen(false)}
				>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black bg-opacity-25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
									<Dialog.Title
										as='h3'
										className='text-lg font-medium leading-6 text-gray-900 capitalize'
									>
										{type}
									</Dialog.Title>
									<form onSubmit={handleSubmit(onSubmit)}>
										<Input
											{...formRegister('email', {
												required: 'Email is required',
												pattern: {
													value: validEmail,
													message: 'Incorrect email!'
												}
											})}
											title='E-mail'
											placeholder='E-mail'
											error={errors.email}
										/>
										<Input
											{...formRegister('password', {
												required: 'Password is required'
											})}
											title='Password'
											placeholder='Password'
											type='password'
											error={errors.password}
										/>
										<Button className='capitalize'>{type}</Button>
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default Auth
