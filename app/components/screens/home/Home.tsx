import { FC } from 'react'

import { Button, Input } from '@/components/shared'

import Layout from '@/layout/Layout'

const Home: FC = () => {
	return (
		<Layout title='Home' description='Made by andrxw66'>
			<Input placeholder='Lasdawda' search={true} />
			<Button>Sent</Button>
		</Layout>
	)
}

export default Home
