import EventsPage from "../../src/components/events/EventsPage";

const EventsIndex = ({ data }) => {
  return <EventsPage data={data} />;
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
