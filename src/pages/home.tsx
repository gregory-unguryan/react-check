import UserProfile from '@/components/user-profile'
import { Feather } from 'lucide-react'

function Home() {
	return (
		<div className='w-ful h-full items-center p-2'>
			<header className='flex items-center justify-between p-2'>
				<div className='flex items-center gap-1 group cursor-pointer border px-3 py-1 rounded-full hover:bg-primary transition-all duration-300'>
					<Feather className='w-4 h-4 group-hover:stroke-muted transition-all duration-300' />
					<span className='text-muted-foreground group-hover:text-muted transition-all duration-300'>
						Author
					</span>
				</div>
				<UserProfile />
			</header>
		</div>
	)
}

export default Home
