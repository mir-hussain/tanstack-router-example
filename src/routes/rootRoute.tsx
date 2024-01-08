import App from '@/App';
import { RootRoute, Router } from '@tanstack/react-router';

export const rootRoute = new RootRoute({
  component: () => <App />,
});

const routeTree = rootRoute.addChildren([]);

export const router = new Router({ routeTree });
