import React from 'react'

interface IDashboardWrapper {
	children?: React.ReactNode
}

const DashboardWrapper: React.FC<IDashboardWrapper> = ({ children }) => {
	return (
		<div className='flex min-h-screen w-full bg-gray-50 to-gray-900'>
			<main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64`}>{children}</main>
		</div>
	)
}

export default DashboardWrapper
