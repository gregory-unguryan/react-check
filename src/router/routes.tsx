import Home from '@/pages/home'
import { HomeIcon, LucideIcon } from 'lucide-react'

interface BaseRoute {
	title: string
	icon?: LucideIcon
}

export interface ChildRoute extends BaseRoute {
	path: string
	element: JSX.Element
	isVisible?: boolean
}

interface ParentRoute extends BaseRoute {
	children: ChildRoute[]
	isVisible?: boolean
}

export type NavigationItem = ChildRoute | ParentRoute

const ROUTES: NavigationItem[] = [
	{
		title: 'Главная',
		path: '/',
		icon: HomeIcon,
		element: <Home />,
		isVisible: true,
	},
]

export default ROUTES
