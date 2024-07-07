export default function ImageCard({ data, openModal }) {
  return (
    <div onClick={() => openModal(data)}>
      <img
        src={data.urls.small}
        alt={data.alt_description}
        width={300}
        height={200}
      />
    </div>
  );
}
