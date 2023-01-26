import Link from "next/link";
import Image from "next/image";

const CategoryPage = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Link key={item.id} href={`/events/${item.id}`}>
          <Image src={item.image} alt={item.title} width={500} height={500} />
          <h2>{item.title} </h2>
        </Link>
      ))}
    </div>
  );
};
export default CategoryPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../data/data.json");
  const allPaths = events_categories.map((item) => {
    return {
      params: { cat: item.id.toString() },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.cat;
  const { allEvents } = await import("../../data/data.json");
  const data = allEvents.filter((item) => item.city === id);

  return { props: { data, pageName: id } };
}
