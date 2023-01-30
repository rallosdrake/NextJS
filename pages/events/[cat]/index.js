import Link from "next/link";
import Image from "next/image";
import CatEvent from "../../../src/components/events/CatEvents";

const CategoryPage = ({ data, pageName }) => (
  <CatEvent data={data} pageName={pageName} />
);
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
  const id = context.params.cat;
  const { allEvents } = await import("../../data/data.json");
  const data = allEvents.filter((item) => item.city === id);
  return { props: { data, pageName: id } };
}
