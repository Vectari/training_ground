export function LinkComponent() {
  const address = "https://google.pl";
  return (
    <a href={address} target="_blank" rel="noopener noreferrer">
      {address}
    </a>
  );
}
