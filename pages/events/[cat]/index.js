import Link from "next/link";
import Image from "next/image";

const CategoryPage = ({ data, pageName }) => {
  pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1).toLowerCase();

  return (
    <div>
      <h2>Events in {pageName}</h2>
      {data.map((item) => (
        <Link key={item.id} href={`/events/${pageName}`}>
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
