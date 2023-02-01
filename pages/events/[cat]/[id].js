import Image from "next/image";
import SingleEvent from "../../../src/components/events/SingleEvent";
const SingleEventPage = ({ data }) => {
  return <SingleEvent data={data} />;
};

export default SingleEventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("../../data/data.json");

  const allPaths = allEvents.map((item) => {
    return {
      params: {
        cat: item.city.toString(),
        id: item.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import("../../data/data.json");
  const eventData = allEvents.find((item) => id === item.id);

  return {
    props: { data: eventData },
  };
}
