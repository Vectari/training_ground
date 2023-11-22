export function HeadingItalic(props) {
  // console.log(props);
  return (
    <h1>
      <i>{props.children}</i>
    </h1>
  );
}
