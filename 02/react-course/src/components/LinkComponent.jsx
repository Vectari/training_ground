export function LinkComponent({ text, open }) {
  const address = "https://google.pl";
  const target = open ? "_blank" : null;
  const rel = open ? "noopener noreferrer" : null;
  const isText = text ? text : address;
  return (
    <a href={address} target={target} rel={rel}>
      {isText}
    </a>
  );
}
