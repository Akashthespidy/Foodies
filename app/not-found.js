export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        You can go back to the{" "}
        <a href="/" style={{ color: "white" }}>
          homepage
        </a>
        .
      </p>
    </main>
  );
}
