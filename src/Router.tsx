import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { ErrorComponent } from './components/ErrorBoundary/components/ErrorComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: (
        <ErrorBoundary>
            <ErrorComponent />
        </ErrorBoundary>
    )
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
