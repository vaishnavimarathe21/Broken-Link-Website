import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';

export function HomePage() {
  return (
    <ErrorBoundary>
      <Welcome />
      <ColorSchemeToggle />
    </ErrorBoundary>
  );
}
