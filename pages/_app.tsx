import { Urbanist } from '@next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import AuthProvider from '@/providers/auth-provider/AuthProvider'
import { TypeComponentAuthFields } from '@/providers/auth-provider/auth-page.types'

import '@/assets/styles/globals.scss'

import { persistor, store } from '@/store/store'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const urbanist = Urbanist({
	subsets: ['latin']
})

export default function App({
	Component,
	pageProps
}: AppProps & TypeComponentAuthFields) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AuthProvider Component={{ isOnlyUser: Component.isOnlyUser }}>
						<style jsx global>{`
							:root {
								--urbanist-font: ${urbanist.style.fontFamily};
							}
						`}</style>
						<Component {...pageProps} />
					</AuthProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
