import { SquareMenu } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
	return (
		<div className='relative h-screen flex flex-col items-center'>
			<header className='absolute bottom-4 flex items-center justify-between gap-2 px-6 py-4 border rounded-xl text-muted-foreground'>
				<SquareMenu className='text-accent-foreground' /> Навигация по
				приложению
			</header>
			<main className='w-full flex flex-col flex-1'>
				<Outlet />
			</main>
		</div>
	)
}
