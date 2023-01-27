import Image from "next/image";
import Link from "next/link";

const EventsIndex = ({ data }) => {
  return (
    <div>
      <h1>Events Page</h1>
      {data.map((item) => {
        return (
          <Link key={item.id} href={`/events/${item.id}`}>
            <Image width={300} height={300} src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default EventsIndex;

// Client Side Rendering
export async function getStaticProps() {
  const { events_categories } = await import("../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
