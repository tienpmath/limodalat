import { Poppins } from 'next/font/google'
import SiteHeader from './(client-components)/(Header)/SiteHeader'
import ClientCommons from './ClientCommons'
import './globals.css'
import '@/fonts/line-awesome-1.3.0/css/line-awesome.css'
import '@/styles/index.scss'
import 'rc-slider/assets/index.css'
import Footer from '@/components/Footer'
import FooterNav from '@/components/FooterNav'
import { Metadata } from 'next'
import ThemeProvider from './theme-provider'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Limousine Sài Gòn đi Đà Lạt |Bookinh xe Sài Gòn Đà Lạt tốt nhất 2025 | Đặt xe đi Đà Lạt | Dịch vụ thuê xe đi Đà Lạt',
	description: 'Booking online & rental online Xe limousine Sài Gòn đi Đà Lạt | Danh sách các hãng xe Sài Gòn Đà Lạt tốt nhất 2024 | Đặt xe đi Đà Lạt | Dịch vụ thuê xe đi Đà Lạt',
	keywords: 'limousine Sài Gòn đi Đà Lạt | Danh sách các hãng xe Sài Gòn Đà Lạt tốt nhất 2024 | Đặt xe đi Đà Lạt | Dịch vụ thuê xe đi Đà Lạt',
	// viewport:
	// 	'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
}

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: any
}) {
	return (
		<html lang="en" className={poppins.className}>
			<ThemeProvider>
				<body className="bg-white text-base text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200">
					<div>
						<SiteHeader />
						{children}
						<FooterNav />
						<Footer />
					</div>

					<ClientCommons />
				</body>
			</ThemeProvider>
		</html>
	)
}
