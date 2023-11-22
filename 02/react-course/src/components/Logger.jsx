export function Logger(props) {
  const date = new Date();
  console.log(`Godzina ${date.getHours()}:${date.getMinutes()}`);
  return <>{props.children}</>;
}
