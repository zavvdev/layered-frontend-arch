interface Props {
  cover: string;
  title: string;
  meta: string;
  price: string;
}

export function Book({ cover, title, meta, price }: Props) {
  return (
    <div>
      <img src={cover} alt={title} width={300} />
      <h3>{title}</h3>
      <i>{meta}</i>
      <div>
        <b>{price}</b>
      </div>
      <hr />
    </div>
  );
}
