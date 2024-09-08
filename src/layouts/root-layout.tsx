import { Button } from '@/components/ui/button'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Contact, ListCheck, Settings, User } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
	return (
		<div className='relative h-screen flex flex-col items-center'>
			<HoverCard openDelay={300} closeDelay={100}>
				<HoverCardTrigger className='absolute -bottom-5'>
					<Button
						variant='ringHover'
						className='w-8 h-8 flex items-center justify-between gap-2 border rounded-full text-muted-foreground bg-muted hover:bg-muted-foreground/10 cursor-pointer transition-all duration-300'
					/>
				</HoverCardTrigger>
				<HoverCardContent
					className='w-full flex items-center justify-between gap-5 p-4 text-muted'
					side='top'
					align='center'
					sideOffset='2'
				>
					<User className='w-5 h-5 text-primary hover:text-primary cursor-pointer' />
					<ListCheck className='w-5 h-5 hover:text-primary cursor-pointer' />
					<Settings className='w-5 h-5 hover:text-primary cursor-pointer' />
					<Contact className='w-5 h-5 hover:text-primary cursor-pointer' />
				</HoverCardContent>
			</HoverCard>

			<main className='w-full flex flex-col flex-1'>
				<Outlet />
			</main>
		</div>
	)
}
