import Image from "next/image";

const SingleEventPage = ({ data }) => {
  return (
    <h1>
      <div>
        <Image src={data.image} width={500} height={300} alt={data.title} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </h1>
  );
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
