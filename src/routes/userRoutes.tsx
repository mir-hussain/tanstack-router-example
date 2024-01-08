import { Route } from '@tanstack/react-router';
import { rootRoute } from './rootRoute';
import Home from '@/pages/Home';
import About from '@/pages/About';

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => <About />,
});

const userRoutes = [indexRoute, aboutRoute];

export default userRoutes;
