import UserProfile from '@/components/user-profile'

function Home() {
	return (
		<div className='w-ful h-full items-center p-2'>
			<header className='flex items-center justify-between p-2'>
				<span>Logo</span>
				<UserProfile />
			</header>
		</div>
	)
}

export default Home
