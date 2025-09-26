import { Card } from "@/components/UI/Card/Card";


export function ErrorComponent() {
  return (
    <Card>
        <h2>Something went wrong!</h2>
        <p>We're sorry, but something unexpected happened.</p>
        <p><strong>What you can try:</strong></p>
        <ul>
        <li>Refresh the page</li>
        <li>Clear your browser cache</li>
        <li>Try again in a few minutes</li>
        </ul>
        <button onClick={() => window.location.href = '/'}>
        Go to Home Page
        </button>
    </Card>
  );
}
