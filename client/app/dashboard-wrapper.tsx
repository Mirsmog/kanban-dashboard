import React from 'react'
import Navbar from '@/components/shared/navbar'
import Sidebar from '@/components/sidebar'

interface IDashboardWrapper {
	children?: React.ReactNode
}

const DashboardWrapper: React.FC<IDashboardWrapper> = ({ children }) => {
	return (
		<div className='flex min-h-screen w-full bg-gray-50 to-gray-900'>
			<Sidebar />
			<main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64`}>
				<Navbar />
				{children}
			</main>
		</div>
	)
}

export default DashboardWrapper
