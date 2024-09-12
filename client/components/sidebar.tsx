'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LockIcon } from 'lucide-react'

interface ISidebar {}

const Sidebar: React.FC<ISidebar> = ({}) => {
	const [showProjects, setShowProjects] = React.useState(true)
	const [showPriority, setShowPriority] = React.useState(true)
	const sidebarClass = `fixed flex flex-col h-full justify-between shadow-xl transition-all duration-300 z-50 bg-white dark:bg-black overflow-y-auto w-64`
	return (
		<div className={sidebarClass}>
			<div className='flex w-full h-full flex-col justify-start'>
				{/* LOGO */}
				<div className='flex items-center justify-between min-h-[56px] w-64 px-6 pt-3 bg-white dark:bg-black'>
					<div className='text-xl font-bold text-gray-800 dark:text-white'>EDLIST</div>
				</div>
				{/* TEAM */}
				<div className='flex items-center gap-5 border-y-[1.5px]  px-6 py-4 border-gray-200 dark:border-gray-800'>
					<Link href={'/'}>
						<Image
							src='/images/logo.png'
							alt='logo'
							width={40}
							height={40}
						/>
					</Link>
					<div>
						<h3 className='text-md font-bold tracking-wide dark:text-gray-200'>EDROH TEAM</h3>
						<div className='mt-1 flex items-center gap-2'>
							<LockIcon className='mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-200' />
							<p className='text-xs text-gray-500'>Private</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
