export function PersonInfo({ person }) {
  let telSection =
    person.tel === undefined ? null : (
      <div>
        Telefon: <a href={`tel:${person.tel}`}>{person.tel}</a>
      </div>
    );

  return (
    <address>
      <div>
        <span>
          {person.name} {person.lastName}
        </span>
      </div>
      <div>
        Email: <a href={`mailto:${person.mail}`}>{person.mail}</a>
      </div>
      {telSection}
    </address>
  );
}
