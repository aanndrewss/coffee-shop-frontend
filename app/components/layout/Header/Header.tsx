import { FC, useState } from 'react'

import { Button } from '@/components/shared'

import Auth from '@/screens/auth/Auth'

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header>
			<div>
				<Button onClick={() => setIsOpen(true)}>Login</Button>
			</div>
			<Auth isOpen={isOpen} setIsOpen={setIsOpen} />
		</header>
	)
}

export default Header
