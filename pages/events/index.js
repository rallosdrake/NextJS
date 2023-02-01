import AllEvents from "../../src/components/events/EventsPage";

const EventsPage = ({ data }) => {
  return <AllEvents data={data} />;
};

export default EventsPage;

// Client Side Rendering
export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
