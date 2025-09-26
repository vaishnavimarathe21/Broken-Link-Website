import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    )
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
