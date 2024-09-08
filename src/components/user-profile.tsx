import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { List, Settings, User } from 'lucide-react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { Separator } from './ui/separator'

function UserProfile() {
	return (
		<HoverCard>
			<HoverCardTrigger>
				<div className='flex items-center gap-3'>
					<span className='text-sm text-muted-foreground/75'>Григорий У.</span>
					<Avatar>
						<AvatarImage src='https://github.com/shadcn.png' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
			</HoverCardTrigger>
			<HoverCardContent className='w-full' sideOffset={10} align='end'>
				<div className='flex flex-col text-muted-foreground'>
					<div className='flex items-center gap-3'>
						<Avatar>
							<AvatarImage src='https://github.com/shadcn.png' />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div className='text-sm p-2'>
							<p className='flex items-center justify-between'>
								Григорий Унгурян
							</p>
							<p className='flex items-center justify-between'>Front End Dev</p>
						</div>
					</div>
					<Separator className='my-2' />
					<div className='flex items-center justify-between p-2 text-muted-foreground'>
						<User className='w-3 h-3 hover:text-primary cursor-pointer' />
						<List className='w-3 h-3 hover:text-primary cursor-pointer' />
						<Settings className='w-3 h-3 hover:text-primary cursor-pointer' />
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	)
}

export default UserProfile
