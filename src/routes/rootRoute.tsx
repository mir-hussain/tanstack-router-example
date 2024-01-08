import App from '@/App';
import { RootRoute, Router } from '@tanstack/react-router';
import userRoutes from './userRoutes';

export const rootRoute = new RootRoute({
  component: () => <App />,
});

const routeTree = rootRoute.addChildren([...userRoutes]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
