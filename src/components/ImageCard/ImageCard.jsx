export default function ImageCard({ data }) {
  return (
    <div>
      <img
        src={data.urls.small}
        alt={data.alt_description}
        width={300}
        height={200}
      />
    </div>
  );
}
