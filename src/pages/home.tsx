import UserProfile from '@/components/user-profile'
import { Feather } from 'lucide-react'

function Home() {
	return (
		<div className='w-ful h-full flex flex-col items-center p-2'>
			<header className='w-full flex items-center justify-between p-4'>
				<div className='flex items-center gap-1 group cursor-pointer border px-3 py-1 rounded-full hover:bg-primary transition-all duration-300'>
					<Feather className='w-4 h-4 group-hover:stroke-muted transition-all duration-300' />
					<span className='text-muted-foreground group-hover:text-muted transition-all duration-300'>
						Author
					</span>
				</div>
				<UserProfile />
			</header>
			<div className='flex-1 basis-0 flex items-center justify-center text-muted-foreground/50 text-xl font-extralight'>
				Home page
			</div>
		</div>
	)
}

export default Home
