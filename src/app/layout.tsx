import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Immigration service',
	description:
		'Осуществите свою мечту о жизни в Испании! Наша команда экспертов поможет вам сделать первый шаг к новому захватывающему приключению и найти свое счастье в этой удивительной стране!',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
				<link rel='icon' href='/favicon.svg' sizes='any' />
				<link rel='apple-touch-icon' href='/favicon.ico' sizes='any' />
				<link rel='apple-touch-icon' href='/favicon.svg' sizes='any' />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
