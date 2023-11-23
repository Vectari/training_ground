export function PersonInfo({ person }) {
  let telSection = (
    <div>
      Telefon: <a href={`tel:${person.tel}`}>{person.tel}</a>
    </div>
  );

  if (person.tel === undefined) {
    telSection = null;
  }

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
