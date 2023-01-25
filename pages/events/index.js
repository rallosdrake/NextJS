import Image from "next/image";

const EventsIndex = ({ data }) => {
  return (
    <div>
      <h1>Events Page</h1>
      {data.map((item) => {
        return (
          <a key={item.id} href={`/events/${item.id}`}>
            <Image width={200} height={100} src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
};

export default EventsIndex;

// Client Side Rendering
export async function getStaticProps() {
  const { events_categories } = await import("../data/data.json");
  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
