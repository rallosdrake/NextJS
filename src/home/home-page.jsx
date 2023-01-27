import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const HomePage = ({ data }) => {
  return (
    <main className={styles.main}>
      <h1>Main Page</h1>
      <div>
        {data.map((item) => {
          return (
            <Link key={item.id} href={`/events/${item.id}`}>
              <Image
                width={200}
                height={100}
                src={item.image}
                alt={item.title}
              />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default HomePage;

// export async function getServerSideProps() {
//   const { events_categories } = await import("../../pages/data/data.json");
//   return {
//     props: {
//       data: events_categories,
//     },
//   };
// }
