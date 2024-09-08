import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { Separator } from './ui/separator'

function UserProfile() {
	return (
		<HoverCard>
			<HoverCardTrigger>
				<div className='flex items-center gap-3'>
					<span className='text-sm text-muted-foreground'>Григорий У.</span>
					<Avatar>
						<AvatarImage src='https://github.com/shadcn.png' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
			</HoverCardTrigger>
			<HoverCardContent className='w-[180px]' sideOffset={10} align='end'>
				<div className='flex flex-col text-muted-foreground'>
					<p className='flex items-center justify-between'>
						Имя: <span>Григорий</span>
					</p>
					<p className='flex items-center justify-between'>
						Фамилия: <span>Унгурян</span>
					</p>
					<Separator className='my-2' />
					<span className='text-xs'>Id: gu9312012024</span>
				</div>
			</HoverCardContent>
		</HoverCard>
	)
}

export default UserProfile
