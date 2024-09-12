'use client'
import React from 'react'
import { Search, Settings } from 'lucide-react'
import Link from 'next/link'

const Navbar: React.FC = () => {
	return (
		<div className='flex items-center justify-between bg-white px-4 py-3 dark:bg-black'>
			{/* TODO: Move search to separate component */}
			<div className='flex items-center gap-8'>
				<div className='relative flex h-min w-[200px]'>
					<Search className='absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer' />
					<input
						type='search'
						placeholder='Search...'
						className='w-full rouonded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white'
					/>
				</div>
			</div>
			<div className='flex items-center'>
				<Link
					href={'/settings'}
					className='h-min w-min rounded p-2 hover:bg-gray-100'
				>
					<Settings className='w-6 h-6 cursor-pointer dark:text-white' />
				</Link>
				<span className='ml-2 hidden mr-5 min-h-[2rem] w-[1px] bg-gray-200 md:inline-block'></span>
			</div>
		</div>
	)
}

export default Navbar
