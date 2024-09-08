import RootLayout from '@/layouts/root-layout'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom'
import ROUTES from './routes'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			{ROUTES.flatMap(item => {
				if ('children' in item) {
					return item.children.map(child => (
						<Route key={child.path} path={child.path} element={child.element} />
					))
				}
				return <Route key={item.path} path={item.path} element={item.element} />
			})}
		</Route>
	)
)

export default router
