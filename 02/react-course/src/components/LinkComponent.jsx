const address = "https://google.pl";

export function LinkComponent({ text = address, open }) {
  const target = open ? "_blank" : null;
  const rel = open ? "noopener noreferrer" : null;
  return (
    <a href={address} target={target} rel={rel}>
      {text}
    </a>
  );
}
